// file: src/prisma/operations/setup-prisma-engine.ts

import path from "path";
import fs from "fs";

export function setupPrismaEngine() {
    const platform = process.platform;
    const arch = process.arch;

    const binariesMap: Record<string, string> = {
        "darwin-arm64": "libquery_engine-darwin-arm64.dylib.node",
        "darwin-x64": "libquery_engine-darwin.dylib.node",
        "linux-x64": "libquery_engine-debian-openssl-3.0.x.so.node",
        "linux-x64-musl": "libquery_engine-linux-musl.so.node",
        "win32-x64": "query_engine-windows.dll.node",
    };

    let key = `${platform}-${arch}`;
    // Détection de musl (Alpine)
    if (platform === "linux" && isMusl()) key += "-musl";

    const binary = binariesMap[key];

    if (!binary) {
        console.warn(`⚠️ Unsupported platform: ${key}`);
        return;
    }

    const binaryPath = path.join(
        process.cwd(),
        "node_modules/@rodinwm/rodin-models/dist/generated/client",
        binary
    );

    console.log("✅ Setting PRISMA_QUERY_ENGINE_LIBRARY to", binaryPath);
    process.env.PRISMA_QUERY_ENGINE_LIBRARY = binaryPath;
}

function isMusl(): boolean {
    try {
        const lddPath = "/usr/bin/ldd";
        if (fs.existsSync(lddPath)) {
            const lddOutput = fs.readFileSync(lddPath, "utf8");
            return lddOutput.includes("musl");
        }
    } catch (_) {
    }
    // fallback
    try {
        return fs.readFileSync("/etc/alpine-release", "utf8").length > 0;
    } catch (_) {
        return false;
    }
}
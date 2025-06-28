// file: src/prisma/operations/setup-prisma-engine.ts
import path from "path";

export function setupPrismaEngine() {
    const platform = process.platform;
    const arch = process.arch;

    const binariesMap: Record<string, string> = {
        "darwin-arm64": "libquery_engine-darwin-arm64.dylib.node",
        "darwin-x64": "libquery_engine-darwin.dylib.node",
        "linux-x64": "libquery_engine-debian-openssl-3.0.x.so.node",
        "win32-x64": "query_engine-windows.dll.node",
    };

    const key = `${platform}-${arch}`;
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
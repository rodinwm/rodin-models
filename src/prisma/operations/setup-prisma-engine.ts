import path from "node:path";

export function setupPrismaEngine() {
    const basePath = path.dirname(require.resolve('@rodinwm/rodin-models/backend')) + '/generated/client';
    console.log(basePath);
    const platform = process.platform;
    const arch = process.arch;

    const binariesMap: Record<string, string> = {
        'darwin-arm64': 'libquery_engine-darwin-arm64.dylib.node',
        'darwin-x64': 'libquery_engine-darwin.dylib.node',
        'linux-x64': 'libquery_engine-debian-openssl-3.0.x.so.node',
        'win32-x64': 'query_engine-windows.dll.node'
    };

    const key = `${platform}-${arch}`;
    const binary = binariesMap[key];

    if (binary) {
        process.env.PRISMA_QUERY_ENGINE_LIBRARY = `${basePath}/${binary}`;
    } else {
        console.warn(`⚠️ Unsupported platform for Prisma: ${platform}-${arch}`);
    }
}
import path from "node:path";

export function setupPrismaEngine() {
    const basePath = path.dirname(require.resolve('@rodinwm/rodin-models/backend')) + '/generated/client';
    console.log(basePath);
    const platform = process.platform;
    const arch = process.arch;

    const binariesMap: Record<string, string> = {
        'darwin-arm64': 'query-engine-darwin-arm64',
        'darwin-x64': 'query-engine-darwin',
        'linux-x64': 'query-engine-debian-openssl-3.0.x',
        'win32-x64': 'query-engine-windows.exe'
    };

    const key = `${platform}-${arch}`;
    const binary = binariesMap[key];

    if (binary) {
        const fullPath = path.join(basePath, binary);
        process.env.PRISMA_QUERY_ENGINE_LIBRARY = fullPath;
        console.log('✅ Prisma binary path set to:', fullPath);
    } else {
        console.warn(`⚠️ Unsupported platform for Prisma: ${platform}-${arch}`);
    }
}
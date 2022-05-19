import { OSInfo } from '../index';

export default async function getMacInfo (): Promise<OSInfo | null> {
    const macosRelease = (await import('macos-release')).default;
    const macInfo      = macosRelease();

    if (!macInfo || !macInfo.name || !macInfo.version)
        return null;

    return macInfo;
}

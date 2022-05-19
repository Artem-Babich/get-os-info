import { OSInfo } from '../index';

export default async function getMacInfo (release?: string): Promise<OSInfo | null> {
    const macosRelease = (await import('macos-release')).default;
    const macInfo      = release ? macosRelease(release) : macosRelease();

    if (!macInfo || !macInfo.name || !macInfo.version)
        return null;

    return macInfo;
}

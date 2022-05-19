import { OSInfo } from '../index';

export default async function getWindowsInfo (release?: string): Promise<OSInfo | null> {
    const windowsRelease = (await import('windows-release')).default;
    const winVersion     = windowsRelease(release);

    return winVersion ? { name: 'Windows', version: winVersion } : null;
}

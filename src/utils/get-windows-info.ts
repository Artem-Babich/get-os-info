import { OSInfo } from '../index';

export default async function getWindowsInfo (): Promise<OSInfo | null> {
    const windowsRelease = (await import('windows-release')).default;
    const winVersion     = windowsRelease();

    return winVersion ? { name: 'Windows', version: winVersion } : null;
}

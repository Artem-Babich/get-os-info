import windowsRelease from 'windows-release';

export default async function getWindowsInfo () {
    const winVersion = windowsRelease();

    return winVersion ? { name: 'Windows', version: winVersion } : null;
}

import getLinuxInfo from './utils/get-linux-info';
import getWindowsInfo from './utils/get-windows-info';
import getMacInfo from './utils/get-mac-info';

const OS = require('os-family');

export interface OSInfo {
    name: string;
    version: string;
}


export default async function getOSInfo (): Promise<OSInfo | null> {
    if (OS.linux)
        return await getLinuxInfo();

    if (OS.win)
        return getWindowsInfo();

    if (OS.mac)
        return getMacInfo();

    return null;
}

export { getMacInfo, getWindowsInfo, getLinuxInfo, getOSInfo };

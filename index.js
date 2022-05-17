import OS from 'os-family';
import getLinuxInfo from "./utils/get-linux-info";
import getWindowsInfo from "./utils/get-windows-info";
import getMacInfo from "./utils/get-mac-info";

export default async function getOsInfo() {
    if (OS.win)
        return await getWindowsInfo();

    if (OS.linux)
        return await getLinuxInfo();

    if (OS.mac)
        return await getMacInfo();

    return null;
}

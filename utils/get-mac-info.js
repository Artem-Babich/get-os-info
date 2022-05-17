import macosRelease from "macos-release";

export default function getMacInfo(){
    const macInfo = macosRelease();

    if (!macInfo || !macInfo.name || !macInfo.version)
        return null;

    return macInfo;
}

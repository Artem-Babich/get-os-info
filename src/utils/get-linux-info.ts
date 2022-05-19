import getOS from 'getos';
import { OSInfo } from '../index';

export default async function getLinuxInfo (): Promise<OSInfo | null> {
    return new Promise(resolve => {
        getOS((e, osInfo) => {
            if (e)
                return resolve(null);

            if (osInfo.os !== 'linux' || !osInfo.dist || !osInfo.release)
                return resolve(null);

            return resolve({
                name:    osInfo.dist,
                version: osInfo.release,
            });
        });
    });
}

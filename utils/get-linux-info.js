import getOS from 'getos';

export default async function getLinuxInfo () {
    return new Promise(resolve => {
        getOS((e, osInfo) => {
            if (e)
                return resolve(null);

            if (!osInfo.dist || !osInfo.release)
                return resolve(null);

            return resolve({
                name:    osInfo.dist,
                version: osInfo.release,
            });
        });
    });
}

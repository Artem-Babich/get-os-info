const { describe, it }                          = require('mocha');
const { expect }                                = require('chai');
const { getOSInfo, getMacInfo, getWindowsInfo } = require('../lib');

describe('getOSInfo function', function () {
    it('Should return correct OS info', async function () {
        const osInfo = await getOSInfo();

        expect(osInfo).to.not.be.null;
        expect(osInfo).to.not.be.undefined;
    });
});

describe('getMacInfo function', function () {
    const correctRelease   = '13.2.0';
    const incorrectRelease = '4.0.0';

    it('Should return correct OS info', async function () {
        const osInfo         = await getMacInfo(correctRelease);
        const expectedResult = {
            name:    'Mavericks',
            version: '10.9',
        };

        expect(osInfo).to.deep.equal(expectedResult);
    });

    it('Should return null', async function () {
        const expectedResult = null;
        const osInfo         = await getMacInfo(incorrectRelease);

        expect(osInfo).to.equal(expectedResult);
    });
});

describe('getWindowsInfo function', function () {
    const correctRelease   = '10.0.22000';
    const incorrectRelease = '99.9.9';

    it('Should return correct OS info', async function () {
        const osInfo         = await getWindowsInfo(correctRelease);
        const expectedResult = {
            name:    'Windows',
            version: '11',
        };

        expect(osInfo).to.deep.equal(expectedResult);
    });

    it('Should return null', async function () {
        const expectedResult = null;
        const osInfo         = await getMacInfo(incorrectRelease);

        expect(osInfo).to.equal(expectedResult);
    });
});

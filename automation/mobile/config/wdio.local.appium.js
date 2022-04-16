import { config as sharedConfig } from './wdio.conf';

//
// ======
// Appium
// ======
//
sharedConfig.services = (sharedConfig.services ? sharedConfig.services : []).concat([
    [
        'appium',
        {
            // This will use the globally installed version of Appium
            command: 'appium',
            args: {
                // This is needed to tell Appium that we can execute local ADB commands
                // and to automatically download the latest version of ChromeDriver
                relaxedSecurity: true,
                address: "localhost"
            },
        },

    ],
]);
//
// =====================
// Server Configurations
// =====================
//
sharedConfig.port = 4723;

export default sharedConfig;
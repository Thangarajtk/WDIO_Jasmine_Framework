import { join } from 'path';
import sharedConfig  from './wdio.local.appium';

exports.config = {
    ...sharedConfig,
    capabilities: [{
        platformName: "Android",
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        "appium:platformVersion": "11",
        "appium:deviceName": "Pixel_3a_API_30",
        "appium:systemPort": 7878,
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(), 'ui-automation', 'mobile', 'app', 'Android.SauceLabs.Mobile.Sample.app.2.7.1.apk'),
        "appium:appPackage": "com.swaglabsmobileapp",
        "appium:appActivity": "com.swaglabsmobileapp.MainActivity",
        'appium:noReset': true,
        'appium:newCommandTimeout': 180,
        "appium:autoGrantPermissions": true
    }],
    services: ['appium']
}
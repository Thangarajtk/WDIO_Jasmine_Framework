import sharedConfig  from './wdio.local.appium';

exports.config = {
    ...sharedConfig,
    capabilities: [{
        platformName: "Android",
        maxInstances: 1,
        "appium:platformVersion": "11",
        "appium:deviceName": "Pixel_3a_API_30",
        "appium:chromedriverPort": 7979,
        "appium:automationName": "UiAutomator2",
    }],
    services: ['appium']
}
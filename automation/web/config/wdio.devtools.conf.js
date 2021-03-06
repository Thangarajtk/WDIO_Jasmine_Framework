import { config as sharedConfig } from './wdio.conf';

exports.config = {
    ...sharedConfig,
    specs: [
        './automation/web/devtool/chromeDevToolService.spec.js'
    ],
    services: ['devtools'],
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--disable-gpu',
                '--window-size=1440,735'
            ],
        }
    }],
}
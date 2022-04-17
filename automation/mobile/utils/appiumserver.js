import { main as appiumServer } from 'appium';

class AppiumServer {

    async startServer() {
        let args = {};
        return await appiumServer(args);
    }
}

export default new AppiumServer();
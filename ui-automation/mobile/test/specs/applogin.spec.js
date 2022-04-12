import LoginScreen from '../screenobjects/login.screen';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async () => {
        await LoginScreen.waitForIsShown(true);
    });

    it('should be able login successfully', async () => {
        await LoginScreen.login({ username: 'standard_user', password: 'secret_sauce' });
    });
});
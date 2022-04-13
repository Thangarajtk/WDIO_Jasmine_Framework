import LoginScreen from '../screenobjects/login.screen';
import ProductScreen from '../screenobjects/product.screen';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async () => {
        await LoginScreen.waitForIsShown(true);
    });

    it('should be able login successfully', async () => {
        await LoginScreen.login({ username: 'standard_user', password: 'secret_sauce' });
        await ProductScreen.waitForIsShown(true);

        expect(await ProductScreen.getTitleFromProductScreen()).toEqual('PRODUCTS');
    });
});
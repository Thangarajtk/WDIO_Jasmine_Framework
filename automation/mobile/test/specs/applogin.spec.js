import LoginScreen from '../screenobjects/login.screen';
import ProductScreen from '../screenobjects/product.screen';

import { username, password } from '../../data/logindata';
import { expectedData as expectedOutput } from '../../constants/FrameworkConstants';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async () => {
        await LoginScreen.waitForIsShown(true);
    });

    it('should be able login successfully', async () => {
        await LoginScreen.login(username, password);
        await ProductScreen.waitForIsShown(true);

        expect(await ProductScreen.getTitleFromProductScreen()).toEqual(expectedOutput.PRODUCT_SCREEN_TITLE);
    });
});
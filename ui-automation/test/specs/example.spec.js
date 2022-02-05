const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const config = require('../../../resources/config')
const FrameworkConstants = require('../../constants/FrameworkConstants')

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(config.username, config.password);
       
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(FrameworkConstants.LOGIN_SUCCESS);
    });
});



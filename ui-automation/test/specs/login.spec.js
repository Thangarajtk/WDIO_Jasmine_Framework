const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const logindata = require('../../resources/logindata')
const constants = require('../../constants/FrameworkConstants')

describe('Login', () => {

    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login(logindata.username, logindata.password);
       
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(constants.LOGIN_SUCCESS);
    });

    it('should throw error for invalid username', async () => {
        await LoginPage.login(logindata.invalidUsername, logindata.password);
       
        expect(LoginPage.flashMessage).toHaveTextContaining(constants.LOGIN_ERROR_INVALID_USERNAME);
    });

    it('should throw error for invalid password', async () => {
        await LoginPage.login(logindata.username, logindata.invalidPassword);
       
        expect(LoginPage.flashMessage).toHaveTextContaining(constants.LOGIN_ERROR_INVALID_USERNAME);
    });
});



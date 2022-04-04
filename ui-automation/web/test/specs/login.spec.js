const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const logindata = require('../../resources/logindata')
const constants = require('../../constants/FrameworkConstants')

const { LOGIN_SUCCESS, LOGIN_ERROR_INVALID_USERNAME,
    LOGIN_ERROR_INVALID_PASSWORD } = constants.login;

describe('Login', () => {

    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login(logindata.username, logindata.password);

        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(LOGIN_SUCCESS);
    });

    it('should throw error for invalid username', async () => {
        await LoginPage.login(logindata.invalidUsername, logindata.password);

        expect(LoginPage.flashMessage).toHaveTextContaining(LOGIN_ERROR_INVALID_USERNAME);
    });

    it('should throw error for invalid password', async () => {
        await LoginPage.login(logindata.username, logindata.invalidPassword);

        expect(LoginPage.flashMessage).toHaveTextContaining(LOGIN_ERROR_INVALID_PASSWORD);
    });
});



const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

const config = require('../../resources/config')

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login(config.username, config.password);
       
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});



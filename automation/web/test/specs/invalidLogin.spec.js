import LoginPage from '../pageobjects/login.page';
import { username, password, invalidUsername, invalidPassword } from '../../resources/logindata';
import { login as _login } from '../../constants/FrameworkConstants';

const { LOGIN_ERROR_INVALID_USERNAME,
    LOGIN_ERROR_INVALID_PASSWORD } = _login;

describe('Login', () => {

    beforeEach(async () => {
        await LoginPage.openApplication();
    });

    it('should throw error for invalid username', async () => {
        await LoginPage.login(invalidUsername, password);

        await expectAsync(LoginPage.flashMessage).toHaveTextContaining(LOGIN_ERROR_INVALID_USERNAME);
    });

    it('should throw error for invalid password', async () => {
        await LoginPage.login(username, invalidPassword);

        await expectAsync(LoginPage.flashMessage).toHaveTextContaining(LOGIN_ERROR_INVALID_PASSWORD);
    });
});



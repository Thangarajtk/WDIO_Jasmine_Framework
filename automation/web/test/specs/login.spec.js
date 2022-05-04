import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import { username, password } from '../../resources/logindata';
import { login as _login } from '../../constants/FrameworkConstants';

describe('Login', () => {

    beforeEach(async () => {
        await LoginPage.openApplication();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login(username, password);

        await expectAsync(SecurePage.flashAlert).toBeExisting(); // Jasmine uses async matchers called expectAsync.
        await expectAsync(SecurePage.flashAlert).toHaveTextContaining(LOGIN_SUCCESS);
    });
});



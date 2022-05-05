import LoginScreen from '../screenobjects/login.screen';

import { invalid_username, password } from '../../data/logindata';
import { expectedData as expectedOutput } from '../../constants/FrameworkConstants';

describe('Login - Incorrect username and password combination,', () => {
    beforeEach(async () => {
        await LoginScreen.waitForIsShown(true);
    });

    it('should throw error message for invalid login', async () => {
        await LoginScreen.login(invalid_username, password);
        let loginErrorMessage = await LoginScreen.getErrorMessageForInvalidLogin();

        expect(loginErrorMessage).toEqual(expectedOutput.INVALID_LOGIN_ERROR_MESSAGE);
    });
});
import AppScreen from './app.screen';

class LoginScreen extends AppScreen {

    constructor() {
        super('~test-Username');
    }

    get txtFieldUsername() { return $('~test-Username'); }
    get txtFieldPassword() { return $('~test-Password'); }
    get btnLogin() { return $('~test-LOGIN'); }
    get txtErrorMessage() {
        return $("//android.view.ViewGroup[@content-desc='test-Error message']/android.widget.TextView");
    }

    async tapOnLoginButton() {
        await this.btnLogin.click();
    }

    async login(username, password) {
        await this.txtFieldUsername.setValue(username);
        await this.txtFieldPassword.setValue(password);
        await this.tapOnLoginButton();
    }

    async getErrorMessageForInvalidLogin() {
        return await this.txtErrorMessage.getText();
    }
}

export default new LoginScreen();
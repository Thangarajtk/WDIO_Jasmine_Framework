import AppScreen from './app.screen';

class LoginScreen extends AppScreen {

    constructor() {
        super('~test-Username');
    }

    get txtFieldUsername() { return $('~test-Username'); }
    get txtFieldPassword() { return $('~test-Password'); }
    get btnLogin() { return $('~test-LOGIN'); }

    async tapOnLoginButton() {
        await this.btnLogin.click();
    }

    async login(username, password) {
        await this.txtFieldUsername.setValue(username);
        await this.txtFieldPassword.setValue(password);
        await this.tapOnLoginButton();
    }
}

export default new LoginScreen();
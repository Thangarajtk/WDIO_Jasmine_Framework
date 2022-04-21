import Page from './page';
import { waitAndSetValue, waitAndClick } from '../../utils/helper';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }
    get flashMessage () { return $('#flash') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await waitAndSetValue(this.inputUsername, username, 1000);
        await waitAndSetValue(this.inputPassword, password, 1000);
        await waitAndClick(this.btnSubmit, 1000);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    async openApplication () {
        await super.open('login');
    }
}

export default new LoginPage();

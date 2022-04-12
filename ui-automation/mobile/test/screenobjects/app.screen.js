export default class AppScreen {

    constructor (selector) {
        this.selector = selector;
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown (isShown = true) {
        return $(this.selector).waitForDisplayed({
            reverse: !isShown,
        });
    }
}
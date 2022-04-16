export default class AppScreen {

    constructor (selector) {
        this.selector = selector;
    }
   
    async waitForIsShown (isShown = true) {
        return $(this.selector).waitForDisplayed({
            reverse: !isShown,
        });
    }
}
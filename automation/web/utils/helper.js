export const waitForTextChange = async (element, text, timeout) => {
    await browser.waitUntil(
        async () => {
            return element.getText() === text;
        },
        { timeout }
    );
}

export const waitAndClick = async (element, timeout) => {
    await element.waitForClickable({ timeout });
    await element.click();
}

export const waitAndSetValue = async (element, value, timeout) => {
    await element.waitForEnabled({ timeout });
    await element.setValue(value);
}

export const focusOnElement = async (element, timeout) => {
    await element.waitForExist({ timeout: timeout });
    await browser.execute(
        async () => {
            element.focus();
        }, 
        element);
}

export const OpenNewWindow = async (url) => {
    await browser.newWindow(url);
}
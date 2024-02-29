const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    // NOTE: elements collection
    get fieldUsername () { return $('#user-name'); }
    get fieldPassword () { return $('#password'); }
    get buttonLogin () { return $('#login-button'); }
    errorUser = (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)


    async login (username) {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    async validateUserError (dynamicMessage) {
        await this.errorUser (dynamicMessage).waitForDisplayed({ timeout: 2500 });
        await expect(this.errorUser(dynamicMessage)).toBeDisplayed()
    }

    async loginProblemUser () {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await this.fieldUsername.setValue(process.env.USERNAME_PROBLEM_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    // async validateInvalidUser (dynamicMessage) {
    //     await this.errorInvalidUser(dynamicMessage).waitForDisplayed({ timeout: 2500 });
    //     await expect(this.errorInvalidUser(dynamicMessage)).toBeDisplayed()
    // }

    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();

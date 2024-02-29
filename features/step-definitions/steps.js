const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');


//login
Given(/^Meilani is on the login page$/, async () => {
    await LoginPage.open()
})

When(/^Meilani login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})

Then(/^Meilani should see home page$/, async () => {
    await HomePage.validateHomePage()
})

Then(/^Meilani should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.validateUserError(dynamicMessage)
})


//homepage
// Given(/^Meilani is on the home page$/, async () => {
//     await HomePage.open()
// })

// When(/^Meilani click add "(.*)" product to cart$/, async () => {
//     await HomePage.ButtonaddToCartBackpack()
// })

// Then(/^"(.*)" product is added to cart$/, async () => {
//     await HomePage.open()
// })
    


const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {
    get iconCart () { return $('.shopping_cart_link'); }
    get ButtonaddToCartBackpack () { return $('#add-to-cart-sauce-labs-backpack'); }

    async validateHomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(this.iconCart).toBeDisplayed()
    }
    
    async addBackpackToCart() {
        await this.ButtonaddToCartBackpack.click()
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();
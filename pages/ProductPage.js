import { expect } from "playwright/test"

export class ProductPage{
    constructor(page){
        this.page=page
        this.inventoryItems=page.locator('.inventory_item')
        this.cartBadge=page.locator('.shopping_cart_badge')
        this.cartlink=page.locator('.shopping_cart_link')
    }
    async addtoCart(productName){
        const button=await this.inventoryItems.filter({hasText:productName}).locator('button')
        if(await button.count()===0){
            console.log((`"${productName}" is not a valid product`));
            
            return
        }
        await button.click()
        await expect(button).toHaveText('Remove')
    }

    async getCartCount(){
        if(await this.cartBadge.count()===0){
            return 0
        }
        return parseInt(await this.cartBadge.textContent())
    }

    
}
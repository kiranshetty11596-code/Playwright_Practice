export class InventoryPage{
    constructor(page){
        this.page=page
        this.product=page.locator('.inventory_item')
        this.cartBadge=page.locator('.shopping_cart_badge')
    }

    async addToCart(productname){
        const product=this.product.filter({has:this.page.locator('.inventory_item_name',{hasText:productname})})
        await product.locator('button').click()
    }
    async getCartCount(){
        return await this.cartBadge.textContent()
    }

}

    
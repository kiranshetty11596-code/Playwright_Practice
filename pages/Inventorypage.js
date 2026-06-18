class InventoryPage{
    constructor(page){
        this.page=page
        this.product=page.locator('.inventory_item')
        this.productTitles=page.locator('.inventory_item_name')
        this.cartBadge=page.locator('.shopping_cart_badge')
    }

    async getAllProductTitles(){
        return await this.productTitles.allTextContents()
    }
    

    //Add product to cart by name //More reliable
    async addtoCart(productName){
        const productCard=this.product.filter({hasText:productName})
        await productCard.locator('button').click()
    }
    
}

module.exports={InventoryPage}
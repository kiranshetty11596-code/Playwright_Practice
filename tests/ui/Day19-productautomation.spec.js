import{test,expect} from '@playwright/test'
test('add products to cart and validate state',async ({page})=>{

    await page.goto('https://saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.locator('#login-button').click()
    await page.waitForSelector('.inventory_list')


    const products=page.locator('.inventory_item')
    const count=await products.count()
    console.log("Total count is",count)

    const firstProduct=products.first()
    
    const productName=await firstProduct.locator('.inventory_item_name').textContent()
    const productPrice=await firstProduct.locator('.inventory_item_price').textContent()
    console.log(productName,productPrice);


    await firstProduct.locator('button').click()

    await expect(firstProduct.locator('button')).toHaveText('Remove')

    const basket=page.locator('.shopping_cart_link')
    await expect(basket).toHaveText('1')
    await page.waitForTimeout(5000)

})


test('add 2 products to cart and validate state',async ({page})=>{

    await page.goto('https://saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.locator('#login-button').click()
    await page.waitForSelector('.inventory_list')
    const products=page.locator('.inventory_item')
    const count=await products.count()
    console.log("Total count is",count)

    const firstProduct=products.first()
    
    const productName=await firstProduct.locator('.inventory_item_name').textContent()
    const productPrice=await firstProduct.locator('.inventory_item_price').textContent()
    console.log(productName,productPrice);


    await firstProduct.locator('button').click()

    await expect(firstProduct.locator('button')).toHaveText('Remove',{timeout:5000})

    const secondProduct=products.nth(1)
    const secondName=await secondProduct.locator('.inventory_item_name').textContent()
    const secondButton=secondProduct.locator('button')
    await secondButton.click()
    await expect(secondButton).toHaveText('Remove')


    

    const basket=page.locator('.shopping_cart_link')
    await expect(basket).toHaveText('2')
    //await page.waitForTimeout(5000)

    await basket.click()

    const cartItems=await page.locator('.cart_item .inventory_item_name')
    await expect(cartItems).toHaveCount(2)

    const cartNames=await cartItems.allTextContents()
    await expect(cartNames).toContain(productName)
    await expect(cartNames).toContain(secondName) 
    
})


test.only('sort items low to high',async ({page})=>{

    await page.goto('https://saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.locator('#login-button').click()
    await page.waitForSelector('.inventory_list')
    const products=page.locator('.inventory_item')
    const count=await products.count()
    console.log("Total count is",count)
    await page.locator('.product_sort_container').selectOption('lohi')
    const allPrices= await products.locator('.inventory_item_price').allTextContents()
    console.log(allPrices);

    const prices=allPrices.map(p=>parseFloat(p.replace('$','')))
    console.log(prices);
    for(let i=0;i<prices.length-1;i++){
        expect(prices[i]).toBeLessThanOrEqual(prices[i+1])
    
    }
    console.log("success",prices[0]);
    
})
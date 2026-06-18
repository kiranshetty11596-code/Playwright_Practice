import{test,expect} from '@playwright/test'

test('Validate cart item consistency',async({page})=>{

    await page.goto('https://saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.locator('#login-button').click()

    await expect(page).toHaveURL(/inventory/)
    const product=page.locator('.inventory_item').nth(0)
    const firstProductName=await product.locator('.inventory_item_name').textContent()
    await product.locator('button').click()
    await expect(product.locator('button')).toHaveText('Remove')

    await page.click('.shopping_cart_link')
    const cartItem=await page.locator('.cart_item .inventory_item_name').textContent()
    await expect(cartItem).toBe(firstProductName)


})

test('add 3 items',async({page})=>{

    await page.goto('https://saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.locator('#login-button').click()

    await expect(page).toHaveURL(/inventory/)
    const productNames=[]
    for(let i=0;i<3;i++){
    const product=page.locator('.inventory_item').nth(i)
    const productName=await product.locator('.inventory_item_name').textContent()
    productNames.push(productName)
    await product.locator('button').click()
    await expect(product.locator('button')).toHaveText('Remove')
    }
    console.log(productNames)
    await page.click('.shopping_cart_link')
    await expect(page.locator('.cart_item .inventory_item_name')).toHaveText(productNames)
    const productDup=page.locator('.cart_item .cart_quantity')
    await expect(productDup).toHaveCount(3)

})

test('remove 1 out of 3',async({page})=>{

    await page.goto('https://saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.locator('#login-button').click()

    await expect(page).toHaveURL(/inventory/)
    const productNames=[]
    for(let i=0;i<3;i++){
    const product=page.locator('.inventory_item').nth(i)
    const productName=await product.locator('.inventory_item_name').textContent()
    productNames.push(productName)
    await product.locator('button').click()
    await expect(product.locator('button')).toHaveText('Remove')
    }
    console.log(productNames)
    await page.click('.shopping_cart_link')
    await expect(page.locator('.cart_item .inventory_item_name')).toHaveText(productNames)
    await expect(page.locator('.cart_item .cart_quantity')).toHaveCount(3)

    const removeProduct=page.locator('.cart_item').nth(0)
    await removeProduct.locator('button').click()
    await expect(page.locator('.cart_item .cart_quantity')).toHaveCount(2)


})

test('capture price and compare',async({page})=>{

    await page.goto('https://saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.locator('#login-button').click()

    await expect(page).toHaveURL(/inventory/)
    const productNames=[]
    const productPrices=[]
    for(let i=0;i<3;i++){
    const product=page.locator('.inventory_item').nth(i)
    const productName=await product.locator('.inventory_item_name').textContent()
    const productPrice=await product.locator('.inventory_item_price').textContent()
    productNames.push(productName)
    productPrices.push(productPrice)
    await product.locator('button').click()
    await expect(product.locator('button')).toHaveText('Remove')
    }
    console.log(productNames)
    console.log(productPrices)
    
    await page.click('.shopping_cart_link')
    await expect(page.locator('.cart_item .inventory_item_name')).toHaveText(productNames)
    await expect(page.locator('.cart_item .inventory_item_price')).toHaveText(productPrices)
    await expect(page.locator('.cart_item .cart_quantity')).toHaveCount(3)



})



test('refresh and verify',async({page})=>{

    await page.goto('https://saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.locator('#login-button').click()

    await expect(page).toHaveURL(/inventory/)
    
    const productNames=[]
    const productPrices=[]
    for(let i=0;i<3;i++){
        const product=page.locator('.inventory_item').nth(i)
        const productName=await product.locator('.inventory_item_name').textContent()
        const productPrice=await product.locator('.inventory_item_price').textContent()
        productNames.push(productName)
        productPrices.push(productPrice)
        await product.locator('button').click()
        await expect(product.locator('button')).toHaveText('Remove')
    }
    await page.click(".shopping_cart_link")
    await page.reload()

    await expect(page.locator('.cart_item .inventory_item_name')).toHaveText(productNames)
    await expect(page.locator('.cart_item .inventory_item_price')).toHaveText(productPrices)


})


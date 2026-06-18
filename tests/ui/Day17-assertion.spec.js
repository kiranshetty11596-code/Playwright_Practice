import {test,expect} from '@playwright/test'

test.beforeEach('Login Success Validation',async ({page})=>{
    await page.goto('https://saucedemo.com/')
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.click('#login-button')

    await expect(page).toHaveURL(/inventory/)
    const title=page.locator('.title')
    await expect(title).toBeVisible()

    await expect(title).toHaveText('Products')
})

test('Data integrity',async({page})=>{
    const initial =await page.locator('.inventory_item_name').allTextContents()
    await page.selectOption('.product_sort_container','za')
    const final=await page.locator('.inventory_item_name').allTextContents()
    console.log("Initial is",initial);
    console.log("final is",final);
    const expected=[...initial].reverse()
    console.log(expected);
    expect(expected).toEqual(final)
    
    
    
    


})
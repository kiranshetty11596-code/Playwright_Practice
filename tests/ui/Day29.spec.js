import{test,expect} from '@playwright/test'

// page.on('dialog', async dialog=>{
//     console.log(dialog.message());
//     await dialog.accept()
    
// })

test('login test', async ({page})=>{
    await page.goto('https://saucedemo.com/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page).toHaveURL(/inventory/)
    await page.selectOption('.product_sort_container','lohi')
    

})
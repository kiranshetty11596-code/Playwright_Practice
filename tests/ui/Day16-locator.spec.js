//page.getByRole('button',{name:'Login'})
//page.getByText('Products')
//page.getByTestId('login-button')
//page.locator('.btn.primary'


import {test,expect} from '@playwright/test'
test('stable locators test',async ({page})=>{

    await page.goto('https://saucedemo.com/')
    const username=page.getByPlaceholder('Username')
    const password=page.getByPlaceholder('Password')
   // const login= page.locator('#login-button')
    
    await username.fill('standard_user')
    await password.fill('secret_sauce')
    const login= page.getByRole('button',{name:'Login'})
    await login.click()
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.getByText('products')).toBeVisible()

})
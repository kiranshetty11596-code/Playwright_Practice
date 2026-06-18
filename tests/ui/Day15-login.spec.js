import{test,expect} from '@playwright/test'

test.describe('Login-Flow-SauceDemo',()=>
{

test('login test', async ({page})=>{
    await page.goto('https://saucedemo.com/')
    //assign it to a const and await expect(const).tobevisible()
    //Or await page.waitfornetworkidle()
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page).toHaveURL(/inventory/)

})

test.skip('Invalid Login',async ({page})=>{
    await page.goto('https://saucedemo.com/')
    await page.locator('#user-name').fill('standard_userxx')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
    const error=page.locator('.error-message-container.error').textContent()
    await expect(error).toBe('Epic sadface: Username and password do not match any user in this service')
    

})

test.skip('Empty Fields',async ({page})=>{
    await page.goto('https://saucedemo.com/')
    await page.locator('#login-button').click()
    const emptyError=await page.locator('.error-message-container.error').textContent()
    await expect(emptyError).toBe('Epic sadface: Username is required')


})










})


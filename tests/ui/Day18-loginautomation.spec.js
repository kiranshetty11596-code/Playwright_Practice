import{test,expect} from '@playwright/test'

test('User login flow-standard_user',async({page})=>{
    await page.goto('https://saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.locator('#login-button').click()
    await expect(page).toHaveURL(/inventory/)
    await expect(page.locator('.inventory_list')).toBeVisible()
})

test('locked out user',async({page})=>{
    await page.goto('https://saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','locked_out_user')
    await page.fill('#password','secret_sauce')
    await page.getByRole('button',{'name':'Login'}).click()
    const error = page.locator('.error-message-container.error')
    await expect(error).toHaveText('Epic sadface: Sorry, this user has been locked out.')
})

test('validate',async({page})=>{
    await page.goto('https://saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.getByRole('button',{'name':'Login'}).click()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page).toHaveTitle('Swag Labs')
    await page.locator('#react-burger-menu-btn').click()
    await expect(page.locator('#logout_sidebar_link')).toBeVisible()    
})

test('Empty',async({page})=>{
    await page.goto('https://saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.getByPlaceholder('Username').fill('standard_user')
    //await page.getByPlaceholder('Password','secret_sauce')
    await page.getByRole('button',{'name':'Login'}).click()
    const error = page.locator('.error-message-container.error')
    await expect(error).toHaveText('Epic sadface: Password is required')
      
})

test.only('refresh',async({page})=>{
    await page.goto('https://saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button',{'name':'Login'}).click()
    await expect(page).toHaveURL(/inventory/)
    //await page.waitForTimeout(2000)
    await page.reload()
    await expect(page).toHaveURL(/inventory/)
    
      
})

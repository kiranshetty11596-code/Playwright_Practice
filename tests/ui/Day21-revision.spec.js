import {test,expect} from '@playwright/test'

test('Exersise 1 2 3', async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.getByRole('button',{'name':'Login'}).click()
    await expect(page.locator('.inventory_list')).toBeVisible()

    const product=page.locator('.inventory_item').filter({hasText:'Sauce Labs Backpack'})
    await expect(product).toBeVisible()
    const button=product.locator('button')
    await button.click()
    await expect(button).toHaveText('Remove')
})

test('Exersise 4', async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','standard_use')
    await page.fill('#password','secret_sauce')
    await page.getByRole('button',{'name':'Login'}).click()
    const error=page.locator('.error-message-container.error')
    await expect(error).toHaveText('Epic sadface: Username and password do not match any user in this service')
})

test('Exersise 5', async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await expect(page.locator('#user-name')).toBeVisible()
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.getByRole('button',{'name':'Login'}).click()
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator('.inventory_list')).toBeVisible()

    await expect(page.locator('shopping_cart_link')).toHaveCount(0)
})
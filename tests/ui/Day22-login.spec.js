import{test,expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { InventoryPage } from '../../pages/Inventorypage'

test('Valid login',async({page})=>{
    const loginPage=new LoginPage(page)
    const inventoryPage=new InventoryPage(page)

    await loginPage.goto()
    await loginPage.login('standard_user','secret_sauce')
    await expect(page).toHaveURL(/inventory/)

    const titles=await inventoryPage.getAllProductTitles()
    console.log(titles);
    await expect(titles).toContain('Sauce Labs Backpack')
    
    await inventoryPage.addtoCart('Sauce Labs Backpack')

    const isAdded=page.locator('.shopping_cart_badge')
    await expect(isAdded).toHaveText("1")

})
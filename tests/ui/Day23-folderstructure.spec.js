import{test,expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { InventoryPage } from '../../pages/Day23InventoryPage'

test('Valid login',async({page})=>{
    const loginPage=new LoginPage(page)
    const inventoryPage=new InventoryPage(page)

    await loginPage.goto()
    await loginPage.login('standard_user','secret_sauce')
    await expect(page).toHaveURL(/inventory/)

    await inventoryPage.addToCart('Sauce Labs Backpack')
    const count=await inventoryPage.getCartCount()
    expect(count).toBe("1")

    

})
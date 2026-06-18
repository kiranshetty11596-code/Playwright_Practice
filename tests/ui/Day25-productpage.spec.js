import{test,expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { ProductPage } from '../../pages/ProductPage'

test('Valid login',async({page})=>{
    const loginPage=new LoginPage(page)
    const productPage=new ProductPage(page)

    await loginPage.goto()
    await loginPage.login('standard_user','secret_sauce')
    await expect(page).toHaveURL(/inventory/)

    await productPage.addtoCart('Sauce Labs Backpack')
    await productPage.addtoCart('Sauce Labs Fleece Jacket')
    await productPage.addtoCart('xxxx')

    console.log(await productPage.getCartCount())

})
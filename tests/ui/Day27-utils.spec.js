import{test,expect} from "@playwright/test"
import{LoginPage} from '../../pages/Day26LoginPage.js'
import { AssertionUtils } from "../../utils/assertionUtils.js"

test('utils',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    
    const login=new LoginPage(page)
    await login.login('standard_user','secret_sauce')
})

test('utils assertion ',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    
    const login=new LoginPage(page)
    await login.login('standard_user','secret_sauce')
})
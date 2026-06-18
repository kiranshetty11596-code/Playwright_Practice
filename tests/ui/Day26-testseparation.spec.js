import{test,expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import{users} from '../../fixtures/users'


test('test separation valid user',async({page})=>{
    const loginPage=new LoginPage(page)
    await loginPage.goto()
    await loginPage.login(users.validUser.username,users.validUser.password)
})

test('test separation wrong user ',async({page})=>{
    const loginPage=new LoginPage(page)
    await loginPage.goto()
    await loginPage.login(users.lockedUser.username,users.lockedUser.password)
    console.log(await loginPage.getError())
})


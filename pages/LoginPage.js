import { expect } from "@playwright/test"

export class LoginPage{
    constructor(page){
        this.page=page
        this.username=page.locator('#user-name')
        this.password=page.locator('#password')
        this.loginButton=page.getByRole('button',{name:'Login'})
        this.errorMsg=page.locator('[data-test="error"]')
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/')
    }
    async login(user,pass){
        await this.username.fill(user)
        await this.password.fill(pass)
        await expect(this.loginButton).toBeVisible()
        await this.loginButton.click()
    }
    async getError(){
        return await this.errorMsg.textContent()
    }
    async isErrorVisible(){
        return await this.errorMsg.isVisible()
    }
}

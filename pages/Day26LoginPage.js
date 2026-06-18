import { ActionUtils } from "../utils/actionUtils";
import { Logger } from "../utils/logger";

export class LoginPage{
    constructor(page){
        this.page=page
        this.username=page.locator('#user-name')
        this.password=page.locator('#password')
        this.loginBtn=page.locator('#login-button')
    }

    async login(username,password){
        Logger.info('starting login')
        await ActionUtils.safeFill(this.username,username)
        await ActionUtils.safeFill(this.password,password)
        await ActionUtils.safeClick(this.loginBtn)
        Logger.info('Login Completed')
    }
}
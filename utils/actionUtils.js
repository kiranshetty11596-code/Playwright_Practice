import { WaitUtils } from "./waitUtils";

export class ActionUtils{
    static async safeClick(locator){
        await WaitUtils.waitForVisible(locator)
        await locator.click()
    }

    static async safeFill(locator,value){
        await WaitUtils.waitForVisible(locator)
        await locator.fill(value)
    }

}
    

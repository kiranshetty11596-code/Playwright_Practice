export class WaitUtils{
    static async waitForVisible(locator,timeout=5000){
        await locator.waitFor({state:'visible',timeout})
    }


    static async waitforHidden(locator,timeout=5000){
        await locator.waitFor({state:'hidden',timeout})

    }
}   
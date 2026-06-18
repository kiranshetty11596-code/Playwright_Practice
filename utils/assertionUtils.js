import{expect} from '@playwright/test'
import { Logger } from './logger'

export class AssertionUtils{
    static async verifyText(locator,expectedText,timeout=5000){
        try {
        Logger.info(`Verifying text: ${expectedText}`)
        await expect(locator).toHaveText(expectedText,{timeout})
        Logger.info(`Verifying  completed: ${expectedText}`)
            
        } catch (error) {
            Logger.error("failed")
            throw error
            
        }
        
    }
    static async verifyVisible(locator,timeout=5000){
        Logger.info("verifying visibility")
        await expect(locator).toBeVisible({timeout})
        Logger.info("Visibility test done")
    }
    static async verifyCount(locator,expectedCount,timeout=5000){
        Logger.info('starting count')
        await expect(locator).toHaveCount(expectedCount,{timeout})
        Logger.info("counting done")
    }
}
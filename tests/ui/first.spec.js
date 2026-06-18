const {test,expect} = require('@playwright/test')

test('Open exa site and verify title',async({page})=>{

    await page.goto('https://example.com')
    await page.waitForTimeout(5000)

    const title=await page.title()
    console.log("Title is",title);
    await expect(page).toHaveTitle(/Example Domain/)
    await expect(page).toHaveTitle('Example Domain')
    const url=await page.url()
    console.log(url);
    
    
})

test('Open wikipedia',async({page})=>{

    await page.goto('https://www.wikipedia.com')
    await page.waitForTimeout(5000)

    const title=await page.title()
    console.log("Title is",title);
    await expect(page).toHaveTitle(/Wikipedia/)
    const url=await page.url()
    console.log(url);
    
    
})
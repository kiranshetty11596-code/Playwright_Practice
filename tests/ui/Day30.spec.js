import{test,expect} from '@playwright/test'

// test('Tab+iframe',async({browser})=>{
//     const context=await browser.newContext()
//     const page = await context.newPage()

//     await page.goto('https://www.saucedemo.com/')

//     const [newPage]=await Promise.all([
//         context.waitForEvent('page'),
//         page.click('newpagecss')
//     ])

//     await newPage.waitForLoadState('domcontentloaded')
    
//     const paymentFrame=newPage.frameLocator('#payment-iframe')
//     paymentFrame.locator('xx').fill('yy')

//     await expect(newPage.locator('asdasd')).toHaveText('asdsf')

// })

test('newpage', async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto('https://the-internet.herokuapp.com/windows')
    await expect(page).toHaveTitle('The Internet')
    
    const [newPage]=await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link',{name:'Click Here'}).click()

    ])
})


test('newframe', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/iframe')
    await expect(page).toHaveTitle('The Internet')
    
    const frame=page.frameLocator('#mce_0_ifr')
    await expect(frame.locator('#tinymce')).toHaveText('Your content goes here.')
})

test('new page and frame',async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto('https://demo.guru99.com/popup.php')
    await expect(page).toHaveURL(/popup.php/)

    const [newPage]= await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link',{name:'Click Here'}).click()
    ])

})

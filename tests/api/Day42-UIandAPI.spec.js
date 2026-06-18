import{test,expect} from '@playwright/test'

test('API creates bookinf=g and UI validates',async({request,page})=>{
    const payload={
        firstname:'Hybrid',
        lastname:'Test',
        totalprice:200,
        depositpaid:true,
        bookingdates:{checkin:'2026-01-01',checkout:'2026-01-05'}
    }
    const resposne=await request.post('https://restful-booker.herokuapp.com/booking',{data:payload})
    
    expect(resposne.status()).toBe(201)
    
    const body=await resposne.json()
    const bookingid=body.bookingid
    expect(bookingid).toBeDefined()



    //UI Validation

    await page.goto('url')
    await page.fill('#search',bookingid.toString())
    await page.click("#searchBtn")

    await expect(page.locator('#firstname')).toHaveText(payload.firstname)
    await expect(page.locator('#lastname')).toHaveText(payload.lastname)
})
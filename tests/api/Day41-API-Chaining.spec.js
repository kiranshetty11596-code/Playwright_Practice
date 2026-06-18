import{test,expect} from '@playwright/test'

test('Create and validate booking',async({request})=>{

    const payload={
        firstname:'SDET',
        lastname:'Training',
        totalprice:100,
        depositpaid:true,
        bookingdates:{checkin:'2026-06-17',checkout:'2026-06-20'}
    }

    const createresponse=await request.post('https://restful-booker.herokuapp.com/booking',{data:payload})

    expect(createresponse.status()).toBe(201)
    const body=await createresponse.json()
    console.log(body);

    const bookingid=body.bookingid
    expect(bookingid).toBeGreaterThan(0)
    console.log(bookingid);


    const getresponse=await request.get(`https://restful-booker.herokuapp.com/booking/${bookingid}`)
    expect(getresponse.status()).toBe(200)

    const booking=await getresponse.json()
    expect(booking.firstname).toBe(payload.firstname)
    expect(booking.lastname).toBe(payload.lastname)

    
})
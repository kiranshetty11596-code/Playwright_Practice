import{test,expect} from '@playwright/test'

test('Validating booking contract',async({request})=>{
    const response=await request.get('https://restful-booker.herokuapp.com/booking/1')
    const booking=await response.json()
    console.log((booking));

    expect(response.status()).toBe(200)
    expect(booking).toHaveProperty('firstname')
    expect(booking).toHaveProperty('lastname')
    expect(booking).toHaveProperty('totalprice')
    expect(booking).toHaveProperty('depositpaid')
    expect(booking).toHaveProperty('bookingdates')
    expect(booking.bookingdates).toHaveProperty('checkin')
    expect(booking.bookingdates).toHaveProperty('checkout')
    expect(booking.firstname.length).toBeGreaterThan(0)

    expect(typeof(booking.firstname)).toBe('string')
    expect(typeof(booking.totalprice)).toBe('number')
    expect(typeof(booking.depositpaid)).toBe('boolean')
    expect(typeof(booking.bookingdates)).toBe('object')

})
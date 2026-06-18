import{test,expect} from '@playwright/test'

test('POST',async ({request})=>{
    const payload={
        title:'SDET Learning',
        body:'POST API Automation',
        userId:123
        
    }
    const start=Date.now()
    const response=await request.post('https://jsonplaceholder.typicode.com/posts',{data:payload})
    
    const end=Date.now()

    await expect(response.status()).toBe(201)
    
    const responseBody=await response.json()
    console.log(responseBody);
    
    expect(responseBody).toHaveProperty('id')
    expect(responseBody.title).toBe(payload.title)
    expect(responseBody.body).toBe(payload.body)
    expect(responseBody.userId).toBe(payload.userId)
    console.log(end-start);
    
    expect(end-start).toBeLessThan(2000)


})
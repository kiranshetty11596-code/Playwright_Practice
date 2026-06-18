import{test,expect, request} from '@playwright/test'

test('GET users validation',async ({request})=>{
    const resposne=await request.get('https://jsonplaceholder.typicode.com/users')
    
    expect(resposne.status()).toBe(200)
    const users=await resposne.json()
    //console.log(users)
    await expect(users.length).toBeGreaterThan(0)
    await expect(users[0]).toHaveProperty('id')
    await expect(users[0]).toHaveProperty('username')
    await expect(users[0]).toHaveProperty('email')
    await expect(users[0].email).toContain('@')
    await expect(users[0]).toHaveProperty('address')
    await expect(users[0]).toHaveProperty('address.street')

       for(const user of users){
    await expect(user).toHaveProperty('id')
    await expect(user).toHaveProperty('username')
    await expect(user).toHaveProperty('email')
    await expect(user).toHaveProperty('address')
    await expect(users).toHaveProperty('address.street')
}
    const ids=users.map(user=>user.id)
    const uniqueids=new Set(ids)
    console.log((ids))
    console.log((uniqueids))
    
    expect(uniqueids.size).toBe(ids.length)
    console.log(uniqueids.size);
    console.log(ids.length);
    
    
    
})
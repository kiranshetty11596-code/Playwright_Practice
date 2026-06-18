import{test,expect, request} from '@playwright/test'

test('PUT',async ({request})=>{
    const payload={
        id:1,
        title:'updated title',
        body:'updated body',
        userId:1
}
const response=await request.put('https://jsonplaceholder.typicode.com/posts/1',{data:payload})

expect(response.status()).toBe(200)
const responseBody=await response.json()
console.log((responseBody));
expect(responseBody.id).toBe(payload.id)
expect(responseBody.title).toBe(payload.title)
expect(responseBody.body).toBe(payload.body)
expect(responseBody.userId).toBe(payload.userId)


})
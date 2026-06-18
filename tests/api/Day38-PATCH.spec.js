import{test,expect, request} from '@playwright/test'

test('PUT',async ({request})=>{
    const payload={

        title:'only title is updated',
        body:'also body'
}
const response=await request.put('https://jsonplaceholder.typicode.com/posts/1',{data:payload})

expect(response.status()).toBe(200)
const responseBody=await response.json()
console.log((responseBody))
expect(responseBody.id).toBe(1)
expect(responseBody.title).toBe(payload.title)



})
import { test, expect } from '@playwright/test';

test('DELETE post', async ({ request }) => {

    const response = await request.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    const response1 = await request.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(response.status()).toBe(200);

    // Verify deletion (conceptual check)
    const getResponse = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    const data = await getResponse.json();

    console.log(data);
});
import { test, expect } from '@playwright/test';

test('GET request returns 200', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2');
  expect(response.status()).toBe(200);
  
  const body = await response.json();
  expect(body.data.id).toBe(2);
});

test('POST request creates a resource', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'Khurram',
      job: 'SDET',
    },
  });
  expect(response.status()).toBe(201);
  
  const body = await response.json();
  expect(body.name).toBe('Khurram');
});

test('PUT request updates a resource', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    data: { name: 'Khurram Updated' },
  });
  expect(response.status()).toBe(200);
});

test('DELETE request removes a resource', async ({ request }) => {
  const response = await request.delete('https://reqres.in/api/users/2');
  expect(response.status()).toBe(204);
});
import { test, expect } from '@playwright/test';

test.describe('User API', () => {
  let createdId: number;

  test.afterEach(async ({ request }) => {
    // agar test ne resource banaya tha, use cleanup karo
    if (createdId) {
      await request.delete(`/users/${createdId}`);
      createdId = undefined as any;
    }
  });

  test('GET request returns 200', async ({ request }) => {
    const created = await request.post('/users', {
      data: { name: 'Test User', job: 'QA' },
    });
    const body = await created.json();
    createdId = body.id;

    const response = await request.get(`/users/${body.id}`);
    expect(response.status()).toBe(200);
  });

  test('POST request creates a resource', async ({ request }) => {
    const response = await request.post('/users', {
      data: { name: 'Khurram', job: 'SDET' },
    });
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe('Khurram');
    createdId = body.id;
  });

  test('PUT request updates a resource', async ({ request }) => {
    const created = await request.post('/users', {
      data: { name: 'Original', job: 'QA' },
    });
    const body = await created.json();
    createdId = body.id;

    const response = await request.put(`/users/${body.id}`, {
      data: { name: 'Khurram Updated' },
    });
    expect(response.status()).toBe(200);
  });

  test('DELETE request removes a resource', async ({ request }) => {
    const created = await request.post('/users', {
      data: { name: 'ToDelete', job: 'QA' },
    });
    const body = await created.json();

    const response = await request.delete(`/users/${body.id}`);
    expect(response.status()).toBe(200);
    // yahan createdId set NAHI karna — already delete ho chuka test ke andar
  });
});
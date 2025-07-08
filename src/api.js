// src/api.js
export const apiUrl = 'http://localhost/blog-api/'; 

export async function postData(url = '', data = {}) {
  const response = await fetch(apiUrl + url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    credentials: 'include', 
  });
  return response.json();
}

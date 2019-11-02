import 'regenerator-runtime/runtime';

export class ApiError extends Error {
  constructor(status, body) {
    super(`ApiError: ${status}. ${JSON.stringify(body)}`);
    this.status = status;
    this.body = body;
  }
}

export default function Api() {
  return {
    login,
    like,
    count,
    register,
  };

  function login(body) {
    return request('/users/login', { body, method: 'POST' });
  }

  function like(body) {
    return request('/like/', { body, method: 'POST' });
  }

  function count(body) {
    return request('/like/count', { method: 'GET' });
  }

  function register(body) {
    return request(`/users/register`, { body, method: 'POST' });
  }


  function request(path, {
    method,
    headers,
    body,
    ...config
  }) {
    const BASE_URL = 'http://localhost:3000';
    body = JSON.stringify(body);
    return fetch(`${BASE_URL}${path}`, {
      method,
      body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${getToken()}`,
        ...headers,
      },
      ...config,
    }).then(async (response) => {
      if (!response.ok) { throw response; }
      const json =  await response.json();
      return json
    });
  }

  function getToken() {
    return window.localStorage.getItem('likeit_token')
  }

}
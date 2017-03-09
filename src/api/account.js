import axios from 'axios';

export function fetch() {
  const url = 'http://localhost:3001/api/v1/protected';

  return axios.get(url, { withCredentials: true });
}

export function signin(payload) {
  const url = 'http://localhost:3001/api/v1/auth/local/signin';

  return axios.post(url, {
    email: payload.email,
    password: payload.password
  }, { withCredentials: true });
}

export function logout() {
  const url = 'http://localhost:3001/api/v1/logout';

  return axios.get(url, { withCredentials: true });
}

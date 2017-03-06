import axios from 'axios';

export function fetch() {
  const url = 'http://localhost:3001/api/v1/protected';

  return axios.get(url);
}

export function signin(payload) {
  const url = 'http://localhost:3001/api/v1/protected';

  return axios.post(url, {
    email: payload.email,
    password: payload.password
  }, { withCredentials: true });
}

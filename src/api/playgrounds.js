import axios from 'axios';

export function getPlaygrounds() {
  const url = 'http://localhost:3001/api/v1/playgrounds';

  return axios.get(url, { withCredentials: true });
}

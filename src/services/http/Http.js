import axios from 'axios';

class Http {
  constructor() {
    this.http = axios.create({
      baseURL: process.env.VUE_APP_API_BASE_URL,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    this.rawHttp = axios.create({
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
}

export default Http;

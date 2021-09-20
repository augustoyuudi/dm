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
  }

  get(url) {
    return this.http.get(url);
  }
}

const http = new Http();

export default http;

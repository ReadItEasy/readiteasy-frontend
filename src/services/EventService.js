import axios from "axios";
import NProgress from "nprogress";
const apiBooks = axios.create({
  baseURL: `http://127.0.0.1:8000/api-books/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

apiBooks.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

apiBooks.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

export default {
  getLanguages() {
    return apiBooks.get("/languages");
  },
  getBook(params) {
    return apiBooks.get("/book", {
      params: params
    });
  },
  getDetectedLanguage(params) {
    return apiBooks.get("/language-detector", {
      params: params
    });
  },
  getUserKnownWords(params) {
    return apiBooks.get("/user-known-words", {
      params: params
    });
  }
};

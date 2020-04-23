import axios from "axios";
import NProgress from "nprogress";

const apiBooks = axios.create({
  baseURL: `https://readiteasy.com`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  xsrfHeaderName: "X-CSRFToken",
  xsrfCookieName: "XCSRF-TOKEN"
});

apiBooks.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

apiBooks.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

export { apiBooks };

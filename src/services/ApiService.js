import axios from "axios";
import NProgress from "nprogress";

// console.log("process.env.NODE_ENV", process.env.NODE_ENV);
const apiBooks = axios.create({
  // baseURL: `https://readiteasy.com`,
  baseURL:
    process.env.NODE_ENV === "production"
      ? `https://readiteasy.com`
      // : `https://readiteasy.com`,
      : `http://127.0.0.1:8000/`,
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

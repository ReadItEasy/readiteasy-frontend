import axios from "axios";
import NProgress from "nprogress";

const apiReaditeasy = axios.create({
  // baseURL: `https://readiteasy.com`,
  baseURL:
    process.env.NODE_ENV === "production"
      ? `https://api.readiteasy.com`
      // : `https://api.readiteasy.com`,
      : `http://127.0.0.1:8000/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  xsrfHeaderName: "X-CSRFToken",
  xsrfCookieName: "XCSRF-TOKEN"
});

apiReaditeasy.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

apiReaditeasy.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

export { apiReaditeasy };

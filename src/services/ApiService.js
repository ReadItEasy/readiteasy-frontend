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

// apiReaditeasy.interceptors.request.use(config => {
//   NProgress.start();
//   return config;
// });

// apiReaditeasy.interceptors.response.use(response => {
//   NProgress.done();
//   return response;
// });

// Add a request interceptor
apiReaditeasy.interceptors.request.use(function (config) {
  // Do something before request is sent
  NProgress.start();
  return config;
}, function (error) {
  // Do something with request error
  console.error("error config", error)
  return Promise.reject(error);
});

// Add a response interceptor
apiReaditeasy.interceptors.response.use(function (response) {
  // Do something with response data
  NProgress.done();
  return response;
}, function (error) {
  // Do something with response error
  NProgress.done();
  
  console.error("error response", error)
  return Promise.reject(error);
});

export { apiReaditeasy };

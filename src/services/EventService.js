import axios from "axios";

// const apiClient = axios.create({
//   baseURL: `http://localhost:3000`,
//   withCredentials: false, // This is the default
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   }
// });

const apiBooks = axios.create({
  baseURL: `http://127.0.0.1:8000/api-books/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
const djangoApi = axios.create({
  baseURL: `http://127.0.0.1:8000/api/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  // getEvents() {
  //   return apiClient.get("/events");
  // },
  // getEvent(id) {
  //   return apiClient.get("/events/" + id);
  // },
  // postEvent(event) {
  //   return apiClient.post("/events", event);
  // },
  getLanguages() {
    return apiBooks.get("/languages");
  },
  djangoApiTest(link) {
    return djangoApi.get(link);
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
  }
};

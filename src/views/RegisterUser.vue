<template>
  <div class="register-div">
    <h1>REGISTER</h1>
    <form @submit.prevent="register">
      <label for="email">Email:</label>
      <input v-model="email" type="email" name="email" value />
      <label for="country">Country:</label>
      <input v-model="country" type="text" name="country" value />
      <label for="firstName">Fist name:</label>
      <input v-model="firstName" type="text" name="firstName" value />
      <label for="lastName">Last name:</label>
      <input v-model="lastName" type="text" name="lastName" value />
      <label for="password">Password:</label>
      <input v-model="password" type="password" name="password" value />
      <button type="submit" name="button">
        Register
      </button>
    </form>
  </div>
</template>

<script>
import { apiBooks } from "@/services/ApiService.js";
// import axios from 'axios';

// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// import Cookies from "js-cookie";
export default {
  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      country: ""
    };
  },
  methods: {
    register() {
      // console.log("Cookies : ", Cookies.get("csrftoken"))
      apiBooks
        .post("/users/", {
          email: this.email,
          first_name: this.firstName,
          last_name: this.lastName,
          password: this.password,
          profile: {
            country: this.country
          }
        })
        .then(() => {
          console.log("POST REGISTER SUCCEED");
          return this.$store.dispatch("login", {
            email: this.email,
            password: this.password
          });
        })
        .then(() => {
          this.$router.push({ name: "language-detector" });
        });
      // this.$store
      //   .dispatch("register", {
      //     email: this.email,
      //     password: this.password,
      //     firstName: this.firstName,
      //     lastName: this.lastName,
      //     country: this.country
      //   })
    }
  },
  created() {
    // document.cookie = "blah";
    console.log("register created");
    // console.log("Cookies.get('csrftoken')", Cookies.get("csrftoken"));
    // var csrftoken = getCookie('csrftoken');
    // console.log("csrftoken", csrftoken)
    // apiBooks.post("/register/", {

    //     firstName: "Fred",
    //     lastName: "Flintstone"

    // }, headers: { "X-CSRFToken": Cookies.get("csrftoken") });
    // apiBooks({
    //   method: "post",
    //   url: "/api-register/",
    //   data: {
    //     firstName: "Finn",
    //     lastName: "Williams"
    //   },
    // headers: { "X-CSRFToken": Cookies.get("csrftoken") }
    // });
    // axios({
    //   method: "post",
    //   url: 'http://127.0.0.1:8000/register/'
    // })
  }
};
</script>

<style scoped>
.register-div {
  margin-top: 5%;
}

form {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15em;
  margin-bottom: 2em;
  margin: auto;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5em;
  height: 2em;
  margin: 0.5em;
  border-radius: 5px;
  background: linear-gradient(to right, #39b982, #84cf6a);
  font-size: 1em;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 2.6em;
  padding: 0.5em;
  margin-bottom: 1em;
  border-radius: 5px;
  font: 1em "Avenir", Helvetica, sans-serif;
}
</style>

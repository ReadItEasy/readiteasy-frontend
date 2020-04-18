<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="login">
        <v-text-field
          v-model="email"
          label="username"
          prepend-icon="mdi-account-circle"
        />
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn type="submit" color="info">Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>

  <!-- <div class="login-div">
    <form @submit.prevent="login">
      <label for="username">Email:</label>
      <input v-model="email" type="email" name="email" value />
      <label for="password">Password:</label>
      <input v-model="password" type="password" name="password" value />
      <button type="submit" name="button">
        Login
      </button>
    </form>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false
    };
  },
  methods: {
    login() {
      console.log(this.email, this.password);
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          // this.$router.push({ name: "profile" });
          this.$router.go(-1);
        });
    }
  }
};
</script>

<style scoped>
/* .login-div {
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
} */
</style>

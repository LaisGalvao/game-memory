<template>
  <div>
    <b-jumbotron text-variant="dark" id="jumbo-login" border-variant="dark">
      <template #header> </template>

      <template #lead>
        <div id="logo-login"></div>
        <br />
        <h1>Entre para começar:</h1>
      </template>
    </b-jumbotron>
    <div class="container">
      <b-form-group>
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          placeholder="seuemail@email.com"
          required
          description="Nós não compartilharemos seu email com terceiros."
        ></b-form-input>
      </b-form-group>
      <br />
      <b-form-group>
        <b-form-input
          type="password"
          id="input-2"
          v-model="senha"
          placeholder="Sua senha"
          requiredtype="password"
          aria-describedby="password-help-block"
        >
        </b-form-input>
      </b-form-group>
      <b-button class="btn-login" type="submit" variant="primary" @click="login"
        >Entrar</b-button
      >
    </div>

    <div>
      <br />
      <b-link class="form-link" href="">
        <router-link :to="{ path: '/register' }">
          Não possuo cadastro</router-link
        >
      </b-link>
      <br />
      <b-link class="form-link-danger">
        <router-link class="form-link-danger" :to="{ path: '/passrecover' }">
          Esqueci minha senha</router-link
        ></b-link
      >
    </div>
  </div>
</template>

<script>
import router from "../router";
import firebase from "firebase";
export default {
  router: router,
  data() {
    return {
      email: "",
      senha: ""
    };
  },
  methods: {
    login() {
      /*firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.senha)
        .then(
          user => {
            this.$router.replace("init");
          },
          err => {
            alert("Ops! Algo inesperado aconteceu!", err);
          }
        ); */
        this.$router.replace({name: "init"})
    }
  }
};
</script>
<style scoped>
#logo-login {
  background: url("../assets/game-memory.png");
  background-size: contain;
  justify-content: space-evenly;
  margin-left: 35%;
  width: 100px;
  height: 100px;
}
#jumbo-login {
  background: url("../assets/game-memory-banner.png") no-repeat
    fixed center;
  background-size: cover;
  height: 60vh;
}

.form-link {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.form-link-danger {
  color: #ff0000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.btn-login {
  width: 150px;
  height: 55px;
  border-radius: 8px;
  background-color: #005f88;
}

input {
  border: solid 1px black;
  border-radius: 8px;
}
</style>

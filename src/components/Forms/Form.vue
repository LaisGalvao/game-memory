<template>
  <div>
    <div class="container-fluid">
      <b-form @submit="onSubmit" @reset="onReset" ref="form">
        <b-col v-for="item in items" :key="item.key">
          <b-form-group>
            <b-form-input
              v-if="['text', 'number', 'email'].includes(item.type)"
              :placeholder="item.placeholder"
              v-model="form[item.key]"
              :type="item.type"
              v-mask="item.mask"
              required
            ></b-form-input>

            <b-form-input
              v-if="['password'].includes(item.type)"
              v-model="form[item.key]"
              :placeholder="item.placeholder"
              :type="item.type"
              v-mask="item.mask"
              required
              class="w-50 d-inline"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-button type="submit" variant="primary"> Cadastrar</b-button>
      </b-form>

      <div>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          Aceito os termos e condições
        </b-form-checkbox>
        <b-link class="form-link-danger">
          <router-link class="form-link-danger" :to="{ path: '/' }">
            Voltar</router-link
          ></b-link
        >
        <div id="hide">
          State: <strong>{{ status }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../services";
export default {
  name: "Form",
  data() {
    return {
      status: "not_accepted",
      items: [
        { key: "name", type: "text", placeholder: "Seu nome:" },

        {
          key: "telephone",
          type: "text",
          mask: "+## (##) #####-####",
          placeholder: "Celular:"
        },

        { key: "email", type: "email", placeholder: "Insira um email:" },
        { key: "senha", type: "password", placeholder: "Insira sua senha:" },
        {
          key: "repetir senha",
          type: "password",
          placeholder: "Confirmar senha:"
        }
        //{key: "token", type: "text", placeholder: "Token: ", mask: "###-AAA-####"}
      ],
      form: {
        name: "",
        email: "",
        telefone: "",
        senha: "",
        repetirsenha: ""
        // token: ""
      }
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      // event.preventDefault();
      api.post("/users", this.form).then(
        response => {
          console.log(response);
          if (response.status === 201) {
            if (this.name.trim() === "" || this.email.trim() === "") {
              return;
            }
            alert("success");
            console.log(response);
          }
          console.log(response);
        },
        error => {
          alert(this, "danger", "cannot be registred", error.message);
          return Promise.reject(error);
        }
      );
    },
    onReset() {
      return;
    }
  }
};
</script>
<style scoped>
#hide {
  display: none;
}

.form-link-danger {
  color: #ff0000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>

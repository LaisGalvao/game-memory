<template>
    <div class="init-bg">
 
<div class="container">
  <p>Antes de prosseguir, um email de verificação 
      será enviado para o seu email cadastrado</p>
      <b-form-group>
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="seuemail@email.com"
          required
          description="Nós não compartilharemos seu email com terceiros."
        ></b-form-input>
     </b-form-group>
      <b-button class="btn-login" type="submit" 
      variant="primary" @click="sendMail()">Recuperar Senha</b-button>
      <br>
      <br>
      <b-link class="form-link-danger">
       <router-link class="form-link-danger" :to="{ path: '/'}">
       Voltar</router-link></b-link>
</div>

</div>
</template>
<script>
export default {
    data(){
        return{
            form:[],
            email: ''
        }
       
    },
    methods:{
      sendMail(){
        let link = this.form.email;
      }
    }
}
</script>
<style scoped>
.init-bg{
  background: url('../../assets/740bbaa10cd617aac4a996811badd66a.gif') no-repeat fixed center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
.container{
    padding-top: 50px;
    width: 90%;
    height: 90vh;
     background: rgba(255,255,255,0.4);
    backdrop-filter: blur(5px);
}

.btn-login{
  width: 150px;
  height: 55px;
  border-radius: 8px;
  background-color: #005F88;
}


.form-link-danger{
  color: #FF0000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto , Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>
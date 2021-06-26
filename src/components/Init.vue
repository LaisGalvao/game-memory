<template>
<div>
  <div class="init-bg">

    <h1>Olá {user}, seja bem vindo(a)!</h1>

     <b-button pill 
     variant="success"
     class="btn-img"
    style="width: 90px; height: 90px;"
    :to="{path: '/game'}"
    ></b-button>
      <br>
      <br>
       <h3>Iniciar desafios</h3>

       <br>
       <br>
  
  </div>
   <TabBar />
</div>
</template>
<script>
import router from '../router'
import TabBar from './TabBar';
export default {
  router: router,
  name: 'init',
  components: {
    TabBar
  }
}
</script>
<style scoped>

.init-bg{
  background: url('../assets/740bbaa10cd617aac4a996811badd66a.gif') no-repeat fixed center;
  background-size: cover; 
  height: 80vh;
}

.btn{
  margin-top: 40px;

}

.btn-img{
  background-image: url('../assets/green-play-button-icon.png');
    background-size: cover; 
    width: 60px;
    height: 60px;
}

h1{
  padding-top: 50px;
}

</style>
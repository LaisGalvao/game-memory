<template>
<div class="init-bg">
 
<div class="container">
   <Form />
</div>

</div>
</template>
<script>
import router from '../../router'
import Form from './Form'
export default {
  components: { Form },
    router: router,
     name: 'Register',
     data(){
       return{}
     },
  
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

</style>
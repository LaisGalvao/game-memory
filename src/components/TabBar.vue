<template>
<div class="footer-tab">
   <b-card>
    <b-tabs end>
      <b-tab title="Configs" active></b-tab>
      <b-tab title="Perfil"></b-tab>
    </b-tabs>
  </b-card>
</div>
</template>
<script>
export default {
    name:"TabBar"
}
</script>
<style scoped>
.footer-tab{
    position: relative;
    padding-top: 60px;
    width: 100%;
    height: 40px;
    background-color: #005F88;
}
.card-body,.nav-pills,.nav, .nav-link .card-header-tabs, .nav-tabs{
  background: #005F88;
  height: 70px;
  color: #FFF;
}
</style>
<template>
  <div class="home">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script >
import NavHeader from './../components/nav-header.vue'
  import NavFooter from './../components/nav-footer.vue'
export default { 
  name : 'home',
  components:{
      NavHeader,
      NavFooter
    }
}
</script>

<style lang="scss" scoped>

</style>
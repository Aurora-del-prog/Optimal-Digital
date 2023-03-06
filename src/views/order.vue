<template>
  <div class="order">
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script >
 import ServiceBar from './../components/service-bar.vue'
import NavFooter from './../components/nav-footer.vue'
export default { 
  name : 'order',
  components:{
    ServiceBar,
    NavFooter,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
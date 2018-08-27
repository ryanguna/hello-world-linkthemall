<template>

  <el-container class="app-container">
    <navigation-bar></navigation-bar>
    <main-contents></main-contents>
  </el-container>

</template>


<script>
  import NavigationBar from '@components/navigation/NavigationBar.vue'
  import MainContents from '@components/navigation/MainContents.vue'
  export default {
    components : {
      NavigationBar,
      MainContents
    },
    // _self.$store.commit('RECORD_LAST_ROUTE', _self.$route.fullPath);
    mounted(){
      const self = this;
      // self.$store.dispatch('getAuthenticatedUser');
      //
      // self.$store.dispatch('recordLastRoute', self.$route.fullPath);


    },
    watch: {
      '$route' (to, from) {
        // react to route changes...
        const self = this;

        // self.$store.dispatch('recordLastRoute', from.path);
      }
    }

  }
</script>

<style scoped lang="scss">

  @import '~scss_vars';



  .app-container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;


    .app-main {
      background: #324057;
      padding:0px;
      position: absolute;
      top: 38px;
      bottom: 0px;

      overflow: hidden;
      width: 100%;

    }

  }

</style>

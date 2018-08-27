<template>
  <div id="app">
    <transition name="fade"
                mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name : 'app'
}
</script>


<style>


  body {
    margin: 0px;
    padding: 0px;
    /*background: url(assets/bg1.jpg) center !important;
          background-size: cover;*/
  // background: #1F2D3D;
    font-family: Source Sans Pro, Roboto, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }

  tr {
    cursor:pointer;
  }



  .el-button--mini,
  .el-button--small,
  .el-message-box,
  .el-message,
  .el-notification,
  .el-input__inner,
  .el-select-dropdown,
  .el-textarea__inner{
    border-radius: 0px !important;
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  .box-card {
    border-radius: 0px;
  }
</style>

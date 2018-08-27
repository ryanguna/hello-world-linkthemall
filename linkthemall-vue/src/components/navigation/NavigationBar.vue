<template>
  <el-header class="app-header">

    <el-col :span="24" >



      <el-col :span="4" class="userinfo" v-if="authenticatedUser.employee">
        <el-dropdown trigger="click" >
          <span class="el-dropdown-link userinfo-inner">

            <img :src="authenticatedUser.profile_picture ? authenticatedUser.profile_picture : 'https://pbs.twimg.com/media/DOoC4oZWkAA4GgC.png'" />
            <span class="user_name" >
              {{authenticatedUser.employee.first_name}}
            </span>
          </span>


          <el-dropdown-menu slot="dropdown" style="border-radius:0px!important;">
            <el-dropdown-item @click.native="$router.push('/manage/products')">Management</el-dropdown-item>
            <!--<el-dropdown-item @click.native="$router.push('/components')">Components</el-dropdown-item>-->
            <!--<el-dropdown-item @click.native="$router.push('/tasks')">Tasks</el-dropdown-item>-->
            <!--<el-dropdown-item @click.native="$router.push('/categories')">Category</el-dropdown-item>-->
            <!--<el-dropdown-item @click.native="$router.push('/suppliers')">Supplier Master List</el-dropdown-item>-->
            <!--<el-dropdown-item @click.native="$router.push('/profile/' + authenticatedUser.user_id)">User Profile</el-dropdown-item>-->
            <!--<el-dropdown-item @click.native="$router.push('/management')">Management</el-dropdown-item>-->
            <!--<el-dropdown-item @click.native="$router.push('/client_management')">Client List</el-dropdown-item>-->
            <el-dropdown-item @click.native="logout">Logout</el-dropdown-item>
          </el-dropdown-menu>


        </el-dropdown>
      </el-col>


    </el-col>
  </el-header>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "NavigationBar",
    mounted(){
      const self = this;
    },
    computed : {
      authenticatedUser(){
        return this.$store.state.authenticatedUser;
      }
    },
    methods: {
      logout(){
        Vue.auth.destoryToken();
        this.$router.push('/login');
      }
    }
  }

</script>

<style scoped lang="scss">

  @import '~scss_vars';

  .app-header {
    background-color: rgba(55,70,79,0.9);
    color: #333;
    padding:0px;
    height: 40px !important;
    width: 100%;
    text-align: center;
    line-height: 40px;
    .userinfo {
      text-align: right;
      padding-right: 20px;
      float: right;
      .userinfo-inner {
        cursor: pointer;
        color:#fff;
        .user_name {
          margin-right:5px;
        }
        img {
          width: 32px;
          height: 32px;
          border-radius: 20px;
          margin: 3px 0px 10px 0px;
          float: right;
        }
      }
    }
    .logo {
      height:40px;
      padding-left:20px;
      padding-right:20px;
      background-color:rgba(0,0,0,0.5);
      img {
        width: 30px;
        height: 32px;
        border-radius: 20px;
        margin: 3px 0px 10px 0px;
        float: right;
      }
    }


  }



  .nav-items {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    li {
      float: left;
      a {
        display: block;
        width:77px;
        color: white;
        text-align: center;
        font-size: 13px;
        text-decoration: none;
        &:hover {
          background-color: rgba(0,172,255,0.1);
        }
      }

    }
  }



  .router-link-active {
    background-color: rgba(0,172,255,0.7);
    cursor: pointer;
  }
  .router-link-exact-active {
    background-color: rgba(0,172,255,0.7);
    cursor: pointer;
  }

</style>

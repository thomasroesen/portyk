<template>
<div id="app">
  <el-row type="flex" justify="center" align="middle">
    <el-col :span=8><img class="logo" src="./assets/logo.png" alt=""></el-col>
    <el-col :span=16>
      <el-menu :default-active="routes[0].name" class="nav" mode="horizontal" router>
          <el-menu-item class="nav-item" v-for="route in routes" :index="route.name" :route="route">{{route.name}}</el-menu-item>
        </el-menu>
    </el-col>
  </el-row>
  <el-row>
      <router-view></router-view>
  </el-row>
</div>
</template>

<script>
  import routes from './router-config'
  export default {
    name: 'app',
    data () {
      return {
        routes
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  @import url(http://fonts.googleapis.com/css?family=Roboto);
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .nav {
    background: none;
  }

  .el-menu-item.nav-item {
    font-size: 1.1em;
    font-weight: 100;
    border-bottom: none;
    margin-right: 20px;
  }

  .el-menu-item.nav-item:hover {
    background-color: transparent;
    border-bottom: 3px solid #20a0ff;
  }

  .el-menu-item.is-active {
    border-bottom: 3px solid #20a0ff;
  }

  .logo {
    max-width: 50px;
    display: flex;
    margin: 0 auto;
  }
</style>

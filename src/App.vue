<template>
<div id="app">
  <el-menu theme="dark" default-active="1" class="navigation" mode="horizontal">
    <router-link v-for="(route, index) in routes" :to="route.path">
      <el-menu-item :index="index.toString()">{{route.name}}</el-menu-item>
    </router-link>
    <router-view></router-view>
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

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navigation {
  background: none;
}
.el-menu-item:hover {
  background-color: none !important;
}
</style>

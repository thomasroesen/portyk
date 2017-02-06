<template>
  <div class="home">
<el-row type="flex" justify="center" align="middle">
  <el-col :span="24">
    <el-carousel height=400px :interval="5000" arrow="always">
    <el-carousel-item v-for="image in images">
     <img class="carousel-image" :src="image.path" alt="">
    </el-carousel-item>
  </el-carousel>
  </el-col>
</el-row>
</div>
</template>
<script>
  export default {
    name: 'home',
    data () {
      return {
        images: [
          {
            name: 'Placeholder 1',
            path: require('../assets/banner_placeholder.jpg')
          },
          {
            name: 'Placeholder 2',
            path: require('../assets/mega-fortune-jackpot.png')
          },
          {
            name: 'Placeholder 3',
            path: require('../assets/salon-placeholder.jpg')
          }
        ]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .el-carousel {
    margin-top: 10px;
  }

  .el-carousel__item:nth-child(2n) {
  }

  .el-carousel__item:nth-child(2n+1) {
  }
</style>

<template>
  <div id="app">
    <router-view class="main" />
    <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="star"
            :particleSize="4"
            linesColor="#FFFFFF"
            :linesWidth="2"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            class="cash"
    ></vue-particles>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>


<style lang="scss" scoped>
  #app {
    position: relative;
    width: 100%;
    height: 100%;
    .cash {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
</style>

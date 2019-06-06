<template>
  <div class="home">
    <div class="testBackground">
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    background: $--color-primary;
  }

  .testBackground {
    width: 100%;
    height: 100%;
    filter: opacity(0.75);
  }

  img {
    transform: translateX(-250px);
    height: 100%;
  }
</style>


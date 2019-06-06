<template>
  <div class="home">
    <div class="testBackground">
      <parallax-container>
        <parallax-element :parallaxStrength="150" :type="'translation'">
          <img src="@/assets/images/Mountain.jpg" alt="Wizard Narwahl" />
        </parallax-element>
      </parallax-container>
    </div>
  </div>
</template>

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
  overflow: hidden;
}

img {
  transform: translateX(-450px) translateY(-150px);
  height: 105vw;
}
</style>

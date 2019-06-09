<template>
  <div class="container w-100 h-100">
    <div
      class="d-flex flex-column align-items-center justify-content-center w-100 h-100"
    >
      <div class="text-primary d-flex flex-row mb-5 h2">
        Work in Progress
        <div class="animated fadeOut slow delay-25 infinite ml-1">.</div>
        <div class="animated fadeOut slow delay-50 infinite ml-1">.</div>
        <div class="animated fadeOut slow delay-75 infinite ml-1">.</div>
      </div>
      <p class="h4">This page is still under development.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: $primary-color;
}

.testBackground {
  width: 100%;
  height: 100%;
  filter: opacity(0.75);
}

.delay-50 {
  animation-delay: 250ms;
}

.delay-25 {
  animation-delay: 100ms;
}

.delay-75 {
  animation-delay: 400ms;
}

img {
  transform: translateX(-250px);
  height: 100%;
}
</style>

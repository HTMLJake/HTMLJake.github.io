<template>
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-center w-100 align-items-center my-4">
        <img
          src="@/assets/images/cartoon-jacob-04.jpg"
          alt="Wizard Narwahl"
          class="img rounded-circle"
        />
      </div>
    </div>
    <div class="row">
      <p class="text-center h1 font-weight-bold col-12 heading">Hey there!</p>
    </div>
    <div class="about-text">
      <p>
        Excuse the dust, I am in the process of updating my website to be even
        better then it was before but that takes times. I have a few things
        setup and working but not all of the information has been added and made
        beautiful. If you are stumbling on this I hope you have a chance to
        return when things are looking a little bit more polished.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}

p {
  padding: 15px;
}

.testBackground {
  width: 100%;
  height: 100%;
  //filter: opacity(0.75);
  overflow: hidden;
}

.about-text {
  max-width: 85%;
  text-align: center;
  margin: auto;
  margin-top: 20px;
}

.img {
  max-height: 150px;
}
</style>

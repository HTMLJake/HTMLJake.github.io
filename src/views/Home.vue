<template>
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-center w-100 align-items-center my-4">
        <img
          src="@/assets/images/cartoon-jacob-04.jpg"
          alt="Wizard Narwahl"
          class="img rounded-circle mt-3"
        />
      </div>
    </div>
    <div class="row">
      <p class="text-center font-weight-bold heading w-100">HEY THERE!</p>

      <div class="about-text">
        <p>
          You are probably looking at this site for one of a few reasons. Either you are trying to see if I am someone you think is worth hiring, or its my mom checking out my site to see how it looks. If it is my mom, Hi Mom, if not well I hope this site will help you figure out if I am someone you would want working for you, or at least maybe you will chuckle. Like when you watch those videos of a cat playing the piano, its just so adorable 😍. Wait, getting off topic... <em>Alright jacob we gotta look professional, pull it together!</em> Thank you for taking the time to check out my site. I appreciate the time you are here and please keep all hands, feet inside the vehicle at all times, oh and enjoy.

          ...But really though, you should go check out those cat videos. 10/10, would watch again. You know what, here is a gif of it, just for you.
        </p>
        <img
          src="https://media.giphy.com/media/10RhccNxPSaglW/giphy.gif"
          alt="cat playing piano gif"
          class="img-fluid"
        />
        <div class="spacer"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: auto;
}

.heading {
  font-size: 3em;
  margin-bottom: 0px;
}

.spacer {
  width: 100%;
  height: 45px;
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
  margin-top: 0px;
  white-space: pre-wrap;
}

.img {
  max-height: 150px;
}
</style>

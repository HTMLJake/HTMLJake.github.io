<template>
  <div class="container w-100 h-100 align-items-center">
    <p class="display-1 text-center my-5">Let's Talk!</p>
    <form action="https://formspree.io/perryjacob@outlook.com" method="POST" class="w-100 margin-auto ">
      <div class="row d-flex flex-row justify-content-center">
        <div class="form-group col-12 col-lg-4">
          <label for="nameInput">Name:</label>
          <input type="text" name="Name" id="nameInput" class="form-control" placeholder="John Doe">
        </div>
        <div class="form-group col-12 col-lg-4">
          <label for="emailInput">Email:</label>
          <input type="email" name="Email" id="emailInput" class="form-control" placeholder="john.doe@example.com">
        </div>
      </div>

      <div class="row d-flex flex-row justify-content-center">
        <div class="form-group col-12 col-lg-8">
          <label for="messageInput">Message:</label>
          <textarea
            type="text"
            placeholder="You're Hired!"
            name="Message"
            id="messageInput"
            rows="10"
            class="form-control">
          </textarea>
          <input type="submit" value="Send" class="btn btn-primary mt-3 w-25">
        </div>
      </div>
    </form>
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

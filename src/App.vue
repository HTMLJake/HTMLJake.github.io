<template>
  <div id="app">
    <div class="menu-button text-light" @click="showSidebar = !showSidebar">
      <a class="oi oi-menu"></a>
    </div>

    <div class="no-gutters">
      <div
        :class="[
          isHome ? 'col-lg-6' : 'col-lg-4',
          showSidebar ? 'showSidebar' : 'hideSidebar',
          isMobile() ? '' : (this.showSidebar = true)
        ]"
        class="static col-md-12"
      >
        <div class="centered">
          <img
            src="@/assets/Triangle-logo.svg"
            alt="Triangle logo"
            class="logo"
          />
          <h1 class="_name">Jacob Perry</h1>
          <h2 class="_title">Frontend Developer</h2>
          <br />
        </div>
        <div id="nav">
          <router-link to="/" class="nav-link" @click.native="hideSidebar()"
            >Home</router-link
          >
          <router-link
            to="/project"
            class="nav-link"
            @click.native="hideSidebar()"
            >Projects</router-link
          >
          <router-link
            to="/resume"
            class="nav-link"
            @click.native="hideSidebar()"
            >Resume</router-link
          >
          <router-link
            to="/contact"
            class="nav-link"
            @click.native="hideSidebar()"
            >Contact</router-link
          >
        </div>
      </div>
      <div
        class="content float-right"
        :class="[showSidebar ? (isHome ? 'col-lg-6' : 'col-lg-8') : 'col-12']"
      >
        <transition
          name="scale"
          mode="out-in"
          enter-active-class="animated slideInLeft faster"
          leave-active-class="animated slideOutLeft faster"
        >
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHome: true,
      showSidebar: true
    };
  },
  watch: {
    $route() {
      if (this.$route.path === "/") {
        this.$data.isHome = true;
      } else {
        this.$data.isHome = false;
      }
    }
  },
  methods: {
    isMobile() {
      return this.$mq === "mobile";
    },
    hideSidebar() {
      this.showSidebar = false;
    }
  }
};
</script>

<style lang="scss">
body,
html {
  margin: 0px;
  padding: 0px;
  font-family: $--main-font;
}

.menu-button {
  float: right;
  left: 0px;
  right: 0px;
  top: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 35px;
  background: $--color-dark;
  position: fixed;
  z-index: 50;
  font-size: 25px;
}

@media (min-width: 990px) {
  .menu-button {
    display: none;
  }
}

h1,
h2,
h3 {
  font-family: $--main-font;
}

.font-shrink {
  font-size: 0.01em;
  transition: 800ms;
  transition-delay: 300ms;
}

.delay-250ms {
  animation-delay: 400ms;
  transition-delay: 400ms;
}

.fastest {
  animation-duration: 0.25s !important;
}

.about {
  transition: 200ms;
}

.hideSidebar {
  transform: translateX(-105vw);
}

.content {
  transition: 0.4s ease;
  width: 70vw;
  float: right;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  margin: 0px;
  box-sizing: border-box;
}

.static {
  z-index: 5;
  transition: 0.65s ease-in-out;
  position: fixed !important;
  height: 100vh;
  width: 30vw;
  background: $--color-dark;
  box-sizing: border-box;
  margin: 0px;
  padding: 15px;
  color: $--color-light;
  h2 {
    font-family: $--main-font;
    color: $primary-color;
    margin: 0px;
    font-size: 100%;
    letter-spacing: 8px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 100;
  }
  h1 {
    font-weight: 900;
    text-transform: capitalize;
    font-size: 315%;
    margin: 0px;
    text-align: center;
  }
}

@media (max-width: 990px) {
  .static {
    top: 56px;
    height: calc(100vh - 55px);
  }

  .content {
    top: 56px;
    height: calc(100vh - 55px);
  }
}

.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 2vw;
  box-sizing: border-box;
}

.heading {
  color: $primary-color;
  font-weight: 100;
}

.logo {
  max-width: 25%;
  margin: 0px;
}

.nav-link {
  font-family: $--main-font;
}

#nav {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  a {
    color: $--color-light;
    text-decoration: none;
    font-weight: lighter;
    &.router-link-exact-active {
      font-weight: 900;
      color: lighten($--color-light, 50%);
    }
    &:hover {
      color: lighten($--color-light, 20%);
    }
  }
}
</style>

<template>
  <div id="app">
    <div class="menu-button text-light" @click="showSidebar = !showSidebar">
      <a class="oi oi-menu"></a>
    </div>

    <div class="no-gutters">
      <div
        :class="[
          isHome ? 'col-lg-6' : 'col-lg-4',
          showSidebar ? 'showSidebar' : 'hideSidebar'
        ]"
        class="static col-md-12"
      >
        <div class="centered">
          <img
            src="@/assets/Triangle-logo.svg"
            alt="Triangle logo"
            class="logo"
          />
          <h1>Jacob Perry</h1>
          <h2>Frontend Developer</h2>
          <br />
          <!-- <p
            class="about text-center animated"
            :class="[
              isHome ? 'fadeIn delay-250ms' : 'font-shrink fadeOut fastest'
            ]"
          >
            I reside in the beautiful northwest in Everett, WA, just north of
            Seattle. I have a passion for a lot of things because I love to
            learn new things and challenge myself to always be better. I want to
            be a modern Rennessance? nope … rennisounce? Not quite... *opens
            google…* so close… Renaissance man. What I lack in years of
            experience I make up for in creatively thinking about the box (or
            was it thinking outside the regular hexahedron *closes google*)
            Either way I like to make stuff, learn things, and speak vague. Some
            of the hats that I wear are Frontend Developer, Game Developer,
            Graphic Designer, Musician, and Photographer.
          </p> -->
        </div>
        <div id="nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/project" class="nav-link">Projects</router-link>
          <router-link to="/resume" class="nav-link">Resume</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
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
  beforeUpdate() {
    if (this.$route.path === "/") {
      this.$data.isHome = true;
    } else {
      this.$data.isHome = false;
    }
  },
  beforeMount() {
    if (this.$route.path === "/") {
      this.$data.isHome = true;
    } else {
      this.$data.isHome = false;
    }
  },
  watch: {
    $route() {
      if (window.innerWidth < 990) {
        this.showSidebar = false;
      }
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
  transform: translateX(-1000px);
}

.content {
  transition: 0.4s ease;
  width: 70vw;
  float: right;
  height: calc(100vh - 56px);
  top: 56px;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  margin: 0px;
  box-sizing: border-box;
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

.static {
  z-index: 5;
  transition: 0.65s ease-in-out;
  position: fixed !important;
  top: 56px;
  width: 30vw;
  background: $--color-dark;
  height: calc(100vh - 56px);
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

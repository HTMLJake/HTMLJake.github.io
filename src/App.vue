<template>
  <div id="app">
      <div class="static" v-bind:class="{staticHome: isHome}">
        <div id="nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/project" class="nav-link">Projects</router-link>
          <router-link to="/resume" class="nav-link">Resume</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
        <img src="@/assets/Triangle-logo.svg" alt="Triangle logo" class="logo">
        <h1>Jacob Perry</h1>
        <h2>Frontend Developer</h2>
        <br>
        <p v-if="isHome" class="about">
          I reside in the beautiful northwest in Everett, WA, just north of Seattle.
      I have a passion for a lot of things because I love to learn new things
      and challenge myself to always be better. I want to be a modern
      Rennessance? nope … rennisounce? Not quite... *opens google…* so close…
      Renaissance man. What I lack in years of experience I make up for in
      creatively thinking about the box (or was it thinking outside the regular
      hexahedron *closes google*) Either way I like to make stuff, learn things,
      and speak vague. Some of the hats that I wear are Frontend Developer, Game
      Developer, Graphic Designer, Musician, and Photographer.
        </p>
      </div>
    <div class="content" v-bind:class="{contentHome: isHome}">
      <transition 
        name="scale" 
        enter-active-class="animated fadeIn"
        exit-active-class="animated fadeOut"
      >
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHome: true
    }
  },
  beforeUpdate() {
    if(this.$route.path === "/") {
      this.$data.isHome = true;
    } else {
      this.$data.isHome = false;
    }
  },
  beforeMount() {
    if(this.$route.path === "/") {
      this.$data.isHome = true;
    } else {
      this.$data.isHome = false;
    }
  }
}
</script>


<style lang="scss">
body,
html {
  margin: 0px;
  padding: 0px;
}

h1,
h2,
h3 {
  font-family: $--main-font;
}

.content {
  transition: 0.4s ease;
  width: 70vw;
  float: right;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0px;
  box-sizing: border-box;
}

.static {
  transition: 0.4s ease;
  position: fixed;
  width: 30vw;
  background: #222222;
  height: 100vh;
  box-sizing: border-box;
  margin: 0px;
  padding: 15px;
  color: $--color-light;
  h2 {
    font-family: $--main-font;
    color: $--color-primary;
    margin: 0px;
    font-size: 100%;
    letter-spacing: 8px;
    text-transform: uppercase;
    font-weight: 100;
  }
  h1 {
    font-weight: 900;
    text-transform: capitalize;
    font-size: 350%;
    margin: 0px;
  }
}

.display2 {
  font-family: $--main-font;
  font-size: 6em;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin: 15px auto;
}

.heading {
  color: $--color-primary;
  font-weight: 100;
  font-size: 4em;
  margin: 15px 0px 50px 0px;
}

.about {
  padding: 15px;
}

.staticHome {
  transition: 0.4s;
  width: 45vw;
}

.contentHome {
  transition: 0.4s;
  width: 55vw;
  //background: $--color-primary;
}

.logo {
  max-width: 25%;
  margin: 0px;
}

.nav-link {
  margin-right: 15px;
  margin-left: 15px;
  font-family: $--main-font;
}

#app {
  font-family: $--main-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 15px 0px;
  a {
    transition: 0.5s;
    color: $--color-light;
    text-decoration: none;
    font-weight: lighter;
    width: 3em;
    &.router-link-exact-active {
      font-weight: 900;
      color: lighten($--color-light, 50%);
    }
    &:hover {
      color: lighten($--color-light, 20%);
    }
  }
}

.box {
  padding: 55px 50px;
  box-sizing: border-box;
}
</style>

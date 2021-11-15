<template>
  <div id="app">
    <Header> </Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHidden"> </Footer>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* latin */
@font-face {
  font-family: 'Droid Sans Mono';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/droidsansmono/v14/6NUO8FuJNQ2MbkrZ5-J8lKFrp7pRef2r.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>

<template>
  <div class="container">
    <b-navbar toggleable="lg" type="dark" variant="info" class="mx-auto">
      <b-navbar-brand class="mx-auto">
        <b-button variant="outline-primary" class="mx-5">
          <router-link to="/home">HOME</router-link>
        </b-button>
      </b-navbar-brand>
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/article">Article</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            aid: 1,
        }
    },
    methods: {

    }
    
}
</script>
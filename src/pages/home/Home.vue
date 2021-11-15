<template>
<div>
  <img src="./png/logo.png" alt="suosuoli.cn">
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data(){
    return {
      data1: "",
      articles: "",
      name: "Home"
    }
  },
  methods: {
    async getData() {
       let res = await axios({
        method: 'get',
        url: 'http://localhost:8000/api/v1/articles/1',
        headers: {'Access-Control-Allow-Origin': '*'},
     })
      this.data1 = res.data.data
   },
   async getArticles() {
       let res = await axios({
        method: 'get',
        url: 'http://localhost:8000/api/v1/articles',
        headers: {'Access-Control-Allow-Origin': '*'},
     })
      this.articles = res.data.data
      console.log("articles: ", this.articles)
   }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getData">GetArticle1</button>
    <br/>
    <button @click="getArticles">GetArticles</button>
    <br/>
    <h3>{{ this.data1.title }} </h3>
    <br/>
    <textarea cols=100 rows=5 v-model="this.data1.content"></textarea>

    <ol v-for="a in this.articles.lists" :key="a.id">
      <li>{{a.id}} --- {{a.title}} --- {{a.content}} </li>
    </ol>
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
h3 {
  margin: 40px 0 0;
  background-color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

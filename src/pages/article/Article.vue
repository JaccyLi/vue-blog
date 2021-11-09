<template>
<div>
    <h3>Article</h3>
    <input v-model="aid">
    &nbsp;&nbsp;
    <button @click="getArticle()">get article {{ this.aid }}</button>
    <div id="article">
        <h3>{{ this.articleContent.title }}</h3>
        <p>{{ this.articleContent.content }}</p>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Article",
    data() {
        return {
            aid: 1,
            articleContent: ""
        }
    },
    computed: {
  
    },
    methods: {
        async getArticle() {
            const res = await axios({
                method: 'get',
                url: `http://localhost:8000/api/v1/articles/${this.aid}`,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
            this.articleContent = res.data.data
        },
    }
}
</script>

<style scoped>
div {
  height: 50%;
  width: 50%;
  background-color: powderblue;
}
#article {
  height: 50%;
  width: 50%;
  background-color: rgb(0, 212, 46);
  padding-left: 30%;
}
</style>
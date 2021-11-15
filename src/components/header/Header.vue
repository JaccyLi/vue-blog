<template>
<div class="container">
	<header>
	<!-- <p>suosuoli.cn</p> -->
		<p>
			<a href="#">
				<router-link to="/home" class="button">Home</router-link>
			</a>
		</p>
		<p>
		<a href="#">
			<router-link to="/articles" class="button">Articles</router-link>
		</a>
		</p>
		<a href="#">
			<router-link to="/portfolio" class="button">Portfolio</router-link>
		</a>
		<a href="#">
			<router-link to="/contact" class="button">Contact</router-link>
		</a>
		<a href="#">
			<router-link to="/about" class="button">About</router-link>
		</a>
	</header>
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

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Lato:300';

* {
  font-family: 'Lato', sans-serif !important;
  box-sizing: border-box;
}

header {
  width: 100%;
  height: 75px;
  background: rgb(68, 68, 68);
}

a {
  text-decoration: none;
}

.button {
  width: 100px;
  height: 40px;
  border: 1px solid #FFF;
  border-radius: 3px;
  float: right;
  margin-top: 15px;
  margin-right: 20px;
  color: #FFF;
  line-height: 36px;
  text-align: center;
  font-size: 22px;
}

.button:hover {
  color: #40A4e8;
  border: 1px solid #4094e8;
}

p {
  font-size: 30px;
  float: left;
  line-height: 67px;
  color: #FFF;
  margin-left: 20px;
}
</style>
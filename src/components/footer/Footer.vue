<template>
<footer class="footer container">
	<div class="copyright">
		<p>@2021 - SUOSUOLI</p>
	</div>
	<div class="social">
		<a href="#" class=""><span><i class=""></i></span></a>
		<a href="#" class=""><span><i class=""></i></span></a>
		<a href="https://github.com/jaccyli" target="_blank" class="face"><span><i class="fa">gitee</i></span></a>
		<a href="https://gitee.com/jaccyli" target="_blank" class="face"><span><i class="fa fa-github">git</i></span></a>
	</div>
</footer>
</template>

<script>
export default {
	
}
</script>

<style scoped>
/* Colors */
* {
	margin: 0;
	padding: 0;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

footer {
	width: 100%;
	display: inline-block;
	margin: 2em 0;
	height: 100px;
	background-color: #212123;
}
footer .copyright {
	width: 50%;
	float: left;
}
@media (max-width: 600px) {
	footer .copyright {
		width: 100%;
	}
}
footer .copyright p {
	padding-left: 10%;
	color: white;
	font-size: 0.7em;
	line-height: 100px;
	text-transform: capitalize;
	letter-spacing: 1px;
}
@media (max-width: 600px) {
	footer .copyright p {
		text-align: center;
		padding: 0;
	}
}
footer .social {
	width: 50%;
	float: right;
}
@media (max-width: 600px) {
	footer .social {
		width: 100%;
	}
}
footer .social a {
	float: right;
	line-height: 50px;
	text-decoration: none;
	color: white;
	text-align: center;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	margin-right: 10px;
	margin-top: 25px;
	font-weight: bold;
	-moz-transition: all, 0.3s;
	-o-transition: all, 0.3s;
	-webkit-transition: all, 0.3s;
	transition: all, 0.3s;
}
footer .social a:hover {
	background-color: #222;
	-moz-transition: all, 0.3s;
	-o-transition: all, 0.3s;
	-webkit-transition: all, 0.3s;
	transition: all, 0.3s;
}

.linked {
	background-color: #3095A7;
	font-size: 1.2em;
	width: 20%;
}

.face {
	background-color: #3095A7;
	font-size: 1.2em;
	width: 20%;
}

</style>
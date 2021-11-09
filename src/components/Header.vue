<template>
    <div>
        <button> <router-link to="/home">home</router-link></button>
        &nbsp;&nbsp;
        <button> <router-link to="/article">article</router-link></button>
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
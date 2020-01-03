<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from '@/components/header/header.vue'
    export default {
        name: "home.vue",
        components:{
            Header,
        }
    }
</script>

<style scoped>

</style>

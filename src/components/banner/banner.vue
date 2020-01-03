<template>
    <div class="banner">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style lang="less" scoped>
    .banner {
        width: 100%;
        height: 400px;
        background: red;
        position: relative;
        z-index: 99;
    }
</style>

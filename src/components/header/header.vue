<template>
    <div class="header">
        <div class="title-style">

        </div>
        <div class="title-container">
            <div class="header-wrapper">
                <ul>
                    <li v-for="item in list" :key="item.headerId">
                        <router-link :to="item.path" active-class="active" class="header-router">{{item.text}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="logo-style">

        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                list: [
                    { headerId: "head1", text: "网站首页", path: "/home" },
                    { headerId: "head2", text: "体验培训", path: "/technology" },
                    { headerId: "head3", text: "特色团建", path: "/waterfall-easy" },
                    { headerId: "head4", text: "创意体验", path: "/personal-archive" },
                    { headerId: "head5", text: "我们的故事", path: "/mood-essay" },
                    { headerId: "head6", text: "我们的足迹", path: "/essay" }
                ],
                isShow: localStorage.getItem('token')
            };
        },
        components: {

        },
        methods: {
            // 点击去登陆
            handleLogin() {
                this.$router.push({
                    path: '/login',
                    query: {
                        require: this.$route.fullPath
                    }
                })
            },
            // 点击去注册
            handleRegister() {
                this.$router.push({
                    path: '/register',
                    query: {
                        require: this.$route.fullPath
                    }
                })
            }
        }
    };
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 70px;
        background-color: #01A1E5;
        border-bottom: 1px solid #FFFfff;
        position: sticky;
        top: 0;
        z-index: 9999;
        display: flex;
        justify-content: space-around;
        .title-style{
            height: 70px;
            width: 100px;
        }
        .title-container{
            width: 1000px;
            .header-wrapper {
                display: flex;
                justify-content: space-between;
                ul {
                    display: flex;
                    li {
                        .header-router {
                            color: #fff;
                            font: 20px Verdana, Geneva, sans-serif, "宋体";
                            display: block;
                            padding: 15px 20px;
                            margin: 10px;
                            transition: all 1s ease;
                            border-bottom: 4px #FFFfff solid;
                        }
                        .header-router:hover {
                            color: #000;
                            background-color: #fff;
                            box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.7);
                            border-radius: 6px;
                            border-bottom: 4px #fff solid;
                            transition: all 1s ease;
                        }
                        .active {
                            color: #000;
                            background-color: #fff;
                            box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.7);
                            border-radius: 6px;
                            border-bottom: 4px #fff solid;
                        }
                    }
                }
                .header-bottom {
                    .header-no-loginInfo {
                        line-height: 70px;
                        display: flex;
                        align-items: center;
                        span {
                            font-size: 16px;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: rgba(255, 255, 255, 1);
                            cursor: pointer;
                        }
                        span:nth-child(2) {
                            display: block;
                            width: 2px;
                            height: 17px;
                            background: #e6e6e6;
                            margin: 0 10px;
                        }
                    }
                }
            }
        }
    }
</style>

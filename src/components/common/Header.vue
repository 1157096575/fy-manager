<template>
    <!--header start-->
    <div class="header white-bg">
        <div class="sidebar-toggle-box">
            <div data-original-title="切换导航" data-placement="right" class="icon-reorder tooltips"></div>
        </div>
        <!--logo start-->
        <a href="#" class="logo">法<span>义</span></a>
        <!--logo end-->

        <div class="top-nav ">
            <!--search & user info start-->
            <ul class="nav pull-right top-menu">
                <li>
                    <input type="text" class="form-control search" placeholder="Search">
                </li>
                <!-- user login dropdown start-->
                <li class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <img alt="" :src="imgList[0]" style="width: 35px;height: 35px">
                        <span class="username">{{user.username}}</span>
                        <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu extended logout">
                        <div class="log-arrow-up"></div>
                        <li><router-link :to="{name: 'system_setting'}"><i class="icon-cog"></i>设置</router-link></li>
                        <li @click="logOut"><a href="javascript:;"><i class="icon-key"></i>退出</a></li>
                    </ul>
                </li>
                <!-- user login dropdown end -->
            </ul>
            <!--search & user info end-->
        </div>
    </div>
    <!--header end-->
</template>
<script>

    export default {
        name: 'myheader',
        data() {
            return {
                imgList: [
                    require ('static/img/f778738c-e4f8-4870-b634-56703b4acafe.gif')
                ],
                user: {
                    username: ''
                }
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.init();
            });
        },
        methods: {
            logOut() {

            },
            init() {

            }
        }
    }
</script>

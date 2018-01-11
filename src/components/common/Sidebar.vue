<template>
    <!--sidebar start-->
    <div id="sidebar" class="nav-collapse">
        <ul class="sidebar-menu">
            <li class="on-sub">
                <router-link :to="{name: 'home'}">
                    <span>home</span>
                </router-link>
            </li>
            <li class="sub-menu on-sub">
                <a href="javascript:;" class="" >
                    <i class="icon-th"></i>
                    <span>服务聚合管理</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub">
                    <li>
                        <router-link :to="{name: 'service_weChat'}">
                           推荐服务-weChat
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'service_app'}">
                           推荐服务-app
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="sub-menu on-sub">
                <a href="javascript:;" class="" >
                    <i class="glyphicon glyphicon-user"></i>
                    <span>第三方管理</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub">
                    <li>
                        <router-link :to="{name: 'user_list'}">
                           用户列表
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
        <!-- sidebar menu end-->
    </div>
    <!--sidebar end-->
</template>
<script>
    export default {
        name: 'sidebar',
        data: function () {
            return {
                menu:{}
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.init();
            })
        },
        methods: {
            init: function () {
                let _this = this;
                setTimeout(function(){
                    require('scrollTo');
                    require('nicescroll');
                    require('common_scripts');
                    if($('#sidebar .on-sub').length > 0){
                        let $o = $('#sidebar .on-sub .sub >li').eq(0);
                        $o.click();
                        let a = $o.find('a');
                        let path = a.attr('href');
                       if(path){
                           //let arr = path.split('#');
                           //let _p = (arr[arr.length-1]).replace('/////home/','');
                           //_this.$router.push({path:_p});
                       }
                    }
                },0);
            }
        }
    }
</script>

<template>
    <!--sidebar start-->
    <div id="sidebar" class="nav-collapse">
        <ul class="sidebar-menu">

            <li v-for="(item, index) in menu" :class="[{'on-sub': index == 0? true:false},{'active': index == 0? true:false},{'sub-menu': item.children.length>0?true:false}]">
                <router-link :to="{name: item.url}" v-if="item.children.length>0?false:true">
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                </router-link>

                <a href="javascript:;" class="" v-if="item.children.length>0?true:false">
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub" v-if="item.children.length>0?true:false">
                    <li v-for="(children, index) in item.children">
                        <router-link :to="{name: children.url}">{{children.name}}</router-link>
                    </li>
                </ul>
            </li>

           <!-- <li class="on-sub">
                <router-link :to="{name: 'finance_withdraw_list'}">
                    <i class="icon-dollar"></i>
                    <span>财务管理</span>
                </router-link>
            </li>
            <li class="on-sub">
                <router-link :to="{name: 'finance_bank_manager_list'}">
                    <i class="icon-dollar"></i>
                    <span>银行卡管理</span>
                </router-link>
            </li>-->

           <!-- <li class="on-sub">
                <router-link :to="{name: 'finance_order_list'}">
                    <i class="icon-dollar"></i>
                    <span>退款订单</span>
                </router-link>
            </li>-->
           <!-- <li class="on-sub">
                <router-link :to="{name: 'statistics_path_analyse_charts'}">
                    <i class="icon-dollar"></i>
                    <span>用户路径分析</span>
                </router-link>
            </li>-->
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
                
            }
        }
    }
</script>

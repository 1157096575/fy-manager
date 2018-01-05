<template>
    <div id="container" class="container-fluid">
        <myHeader></myHeader>
        <sidebar></sidebar>
        <router-view></router-view>
        <globalDialog></globalDialog>
    </div>
</template>

<script>
    //组件
    import myHeader from 'components/common/Header';
    import Sidebar from 'components/common/Sidebar';
    import globalDialog from 'components/common/globalDialog';

    export default {
        name: 'app',
        components: {
            myHeader,
            Sidebar,
            globalDialog
        },
        data() {
            return {}
        },
        mounted() {
            this.$nextTick(function () {

            })
        },
        methods: {}
    };
</script>

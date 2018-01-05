<template>
    <div class="container">
        <div class="form-signin">
            <form @submit.prevent="submit()">
                <h2 class="form-signin-heading">法义</h2>

                <div class="login-wrap">
                    <div class="input-container">
                        <span><i class="icon-user"></i></span>
                        <input type="text" class="form-control" placeholder="User ID" required autofocus v-model.trim="form.username">
                    </div>
                    <div class="input-container">
                        <span><i class="icon-lock"></i></span>
                        <input type="password" class="form-control" placeholder="Password" required v-model.trim="form.password">
                    </div>
                    <div class="input-container">
                        <span><i class="icon-bolt"></i></span>
                        <input type="text" class="form-control code" placeholder="验证码" required v-model.trim="form.code">
                        <img :src="codeImg" @click="getImg">
                    </div>
                    <div class="form-group has-error">
                        <label class="control-label" v-show="error!=''">{{error}}</label>
                    </div>
                    <button class="btn btn-lg btn-login btn-block" type="submit">登录</button>
                </div>
            </form>
        </div>
        <globalDialog></globalDialog>
    </div>
</template>

<script>
    import globalDialog from 'components/common/globalDialog';
    import md5 from 'js-md5';

    export default {
        components: {
            globalDialog: globalDialog
        },
        name: 'login',
        data: function () {
            return {
                form: {
                    password: '',
                    username: '',
                    code:''
                },
                error: '',
                codeImg: ''
            }
        },
        watch: {
            form: {
                handler: function () {
                    this.error = '';
                },
                deep: true
            }
        },
        mounted: function () {
            this.$nextTick(function () {

            })
        },
        methods: {
            getImg:function(){
                
            },
            submit:function () {
                if (!this.form.username) {
                    this.error = '请输入用户名！';
                    return;
                }
                if (!this.form.password) {
                    this.error = '请输入密码！';
                    return;
                }
                if (!this.form.code) {
                    this.error = '请输入验证码！';
                    return;
                }
                $("body").mLoading({
                    text: "登录中。。。"
                });
                let param = {
                    password: md5(this.form.password),
                    username: this.form.username,
                    code:this.form.code
                };
                let _this = this;

            }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .input-container{
        position: relative;
        span{
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 10;
        }
        input{
            padding-left: 25px !important;
        }
        input.code{
            width: 150px;
        }
        img{
            position: absolute;
            top: 0px;
            right: 0px;
            width: 120px;
            height: 40px;
            cursor: pointer;
            border-radius:5px;
        }
    }
</style>
<template>
<div>
    <Button type="text" @click="modal1=true" ghost>注册|登录</Button>
    <Modal v-model="modal1">
    <p slot="header" style="color:#2d8cf0;text-align:center">
        <Icon type="ios-contact" />
        <span>用户登录</span>
    </p>
    <div>
        <Tabs @on-click="chooseMode">
            <TabPane label="登录" name="user-login">
                <h3>手机号码:</h3> 
                <Input v-model="userPhone" placeholder="请输入您的手机号码"/>
                <p v-if="this.userPhoneInvalid" style="color:#FF0000">这不是一个有效的手机号码</p>
                <br>
                <br>
                <h3>密码:</h3>
                <Input v-model="userPassword" type="password" placeholder="请输入密码"/>
                <p v-if="this.userPasswordInvalid" style="color:#FF0000">密码错误</p>
            </TabPane>
            <TabPane label="注册" name="user-register">
                <h3>手机号码:</h3> 
                <Input v-model="userPhone" placeholder="请输入您的手机号码"/>
                <p v-if="this.userPhoneInvalid" style="color:#FF0000">这不是一个有效的手机号码</p>
                <br>
                <br>
                <h3>密码:</h3>
                <Input type="password" v-model="userPassword" placeholder="请输入密码"/>
                <p v-if="this.userPasswordInvalid" style="color:#FF0000">密码错误</p>
                <br>
                <br>
                <h3>确认密码:</h3>
                <Input type="password" v-model="userPasswordConfirmed" placeholder="请再次输入密码"/>
                <p v-if="this.userPasswordConfirmedInvalid" style="color:#FF0000">确认密码错误</p>
                <br>
                <br>
                注册前请阅读<a href="/">《服务条款》</a>
            </TabPane>
        </Tabs>
    </div>
    <div slot="footer">
        <Button type="primary" size="large" @click="ok" long>{{buttonText}}</Button>
    </div>
</Modal>
</div>
</template>
<script>
    export default {
        data() {
            return {
                modal1: false,

                userPhone:"",
                userPhoneInvalid:false,

                userPassword:"",
                userPasswordInvalid:false,

                userPasswordConfirmed: "",
                userPasswordConfirmedInvalid: false,

                userRegister: false,
                buttonText: "登录"
            }
        },
        methods: {
            chooseMode(name) {
                if(name == "user-register") {
                    this.userRegister=true;
                    this.buttonText = "同意协议并注册";
                } else {
                    this.userRegister=false;
                    this.buttonText = "登录";
                }
            },
            ok() {
                if(this.judgeInputInvalid()) {
                    this.$Message.info('Click ok1');
                } else {
                    if(this.userRegister) {
                        this.$Message.info('注册成功');
                    } else {
                        this.$Message.info('登录成功');
                    }
                    
                    this.modal1 = false;
                }
                
            },
            cancel() {
                this.$Message.info('Click cancel');
            },
            judgePhoneInvalid() {
                return !(/^1[3|5|8][0-9]\d{8}$/.test(this.userPhone));
            },
            judgePasswordInvalid() {
                return false;
            },
            judgePasswordConfirmedInvalid() {
                return this.userPassword != this.userPasswordConfirmed;
            },
            judgeInputInvalid() {
                this.userPhoneInvalid = this.judgePhoneInvalid();
                this.userPasswordInalid = this.judgePasswordInvalid();
                if(this.userRegister) {
                    this.userPasswordConfirmedInvalid = this.judgePasswordConfirmedInvalid();
                    //判断是否已有用户
                    return this.userPhoneInvalid || this.userPasswordInvalid || this.userPasswordConfirmedInvalid;
                } else {
                    //判断密码是否正确
                    return this.userPhoneInvalid || this.userPasswordInvalid;
                }
                
            }
        }
    }
</script>

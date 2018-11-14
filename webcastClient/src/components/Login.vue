<template>
<div>
  <Button class="loginButton" v-show="!hasLogin" type="text" @click="modal1=true" ghost>注册 | 登录</Button>
  <Dropdown v-show="hasLogin">
    <Avatar>U</Avatar>
    <DropdownMenu slot="list">
      <DropdownItem>
        <router-link to="/PersonalInformation" class="header-bar-tag">修改个人信息</router-link>
      </DropdownItem>
      <DropdownItem>
        <Button type="error" @click="logout">退出登录</Button>
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  <Modal v-model="modal1">
    <p class="loginTitle" slot="header">
      <Icon type="ios-contact" />
      <span class="title">用户登录</span>
    </p>
    <div>
      <Tabs @on-click="chooseMode">
        <TabPane label="登录" name="user-login">
          <h3 class="item">手机号码:</h3>
          <Input class="input" v-model="userPhone" placeholder="请输入您的手机号码" />
          <p v-if="this.userPhoneInvalid" style="color:#FF0000">这不是一个有效的手机号码</p>
          <h3 class="item">密码:</h3>
          <Input class="input" v-model="userPassword" type="password" placeholder="请输入密码" />
          <p v-if="this.userPasswordInvalid" style="color:#FF0000">密码错误</p>
        </TabPane>
        <TabPane label="注册" name="user-register">
          <h3 class="item">手机号码:</h3>
          <Input class="input" v-model="userPhone" placeholder="请输入您的手机号码" />
          <p v-if="this.userPhoneInvalid" style="color:#FF0000">这不是一个有效的手机号码</p>
          <h3 class="item">密码:</h3>
          <Input class="input" type="password" v-model="userPassword" placeholder="请输入密码" />
          <p v-if="this.userPasswordInvalid" style="color:#FF0000">密码错误</p>
          <h3 class="item">确认密码:</h3>
          <Input class="input" type="password" v-model="userPasswordConfirmed" placeholder="请再次输入密码" />
          <p v-if="this.userPasswordConfirmedInvalid" style="color:#FF0000">确认密码错误</p>
          <h3 class="item">用户名:</h3>
          <Input class="input" v-model="userName" placeholder="请输入用户名" />
          <h3 class="item">用户类型:</h3>
          <RadioGroup class="radioGroup" v-model=userIdentity>
            <Radio label="student">
              <span>学生</span>
            </Radio>
            <Radio label="teacher">
              <span>教师</span>
            </Radio>
          </RadioGroup>
          <h4 class="item">注册前请阅读<a href="/">《服务条款》</a></h4>
        </TabPane>
      </Tabs>
    </div>
    <div slot="footer">
      <Button type="primary" size="large" v-on:click="ok" long>{{buttonText}}</Button>
    </div>
  </Modal>
</div>
</template>
<script>
export default {
  data() {
    return {
      modal1: false,
      userPhone: "",
      userPhoneInvalid: false,
      userPassword: "",
      userPasswordInvalid: false,
      userPasswordConfirmed: "",
      userPasswordConfirmedInvalid: false,
      userName: "",
      userIdentity: "student",
      userRegister: false,
      buttonText: "登录",
      userStatus: -1,
      hasLogin: false
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(this.$cookie.get("userStatus"));
      if (this.$cookie.get("userStatus") == "online") {
        this.hasLogin = true;
      } else {
        this.hasLogin = false;
      }
    },

    chooseMode(name) {
      if (name == "user-register") {
        this.userRegister = true;
        this.buttonText = "同意协议并注册";
      } else {
        this.userRegister = false;
        this.buttonText = "登录";
      }
    },
    logout() {
      //this.sendLogoutRequest();
      this.hasLogin = false;
    },
    ok() {
      if (this.judgeInputInvalid()) {
        this.$Message.info("一些输入不符合要求哦~");
      } else {
        if (this.userRegister) {
          this.sendRegisterRequest();
        } else {
          this.sendLoginRequest();
        }
      }
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
      if (this.userRegister) {
        this.userPasswordConfirmedInvalid = this.judgePasswordConfirmedInvalid();
        return this.userPhoneInvalid || this.userPasswordInvalid || this.userPasswordConfirmedInvalid;
      } else {
        return this.userPhoneInvalid || this.userPasswordInvalid;
      }
    },
    sendRegisterRequest() {
      this.$ajax.post('/api/users/register', {
          name: this.userName,
          phone: this.userPhone,
          identity: this.userIdentity,
          password: this.userPassword
        })
        .then(response => {
          console.log("This is the response:");
          console.log(response);
          // 返回的状态码为response.data.scode
          this.handleRegisterStatus(response.data.scode);
        })
        .catch(error => {
          console.log("This is the error:");
          console.log(error);
        });
    },
    sendLoginRequest() {
      this.$ajax.post('/api/users/login', {
          phone: this.userPhone,
          password: this.userPassword,
        }, {
          withCredentials: true
        })
        .then(response => {
          console.log("This is the response:");
          console.log(response);
          this.handleLoginStatus(response.data.scode);
          this.sendUserInfoRequest();
        })
        .catch(error => {
          console.log("This is the error:");
          console.log(error);
        });
    },
    sendUserInfoRequest() {
      this.$ajax.get('api/users/current')
        .then(response => {
          console.log("this is the user info:");
          this.handleUserInfo(response);
        });
    },
    sendLogoutRequest() {
      this.$ajax.get('api/users/logout')
        .then(response => {
          console.log("this is the user info:");
          console.log(response);
          this.$cookie.delete("userName");
          this.$cookie.delete("userIdentity");
          this.$cookie.set("userStatus", "offline", 1);
        });
    },
    handleRegisterStatus(userStatus) {
      switch (userStatus) {
        case 200:
          //注册成功
          this.$Message.info("注册成功");
          //设置Cookie

          //自动完成登录

          //关闭窗口
          this.modal1 = false;
          break;
        case 400:
          //手机号已经注册过了
          this.$Message.info("该手机已经注册过了");
          break;
        default:
          this.$Message.info("奇奇怪怪的错误");
          break;
      }
    },
    handleLoginStatus(userStatus) {
      switch (userStatus) {
        case 200:
          //登录成功
          this.$Message.info("登录成功");
          //开启socket
          this.$socketReconnect("")
          //关闭窗口
          this.modal1 = false;
          break;
        case 400:
          //登录失败，密码错误
          this.$Message.info("密码错误");
          break;
        case 404:
          //用户不存在
          this.$Message.info("该账号尚未注册");
          break;
        default:
          this.$Message.info("奇奇怪怪的错误");
          break;
      }
    },
    handleUserInfo(response) {
      this.$cookie.set("userName", response.data.data.name, 1);
      this.$cookie.set("userIdentity", response.data.data.identity, 1);
      this.$cookie.set("userStatus", "online", 1);
      this.hasLogin = true;
    }
  }
}
</script>
<style scoped>
.title{
  font-size: 14px;
}

.item {
  padding-top: 10px;
}

.input {
  padding-top: 5px;
}

.radioGroup {
  padding-top: 5px;
}

.loginButton {
  border: none;
  border-radius: 10px;
  font-size: 14px;
  background-color: #41B146;
  color: #FFFFFF;
}

.loginTitle {
  color: #41B146;
  text-align: center;
}
</style>

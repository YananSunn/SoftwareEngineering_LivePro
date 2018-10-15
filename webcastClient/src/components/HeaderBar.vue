
<style scoped>
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 0px;
}
.layout-nav{
    float: right;
    margin: 0 auto;
    margin-left: 20px;
}
.header-bar-a{
    margin-right: 20px;
    color: #FFF;
}
.header-bar-tag{
    float: left;
    margin-right: 10px;
    margin-left: 10px;
    color: #FFF;
}
.header-bar-login{
    float: right;
    margin-right: 20px;
    color: #FFF;
}

</style>

<template>
    <div>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <a class="header-bar-tag" href="/">PageA</a>
            <a class="header-bar-tag" href="/">PageB</a>
            <!-- <a class="header-bar-tag" href="/">PageC</a> -->
            <router-link to="/StudentPlayer">Player</router-link>
            <router-link to="/PersonalInformation">Account Info</router-link>
            <div class="layout-nav">
                <!--<a class="header-bar-a" href="/">Page1</a>
                <a class="header-bar-a" href="/">Page2</a>-->
                <Login></Login>
            </div>
        </Menu>
    </div>
</template>
<script>

    import Login from '@/components/Login.vue'
    export default {
        data() {
            return {
            }
        },
        methods: {

        },
        components: {
            Login
        }
    }
</script>

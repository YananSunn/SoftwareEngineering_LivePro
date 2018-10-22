<template>
<div class="layout">
  <Layout>
    <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
      <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
        <MenuItem name="1-1">
        <Icon type="ios-navigate"></Icon>
        <span v-on:click="showSelfInfo = true">个人资料</span>
        </MenuItem>
        <MenuItem name="1-2">
        <Icon type="ios-search"></Icon>
        <span v-on:click="showSelfInfo = false">账号安全</span>
        </MenuItem>
      </Menu>
      <div slot="trigger"></div>
    </Sider>
    <Layout>
      <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
        <!-- <template></template> -->
        <SelfInfo v-if="showSelfInfo"></SelfInfo>
        <AccountSecurity v-if="!showSelfInfo"></AccountSecurity>
      </Content>
    </Layout>
  </Layout>
</div>
</template>
<script>
import SelfInfo from '@/components/InfoPage/SelfInfo.vue'
import AccountSecurity from '@/components/InfoPage/AccountSecurity.vue'

export default {
  data() {
    return {
      isCollapsed: false,
      showSelfInfo: true
    };
  },
  methods:{
    // change_page: (num) => {
    //   console.log("change_page")
    //   this.changePage = num
    //   console.log(this.changePage)
    // }
  },
  computed: {
    menuitemClasses: function() {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  components:{
    SelfInfo,
    AccountSecurity
  }
}
</script>
<style scoped>
.layout {
  /* border: 1px solid #d7dde4;
  background: #f5f7f9; */
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}

.menu-item i {
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}

.collapsed-menu span {
  width: 0px;
  transition: width .2s ease;
}

.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>

<template>
<div class="layout">
  <div>
    <HeaderBar class="headerBar"></HeaderBar>
  </div>
  <div class="header">
    <div class="titleLeft">
      <img class="headerImg" src="../../assets/flag.jpg" alt="">
      <div class="headerInfo">
        <p>直播间列表</p>
      </div>
    </div>
    <div class="titleRight">
      <div class="headerInput">
        <input class="searchInput" type="text" placeholder=" 输入直播间标题或关键字……" v-model="tmpText">
      </div>
      <div class="headerButton">
        <Button class="searchButton" v-on:click="setSearchMessage()">查找</Button>
      </div>
    </div>
  </div>
  <div class="list">
    <ul>
      <li v-for="mclass in fusionArray">
        <div class="classBox">
          <a class="classATag" :href="'#/StudentPlayer/'+mclass.id">
            <img class="image" :src=mclass.picurl alt="">
            <h2 class="title">{{mclass.discription}}</h2>
            <p class="teacher">教师：{{mclass.teacher}}</p>
            <p class="hitsNum">点击量：{{mclass.hitsNum}}</p>
            <p class="setupTime">创建时间：{{mclass.setup_time_y}}.{{mclass.setup_time_m}}.{{mclass.setup_time_d}}</p>
            <HR class="divider"></HR>
            <p class="sort">分类：{{mclass.sort}}</p>
          </a>
        </div>
      </li>
    </ul>
    <img src='classList[0].picurl' alt="" />
  </div>
</div>
</template>
<script>
import HeaderBar from '../HeaderBar.vue'
export default {
  data() {
    return {
      tmpText: '',
      searchText: '',
      fusionArray: [],
      classList: []
    };
  },
  watch: {
    tmpText: function() {
      if (this.tmpText == '') {
        this.searchText = '';
        this.fusion();
      }
    }
  },
  created() {
    this.$ajax.get('/api/ClassList/classlist')
      .then((res) => {
        var tmpList = res.data.data;
        for (var i = 0; i < tmpList.length; i++) {
          this.classList.push({
            picurl: tmpList[i].picurl,
            discription: tmpList[i].title,
            sort: tmpList[i].sort,
            teacher: tmpList[i].teacher,
            hitsNum: tmpList[i].hitsNum,
            setup_time_y: tmpList[i].setup_time_y,
            setup_time_m: tmpList[i].setup_time_m,
            setup_time_d: tmpList[i].setup_time_d,
            uid: 'xxxx',
            vid: '893802',
            id: tmpList[i].id
          })
        }
        this.fusion();
      })
      .catch(function(error) {
        // console.log(error);
      });
  },
  mounted() {

  },
  methods: {
    updatePage: function() {
      if (this.tmpText == '') {
        this.searchText = this.tmpText;
      }
    },
    setSearchMessage: function() {
      this.searchText = this.tmpText;
      this.fusion();
    },
    fusion: function() {
      this.fusionArray = [];
      this.fusionArray = this.fusionArray.concat(this.filterClassesDis);
      this.fusionArray = this.fusionArray.concat(this.filterClassesTea);
      this.fusionArray = this.fusionArray.concat(this.filterClassesSort);
      // this.removeDupli();
      this.fusionArray = this.uniq(this.fusionArray);
    },
    uniq: function(array) {
      var temp = []; //一个新的临时数组
      for (var i = 0; i < array.length; i++) {
        if (temp.indexOf(array[i]) == -1) {
          temp.push(array[i]);
        }
      }
      return temp;
    },
    removeDupli: function() {
      var hash = {};
      this.fusionArray = this.fusionArray.reduce(function(item, next) {
        hash[next.description] ? '' : hash[next.description] = true && item.push(next);
        return item
      }, [])
    }
  },
  computed: {
    filterClassesDis() {
      const {
        searchText,
        classList,
        orderType
      } = this
      let filterArr = new Array();
      filterArr = classList.filter(p => p.discription.indexOf(searchText) !== -1)
      return filterArr;
    },
    filterClassesTea() {
      const {
        searchText,
        classList,
        orderType
      } = this
      let filterArr = new Array();
      filterArr = classList.filter(p => p.teacher.indexOf(searchText) !== -1)
      return filterArr;
    },
    filterClassesSort() {
      const {
        searchText,
        classList,
        orderType
      } = this
      let filterArr = new Array();
      filterArr = classList.filter(p => p.sort.indexOf(searchText) !== -1)
      return filterArr;
    }
  },
  components: {
    HeaderBar
  }
}
</script>
<style scoped>
.headerBar {
  text-align: left;
  width: 1280px;
}

.layout {
  background-color: #f5f7f9;
  width: auto;
  height: auto;
}

.header {
  text-align: left;
  padding-top: 30px;
}

.titleLeft {
  display: inline-block;
  padding-left: 80px;
  line-height: 50px;
}

.headerImg {
  display: inline;
  height: 50px;
  width: 50px;
}

.headerInfo {
  display: inline-block;
  height: 50px;
  font-size: 24px;
  color: #333333;
  font-weight: 650;
  vertical-align: top;
}

.titleRight {
  display: inline-block;
  vertical-align: top;
  width: 950px;
  padding-left: 450px;
  line-height: 50px;
}

.headerInput {
  display: inline;
  width: 400px;
}

.searchInput {
  display: inline;
  height: 35px;
  width: 400px;
  border: 0px;
  box-shadow: 0px 0px 10px 5px #e0e2e4;
  color: #333333;
  font-size: 16px;
}

.headerButton {
  display: inline;
  padding-left: 20px;
  width: 90px;
}

.searchButton {
  background-color: #41B146;
  color: #FFFFFF;
  font-size: 16px;
  text-align: center;
  border-radius: 10px;
  width: 70px;
  height: 40px;
}

.list {
  width: 1280px;
  padding-left: 40px;
  box-sizing: border-box;
}

.classBox {
  display: inline-flex;
  box-shadow: 0 0 10px 5px #e0e2e4;
  border-radius: 10px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;
  width: 360px;
  height: 400px;
  /* background-color: #FFFFFF; */
  background:url(../../assets/background.jpg) no-repeat 0px 0px;
}

.classATag {
  width: 300px;
  height: 300px;
}

.image {
  width: 240px;
  height: 160px;
}

.title {
  color: #333333;
  text-align: middle;
  font-size: 18px;
  padding-top: 20px;
}

.sort {
  color: #99A6C4;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  padding-top: 5px;
  padding-left: 20px;
}

.teacher {
  color: #99A6C4;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  padding-top: 5px;
  padding-left: 20px;
}

.hitsNum {
  color: #99A6C4;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  padding-top: 5px;
  padding-left: 20px;
}

.setupTime {
  color: #99A6C4;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
}

.divider{
  FILTER: alpha(opacity=100,finishopacity=0,style=3);
  width:80%;
  color:#99A6C4 ;
  SIZE:3;
  text-align: middle;
  padding-left: 20px;
  margin-left: 20px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-basis: 400px;
  text-align: center;
  padding: 20px;
}
</style>

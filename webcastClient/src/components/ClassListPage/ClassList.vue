<template>
<div>
  <div>
    <HeaderBarClassList></HeaderBarClassList>
  </div>
  <div class="List">
    <input type="text" v-model="tmpText">
    <Button v-on:click="setSearchMessage()">查找</Button>
    <ul>
      <li v-for="mclass in fusionArray">
        <a :href="'#/StudentPlayer/'+mclass.id">
          <img class="image" :src=mclass.picurl alt="">
          <h2>{{mclass.discription}}</h2>
          <h3>分类：{{mclass.sort}}</h3>
          <h3>教师：{{mclass.teacher}}</h3>
          <h3>点击量：{{mclass.hitsNum}}</h3>
          <h3>创建时间：{{mclass.setup_time_y}}.{{mclass.setup_time_m}}.{{mclass.setup_time_d}}</h3>
        </a>
      </li>
    </ul>
    <img src='classList[0].picurl' alt="" />
  </div>
</div>
</template>
<script>
import HeaderBarClassList from './HeaderBarClassList.vue'
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
            id:tmpList[i].id
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
    HeaderBarClassList
  }
}
</script>
<style scoped>
.List {
  width: 100%;
  margin-top: 100px;
  max-width: 1200px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 40px;
  padding: 0 20px;
  box-sizing: border-box;
}

.image {
  width: 150px;
  height: 100px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>

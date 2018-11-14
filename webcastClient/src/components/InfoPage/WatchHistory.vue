<template>
<div>
  <div>
    <Button v-on:click="sortWatchTime()">最近有直播到最远有直播</Button>
    <Button v-on:click="sortSetupTime()">最近创建到最远创建</Button>
  </div>
  <div class="List">
    <ul>
      <li v-for="mclass in classList" class="PlayList">
        <a href="#/StudentPlayer">
          <img class="image" :src=mclass.picurl alt="">
          <h2>{{mclass.discription}}</h2>
          <h3>分类：{{mclass.sort}}</h3>
          <h3>教师：{{mclass.teacher}}</h3>
          <h3>创建时间：{{mclass.setup_time_y}}.{{mclass.setup_time_m}}.{{mclass.setup_time_d}}</h3>
          <h3>最近观看：{{mclass.watch_time_d}}</h3>
          <h3>点击量：{{mclass.hitsNum}}</h3>
        </a>
      </li>
    </ul>
    <img src='classList[0].picurl' alt="" />
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      theme1: 'dark',
      classList: []
    };
  },
  mounted() {
    console.log("this is mounted")
  },
created() {
  //添加数据类型待修改

  this.$ajax.get('/api/ClassList/classlist')
    .then((res)=>{
      console.log("this is classlist");
      // this.classList = res.data.data;
      var tmpList = res.data.data;
      console.log(res.data.data);
      for(var i = 0; i < tmpList.length; i++){

        this.classList.push({
          picurl: tmpList[i].picurl,
          discription: tmpList[i].discription,
          sort: tmpList[i].sort,
          teacher: tmpList[i].teacher,
          hitsNum: tmpList[i].hitsNum,
          watch_time: tmpList[i].watch_time,
          watch_time_d : '',
          setup_time_y : tmpList[i].setup_time_y,
          setup_time_m : tmpList[i].setup_time_m,
          setup_time_d : tmpList[i].setup_time_d,
          uid: 'xxxx',
          vid: '893802'
        })
      }
      for(var i = 0; i < this.classList.length; i++){
        var tmp = Math.ceil(this.classList[i].watch_time/24)
        this.classList[i].watch_time_d = tmp + '天前看过'
      }
    })
    .catch(function(error) {
      console.log(error);
    });


  console.log("this is created")
},
  methods: {
    sortWatchTime:function(){
      console.log("this is sortWatchTime")
      this.classList = this.sortByWT(this.classList, 'watch_time')
    },
    sortByWT:function(array, key){
      console.log("this is sortByWT")
      return array.sort(function(a,b){
        var x = a[key];
        var y = b[key];
        // console.log(x)
        // console.log(y)
        if(x<y){
          return (-1);
        }
        else if(x>y){
          return (1);
        }
        else {
          return (0);
        }
      })
},
      sortSetupTime:function(){
        console.log("this is sortSetupTime")
        this.classList = this.sortByST(this.classList, 'setup_time_y', 'setup_time_m', 'setup_time_d')
      },
      sortByST:function(array, key1, key2, key3){
        console.log("this is sortByST")
        return array.sort(function(a,b){
          var x1 = parseInt(a[key1]);
          var y1 = parseInt(b[key1]);
          var x2 = parseInt(a[key2]);
          var y2 = parseInt(b[key2]);
          var x3 = parseInt(a[key3]);
          var y3 = parseInt(b[key3]);
          if(x1<y1){
            return (1);
          }
          else if(x1>y1){
            return (-1);
          }
          else {
            if(x2<y2){
              return (1);
            }
            else if(x2>y2){
              return (-1);
            }
            else {
              if(x3<y3){
                return (1);
              }
              else if(x3>y3){
                return (-1);
              }
              else {
                return (0);
              }
            }
          }
        })
    }
  },
  computed: {

  },
  components: {}
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

.PlayList {
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>

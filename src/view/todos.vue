<template>
    <div>
      <aaa/>
      <main>
        <p class="plan">第二步制作创意</p>
        <div class="align">
          <el-tabs v-model="activeNameA" @tab-click="handleClick">
            <el-tab-pane v-for="item of activeName" :key="item.tagIndex"
                         :label="item.title + item.tagIndex">
            </el-tab-pane>
          </el-tabs>
          <el-button @click="addChuangyi" size="mini">添加创意</el-button>
        </div>

        <div class="video">
          <div class="left">
            <h3>视频</h3>
            <el-card>
              <img class="my-img" src="../assets/img/bg1.jpg" alt="">
            </el-card>
            <p class="title">
              宽高比例11：9,视频码率>=516kbps 宽高比例11：9,视频码率>=516kbps 宽高 比例11：9,视频码率 >=516kbps
            </p>
          </div>
          <div class="right">
            <h3>封面</h3>
            <el-card>
              <img class="my-img" src="../assets/img/bg1.jpg" alt="">
            </el-card>
            <p class="title">
              宽高比例11：9,视频码率>=516kbps 宽高比例11：9,视频码率>=516kbps 宽高 比例11：9,视频码率 >=516kbps
            </p>
          </div>
        </div>
        
      </main>
    </div>
</template>

<script>

import aaa from "./aaa";
export default {
  name: "todos",
  components:{
    aaa
  },
  props:{
    // banner:Array,
  },
  data(){
    return{
      tagIndex:1,
      activeNameA:"",
      activeName:[{
        tagIndex:1,
        title:'创意',
      }],
    }
  },
  created() {
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    addChuangyi(){
      let obj = {
        tagIndex:this.tagIndex += 1,
        title:'创意',
      }
      if (this.activeName.length <= 3){
        this.activeName.push(obj)
      }else {
       this.$message.error("至多增加三次")
      }
    },
  }
}
</script>

<style scoped>
main{
  padding: 0 15px;
}
.plan{
  color: rgb(120, 155, 161);
}
.align{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.video{
  display: flex;
  justify-content: space-between;
}
.video > div{
  width: 48%;
}
.left{
  text-align: center;
}
.right{
  text-align: center;
}
/deep/ .left .el-card__body{
  height: 200px;
}
/deep/ .right .el-card__body{
  height: 200px;
}
.left h3,
.right h3{
  font-weight: 400;
}
.title{
  color: #b0b0b0;
  font-size: 12px;
  text-align: left;
}
.my-img{
  width: 100%;
  height: 100%;
}
</style>
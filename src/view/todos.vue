<template>
    <div>
      <aaa/>
      <main>
        <p class="plan">第二步制作创意</p>
        <div class="align">
          <div v-for="item of activeName" :key="item.tagIndex">
            {{item.title}} {{item.tagIndex}}
          </div>
          <el-button @click="addChuangyi" size="mini">添加创意</el-button>
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
        tagIndex:this.tagIndex +=1,
        title:'创意',
      }
      this.activeName.push(obj)
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
</style>
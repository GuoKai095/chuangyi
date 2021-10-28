<template>
  <div>
    <mt-header class="my-header" title="创意详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <main>
      <h3>制作创意</h3>
      <p class="plan">第一步选择计划</p>
      <el-input class="search" icon="el-icon-search"  v-model="input" placeholder="搜索计划关键字或计划id"></el-input>

      <div class="my-main">
        <div class="table-header">产品计划名称 总共 {{table.length }} 项</div>
        <div class="mian-list" v-for="(item,index) of table" :key="index">
          <div class="left">
            <el-radio v-model="item.radio" style="margin:5px;"></el-radio>
            <el-switch v-model="item.value"></el-switch>
          </div>
          <div class="right">
            <p>{{ item.title }}</p>
          </div>
        </div>
        <el-pagination
            class="fenye"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="table.length">
        </el-pagination>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "aaa",
  data(){
    return{
      value:"1",
      value1:"",
      input:"",
      radio:"",
      length:"10",
      table:[{
        radio:"",
        value:"",
        title:"oCPM-抖音-7.26"
      },
        {
          radio:"",
          value:"",
          title:"oCPM-抖音-7.26"
        },
        {
          radio:"",
          value:"",
          title:"oCPM-抖音-7.26"
        },
        {
          radio:"",
          value:"",
          title:"oCPM-抖音-7.26"
        }]
    }
  },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  created() {
  }
}
</script>

<style scoped>
.my-header{
  background: #fff;
  color: #333;
}
main{
  padding: 0 15px;
}
main .plan{
  color: rgb(146, 172, 170);
  font-size: 16px;
  margin: 5px 0;
}
/deep/ .search .el-input__inner{
  border-radius: 20px;
}

.my-main{
}
.table-header{
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
  color: rgb(103, 260, 256);
  background: rgb(250, 250, 250);
}
.mian-list{
  display: flex;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
}
.mian-list:hover{
  background: rgba(0,0,0,.06);
}
.left{
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*width: 100px;*/
  padding: 0 10px;
}
.right{
  padding-left: 20px;
  color: rgb(120, 155, 161);
  /*flex: 1;*/
}

/deep/ .el-pagination .el-select .el-input {
  width: 70px;
  margin: 0 5px;
}
/deep/ .el-pagination__editor.el-input {
  width: 24px;
}
</style>
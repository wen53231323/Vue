<template>
  <div class="son-div">
      <div>点击按钮改变父属性默认值</div>
      <button @click="show">按钮</button>
  </div>
</template>
<script>
  export default {
      name: "",
      data() {
          return {
              son_data: "子组件数据",
          };
      },
      methods: {
          show() {
              // 自定义的事件eventTest
              // 语法：this.$emit(自定义事件的名称,参数1,参数2,参数n)
              this.$emit("eventTest", this.son_data);
          },
      },
  };
</script>
<style lang="less" scoped>
  .son-div {
      padding: 10px;
      border-radius: 15%;
      background-color: rgb(166, 204, 113);
  }
</style>

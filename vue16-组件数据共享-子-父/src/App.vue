<template>
  <div>
      <div class="app-box">
          <div>子——>父</div>
          <div>{{father_default}}</div>
          <!-- 子向父数据共享使用：子组件创建自定义事件eventTest，父组件使用后，触发test函数 -->
          <son-father @eventTest="test"></son-father>
      </div>
  </div>
</template>
<!-- script里定义js行为或导入文件 -->
<script>
  // 默认导入
  import son from "@/components/Son.vue";
  // 默认导出，向其他模块共享成员（仅允许使用一次）
  export default {
      // components用于注册组件
      components: {
          "son-father": son,
      },
      // data用于定义数据模型，数据提供给el指定的容器使用（组件中的data不能指向对象，必须是函数）
      data: function () {
          // 返回数据对象
          return {
              father_default: "父组件默认值",
          };
      },
      // methods用于定义事件的处理函数
      methods: {
          // val是自定义事件的参数
          test(val) {
              this.father_default = val;
          },
      },
  };
</script>
<!-- style标签里定义less样式 -->
<style lang="less">
  .app-box {
      margin: auto;
      flex-direction: column; /*主轴为垂直方向，起点在上沿*/
      text-align: center; /*文本水平居中*/
      display: flex; /*父元素设置flex属性*/
      justify-content: center; /*水平主轴居中*/
      align-items: center; /*垂直交叉轴居中*/
      justify-content: space-around; /*整体居中*/
      border-radius: 15%;
      width: 300px;
      height: 150px;
      background-color: orange;
  }
</style>

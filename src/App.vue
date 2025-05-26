<template>
  <div>
    <h1>我是APP</h1>
    <SvgIcon name="time" width="100px" height="100px"></SvgIcon>
    <h1>测试Axios</h1>

  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(()=>{
  console.log("组件挂载完成")
})

</script>
<style scoped lang="scss">
div{
  h1{
    color: $base-color;
  }
}
</style>

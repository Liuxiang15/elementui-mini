<template>
  <div id="app">
    <!-- <RowTest /> -->
    <!-- <ContainerTest/> -->
    <!-- <IconTest /> -->
    <!-- <ButtonTest /> -->
    <ButtonGroupTest />
  </div>
</template>

<script>
// import RowTest from '@element/Row/test';
// import ContainerTest from '@element/container/test';
// import IconTest from '@element/icon/test.vue';
// import ButtonTest from '@element/button/test.vue';
import ButtonGroupTest from '@element/button-group/test.vue';

export default {
  name: 'app',
  components: {
    // RowTest,
    // ContainerTest,
    // IconTest,
    // ButtonTest,
    ButtonGroupTest,
  },
};
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
</style>

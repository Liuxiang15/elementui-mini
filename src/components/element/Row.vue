<template>
  <div class="el-row">
    <slot></slot>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

.el-row {
  &::after,
  &::before {
    display: block;
    content: '';
  }
  &::after {
    clear: both;
  }
}
</style>

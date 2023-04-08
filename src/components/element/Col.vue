<template>
  <div :class="['el-col', `el-col-${span}`]" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: Number,
      default: 24,
    },
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (!this.gutter) {
        return style;
      }
      style.paddingLeft = style.paddingRight = `${this.gutter / 2}px`;
      return style;
    },
  },
};
</script>
<style lang="scss" scoped>
.el-col {
  float: left;
  box-sizing: border-box;
}

@for $i from 1 through 24 {
  .el-col-#{$i} {
    width: $i / 24 * 100%;
  }
}
</style>

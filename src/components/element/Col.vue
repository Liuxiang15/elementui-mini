<template>
  <div
    :class="['el-col', classList]"
    :style="style"
  >
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
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
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
    classList() {
      const classList = [];
      const propList = ['span', 'offset', 'push', 'pull'];
      propList.forEach((prop) => {
        if (!this[prop]) return;
        const className = prop === 'span' ? `el-col-${this[prop]}` : `el-col-${prop}-${this[prop]}`;
        classList.push(className);
      });
      return classList;
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

  .el-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }
  .el-col-push-#{$i} {
    position: relative;
    left: $i / 24 * 100%;
  }

  .el-col-pull-#{$i} {
    position: relative;
    right: $i / 24 * 100%;
  }
}
</style>

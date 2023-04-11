<template>
  <div :class="['el-container', { 'is-vertical': isVertical }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElContainer',
  props: {
    direction: String,
    validator: val => ['horizontal', 'vertical'].includes(val),
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        return true;
      }
      if (this.direction === 'horizontal') {
        return false;
      }
      return (this.$slots && this.$slots.default)
        ? this.$slots.default.some((vnode) => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag;
          return ['el-header', 'el-footer'].includes(tag);
        })
        : false;
    },
  },
};
</script>

<style>
</style>

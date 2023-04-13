<template>
  <i :class="['el-icon', `el-icon-${name}`]">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: 'ElIcon',
  props: {
    name: String,
  },
};
</script>

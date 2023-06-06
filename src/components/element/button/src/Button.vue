<template>
  <button
    class="el-button"
    :class="[
      type ? `el-button--${type}` : '',
      {
        'is-plain': plain,
        'is-round': round,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    type: String,
    plain: Boolean,
    round: Boolean,
  },
};
</script>

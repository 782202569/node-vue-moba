<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex ai-center pb-3">
      <div class="iconfont" :class="`icon-${icon}`"></div>
      <div class="fs-xl flex-1 px-2">{{ title }}</div>
      <div class="iconfont icon-icon-font-msg"></div>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';
.card {
  .card-header {
    border-bottom: 1px solid $border-color;
  }
  border-bottom: 1px solid $border-color;
}
</style>

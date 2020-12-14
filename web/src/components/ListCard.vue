<template>
  <myCard :icon="icon" :title="title">
    <div class="nav jc-between">
      <div
        class="nav-item"
        :class="{ active: active === index }"
        v-for="(category, index) in categories"
        :key="index"
        @click="$refs.list.$swiper.slideTo(index)"
      >
        <div class="nav-link">{{ category.name }}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper
        ref="list"
        :options="{ autoHeight: true }"
        @slide-change="() => (active = $refs.list.$swiper.realIndex)"
      >
        <swiper-slide v-for="(category, index) in categories" :key="index">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </myCard>
</template>

<script>
import myCard from './Card'
export default {
  name: 'listCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  components: {
    myCard,
  },
  data() {
    return {
      active: 0,
    }
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

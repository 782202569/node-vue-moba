<template>
  <div class="home">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100 h-100" src="../assets/images/gg.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100 h-100" src="../assets/images/hh.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100 h-100" src="../assets/images/ll.jpeg" />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-2"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <myListCard icon="cc-menu-circle" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(news, index) in category.newsList"
          :key="index"
        >
          <span class="text-info">[{{ news.categoryName }}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{ news.title }}</span>
          <span class="text-grey-1 fs-sm">{{ news.createdAt | date }}</span>
        </router-link>
      </template>
    </myListCard>

    <myListCard icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
          <router-link
            tag="div"
            :to="`/heroes/${hero._id}`"
            class="p-2 text-center"
            style="width: 20%;"
            v-for="(hero, index) in category.heroList"
            :key="index"
          >
            <img :src="hero.avatar" class="w-100" alt="" />
            <div>{{ hero.name }}</div>
          </router-link>
        </div>
      </template>
    </myListCard>

    <myCard :icon="`cc-menu-circle`" title="精彩视频"></myCard>
    <myCard :icon="`cc-menu-circle`" title="图文攻略"></myCard>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import myListCard from '../components/ListCard'
import myCard from '../components/Card'
export default {
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    },
  },
  name: 'Home',
  components: {
    myCard,
    myListCard,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
      newsCats: [],
      heroCats: [],
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false)
    this.fetchNewsCats()
    this.fetchHeroCats()
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchHeroCats() {
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    },
  },
}
</script>
<style lang="scss">
@import '../assets/scss/_variables.scss';

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, 'white');
    &.swiper-pagination-bullet-active {
      background: map-get($colors, 'info');
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>

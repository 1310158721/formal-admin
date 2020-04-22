<template>
  <div class="all-wrapper">
    <!-- <transition name="router"> -->
      <router-view />
    <!-- </transition> -->
    <!-- 系统全局遮罩 -->
    <transition name='fade'>
      <t-global-mask v-if='$store.state.globalMask' />
    </transition>
  </div>
</template>

<script>
import TGlobalMask from '@/components/global/mask'
export default {
  name: 'App',
  components: {
    TGlobalMask
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.all-wrapper {
  width: 100vw;
  height: 100vh;
  min-width: 1000px;
  overflow: auto;
}
</style>

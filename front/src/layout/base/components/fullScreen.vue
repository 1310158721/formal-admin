<template>
  <div class="full-screen-wrapper">
    <i v-t-full-screen='options' class="iconfont" :class="[isFullScreenBaseLayout ? 'icon-tuichuquanping' : 'icon-quanping']" />
  </div>
</template>

<script>
export default {
  name: 't-full-screen',
  components: {},
  props: {},
  data () {
    return {
      isFullScreenBaseLayout: false,
      options: {
        fnCallback: () => {
          this.isFullScreenBaseLayout = !this.isFullScreenBaseLayout
        },
        dom: 't-main-wrapper'
      }
    }
  },
  computed: {},
  methods: {},
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.full-screen-wrapper {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  &:hover {
      background-color: rgba(204, 236, 247, .4);
    }
  i {
    font-size: 50px;
  }
}
</style>

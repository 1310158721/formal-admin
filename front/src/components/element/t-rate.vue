<template>
  <el-rate
    class="t-rate"
    :class="selectClassStyle"
    v-bind='$attrs'
    v-on='$listeners'
    ref='t-rate'
  />
</template>

<script>
export default {
  name: 't-rate',
  components: {},
  props: {
    /**
     * el-rate 本身没有接受该属性
     * t-rate 接受该属性用于设置 el-rate 的line-height
     */
    size: {
      type: String,
      default: 'small'
    }
  },
  data () {
    return {}
  },
  computed: {
    selectClassStyle () {
      switch (this.size) {
        case 'mini':
          return 't-rate-mini'
        case 'small':
          return 't-rate-small'
        case 'medium':
          return 't-rate-medium'
        case '':
          return 't-rate-default'
        default:
          return 't-rate-small'
      }
    }
  },
  methods: {
    getRefs () {
      return this.$refs['t-rate']
    }
  },
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.t-rate-mini {
  height: 28px;
  line-height: 28px;
}
.t-rate-small {
  height: 32px;
  line-height: 32px;
}
.t-rate-medium {
  height: 36px;
  line-height: 36px;
}
.t-rate-default {
  height: 40px;
  line-height: 40x;
}
.t-rate {
  /deep/.el-rate__item {
    vertical-align: basline!important;
  }
}
</style>

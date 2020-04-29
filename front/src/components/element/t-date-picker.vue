<template>
  <el-date-picker
    v-bind='$attrs'
    v-on='$listeners'
    :type="type"
    :size='size'
    :clearable='clearable'
    :placeholder='placeholder'
    :start-placeholder='startPlaceholder'
    :end-placeholder='endPlaceholder'
    :format='format'
    :value-format='valueFormat'
    :unlink-panels='unlinkPanels'
    :default-time='defaultTime'
    ref='t-date-picker'
  />
</template>

<script>
export default {
  name: 't-date-picker',
  components: {},
  props: {
    type: {
      type: String,
      default: 'date'
    },
    size: {
      type: String,
      default: 'small'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: '请选择日期'
    },
    startPlaceholder: {
      type: String,
      default: '请选择开始日期'
    },
    endPlaceholder: {
      type: String,
      default: '请选择结束日期'
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd HH:mm:ss'
    },
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd HH:mm:ss'
    },
    unlinkPanels: {
      type: Boolean,
      default: true
    },
    /**
     * 配置选取日期后的默认开始时刻
     * 当前配置非日期段时，开始时刻为
     */
    defaultTime: {
      type: [Array, String],
      default: function () {
        // 箭头函数的 this 指向不到该组件实例
        return this.type.includes('range') ? ['00:00:00', '23:59:59'] : '00:00:00'
      }
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    getRefs () {
      return this.$refs['t-date-picker']
    }
  },
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>

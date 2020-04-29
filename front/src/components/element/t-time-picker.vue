<template>
  <span
    class="t-time-picker"
    :is='isFixed ? "el-time-select" : "el-time-picker"'
    v-bind='$attrs'
    v-on='$listeners'
    :clearable='clearable'
    :size='size'
    :placeholder='placeholder'
    :start-placeholder='startPlaceholder'
    :end-placeholder='endPlaceholder'
    value-format='h:m:s'
    ref='t-time-picker'
  />
</template>

<script>
export default {
  name: 't-time-picker',
  components: {},
  props: {
    // 是否是固定时间或固定时间范围
    isFixed: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'small'
    },
    placeholder: {
      type: String,
      default: '请选择时间'
    },
    startPlaceholder: {
      type: String,
      default: '请选择开始时间'
    },
    endPlaceholder: {
      type: String,
      default: '请选择结束时间'
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    // 根据组件类型（el-time-select/el-time-picker）来提示不符合格式的属性
    tip () {
      const { value, defaultValue } = this.$attrs
      if (this.isFixed) {
        if (value && typeof value !== 'string') {
          console.error('t-time-picker 组件接受的 value 应为 string 类型')
        }
        if (defaultValue && typeof defaultValue !== 'string') {
          console.error('t-time-picker 组件接受的 defaultValue 应为 string 类型')
        }
      } else {
        if (value && !(value instanceof Date)) {
          console.error('t-time-picker 组件接受的 value 应为 Date 类型')
        }
        if (defaultValue && !(defaultValue instanceof Date)) {
          console.error('t-time-picker 组件接受的 defaultValue 应为 Date 类型')
        }
      }
    },
    getRefs () {
      return this.$refs['t-time-picker']
    }
  },
  created () {
    this.tip()
  },
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>

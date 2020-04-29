<template>
  <span
    :is='isPanel ? "el-cascader-panel" : "el-cascader"'
    v-bind='$attrs'
    v-on='$listeners'
    :clearable='clearable'
    :show-all-levels='showAllLevels'
  />
</template>

<script>
export default {
  name: 't-cascader',
  components: {},
  props: {
    isPanel: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    // 默认只显示最好一层文案
    showAllLevels: {
      type: Boolean,
      default: false
    }
  },
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

<style lang="scss" scoped></style>

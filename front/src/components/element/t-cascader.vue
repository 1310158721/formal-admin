<template>
  <span
    :is='isPanel ? "el-cascader-panel" : "el-cascader"'
    v-bind='$attrs'
    v-on='$listeners'
    :clearable='clearable'
  >
    <template slot-scope="{ node, data }">
      <!-- slot 传参 -->
      <slot v-bind='{ node, data }' />
    </template>
  </span>
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

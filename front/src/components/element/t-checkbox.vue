<template>
  <el-checkbox-group v-bind='$attrs' v-on='$listeners'>
    <template v-if='checkboxType === 1'>
      <el-checkbox v-for='i in data' :key='i.label' v-bind='i' />
    </template>
    <template v-else>
      <el-checkbox-button v-for='i in data' :key='i.label' v-bind='i' />
    </template>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 't-checkbox',
  components: {},
  props: {
    data: {
      type: Array,
      default: () => []
    },
    // 1 表示正常radio，2 表示按钮类型
    checkboxType: {
      type: Number,
      default: 1
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

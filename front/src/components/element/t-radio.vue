<template>
  <el-radio-group v-on='$listeners' v-bind='$attrs'>
    <template v-if='radioType === 1'>
      <el-radio v-for='i in data' :key='i.label' v-bind='i'>{{ i.title }}</el-radio>
    </template>
    <template v-else>
      <el-radio-button v-for='i in data' :key='i.label' v-bind='i'>{{ i.title }}</el-radio-button>
    </template>
  </el-radio-group>
</template>

<script>
export default {
  name: 't-radio',
  components: {},
  props: {
    data: {
      type: Array,
      default: () => []
    },
    // 1 表示正常radio，2 表示按钮类型
    radioType: {
      type: Number,
      default: 2
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

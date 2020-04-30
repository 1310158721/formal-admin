<template>
  <el-transfer
     v-bind='$attrs'
     v-on='$listeners'
     ref='t-transfer'
  >
    <template slot="left-footer">
      <slot name="left-footer" />
    </template>
    <template slot="right-footer">
      <slot name="right-footer" />
    </template>
  </el-transfer>
</template>

<script>
export default {
  name: 't-transfer',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {
    getRefs () {
      return this.$refs['t-transfer']
    }
  },
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>

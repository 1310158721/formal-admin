<template>
  <el-input v-model.number="$attrs.value" v-bind='$attrs' v-on='$listeners'>
    <template slot="left-footer">
      <slot name="left-footer" />
    </template>
    <template slot="suffix">
      <slot name="suffix" />
    </template>
    <template slot="append">
      <slot name="append" />
    </template>
    <template slot="prepend">
      <slot name="prepend" />
    </template>
  </el-input>
</template>

<script>
export default {
  name: 't-input',
  components: {},
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

<style lang="scss" scoped></style>

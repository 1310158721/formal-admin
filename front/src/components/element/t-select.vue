<template>
  <el-select size="small" v-bind="$attrs" v-on="$listeners" :placeholder="placeholder">
    <el-option
      v-for="item in $attrs.optionEnum"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  name: 't-select',
  components: {},
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {},
  created () {},
  mounted () { },
  watch: {}
}
</script>

<style lang="scss" scoped></style>

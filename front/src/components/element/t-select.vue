<template>
  <el-select size="small" v-model="value" v-bind="$attrs" v-on="$listeners" placeholder="请选择">
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
  props: {},
  data () {
    return {
      value: ''
    }
  },
  computed: {},
  methods: {},
  created () {
    this.value = this.$attrs.value || null
  },
  mounted () { },
  watch: {}
}
</script>

<style lang="scss" scoped></style>

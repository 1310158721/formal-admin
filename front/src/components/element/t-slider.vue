<template>
  <el-slider
    v-bind='$attrs'
    v-on='$listeners'
    ref='t-slider'
  />
</template>

<script>
export default {
  name: 't-slider',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {
    getRefs () {
      return this.$refs['t-slider']
    }
  },
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>

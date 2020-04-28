<template>
  <el-input-number
    v-bind='$attrs'
    v-on='$listeners'
    ref='input'
  />
</template>

<script>
export default {
  name: 't-input-number',
  components: {},
  props: {},
  data () {
    return {
      count: 1
    }
  },
  computed: {},
  methods: {
    getRefs () {
      return this.$refs.input
    }
  },
  created () {},
  mounted () {},
  watch: {},
}
</script>

<style lang="scss" scoped></style>

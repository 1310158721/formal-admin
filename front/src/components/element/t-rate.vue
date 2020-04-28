<template>
  <el-rate
    v-bind='$attrs'
    v-on='$listeners'
    ref='t-rate'
  />
</template>

<script>
export default {
  name: 't-rate',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {
    getRefs () {
      return this.$refs['t-rate']
    }
  },
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>

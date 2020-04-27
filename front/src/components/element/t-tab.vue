<template>
  <el-tabs v-bind='$attrs' v-on='$listeners'>
    <el-tab-pane v-for='i in data' :key='i.id' v-bind='i'>
      <span v-if='i.content'>
        {{ i.content }}
      </span>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 't-tab',
  components: {},
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeName: ''
    }
  },
  computed: {},
  methods: {},
  created () { },
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>

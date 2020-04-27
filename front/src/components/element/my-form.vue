<template>
  <el-form>
    <template v-for='i in data'>
      <el-form-item :key='i.id'>
        <el-input type='text' v-model='i.value' v-bind='i.attrs' v-on='i.listeners' />
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
export default {
  name: 'my-form',
  components: {},
  props: {
    data: {
      type: Array,
      default: () => []
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

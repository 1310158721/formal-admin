<template>
  <my-form :formData='formData'></my-form>
</template>

<script>
export default {
  name: 'componentName',
  components: {},
  props: {},
  data () {
    return {
      formData: [
        {
          ele: 'el-input',
          value: null,
          attrs: {},
          listeners: {
            input: this.handleInput
          }
        }
      ]
    }
  },
  computed: {},
  methods: {
    handleInput (val) {
      console.log(val)
    }
  },
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>

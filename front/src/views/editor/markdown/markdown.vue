<template>
  <div class="markdown-wrapper">
    <t-mavon-editor :size="2000" />
  </div>
</template>

<script>
export default {
  name: 't-markdown',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {
    handleChange (string, render) {
      this.content = render
    }
  },
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.markdown-wrapper {
  width: 100%;
  height: 100%;
  min-height: 100%;
  .editor-wrapper {
    width: 100%;
    height: 100%;
  }
  .markdown-body {
    /deep/img {
      max-width: 200px;
      max-height: 400px;
    }
  }
}
</style>

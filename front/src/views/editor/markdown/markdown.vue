<template>
  <div class="markdown-wrapper">
    <TMavonEditor :size="2000" />
  </div>
</template>

<script>
import TMavonEditor from '@/components/global/mavon-editor'
export default {
  name: 't-markdown',
  components: {
    TMavonEditor
  },
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

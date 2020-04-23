<template>
  <div>
    <div
      v-t-full-screen="i.options"
      class="test-demo"
      v-for="i in domEnum"
      :key="i.id"
      :id="i.id"
    >{{ i.content1 }}</div>
  </div>
</template>

<script>
export default {
  name: 't-full-screen-demo',
  components: {},
  props: {},
  data () {
    return {
      domEnum: [
        {
          id: 't-full-screen-demo-1',
          content1: '点我全屏化-1',
          content2: '还未全屏化-1',
          options: {
            fnCallback: () => { },
            dom: 't-full-screen-demo-1'
          }
        },
        {
          id: 't-full-screen-demo-2',
          content1: '点我全屏化-2',
          content2: '还未全屏化-2',
          options: {
            fnCallback: () => {
              console.log(123)
            },
            dom: 't-full-screen-demo-2'
          }
        }
      ]
    }
  },
  computed: {},
  methods: {},
  created () { },
  mounted () { },
  watch: {}
}
</script>

<style lang="scss" scoped>
.test-demo {
  width: 100px;
  height: 100px;
  border: 3px black solid;
  margin: 20px;
  box-sizing: border-box;
}
</style>

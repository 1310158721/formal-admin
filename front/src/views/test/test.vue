<template>
  <t-breadcrumb
    :data='data'
  />
</template>

<script>
export default {
  name: 'componentName',
  components: {},
  props: {},
  data () {
    return {
      data: [
        {
          label: '首页1',
          to: '/dashboard1',
          replace: false
        },
        {
          label: '首页2',
          to: '/dashboard2',
          replace: false
        },
        {
          label: '首页3',
          to: '/dashboard3',
          replace: false
        },
        {
          label: '首页4',
          to: '/dashboard4',
          replace: false
        }
      ]
    }
  },
  computed: {},
  methods: {},
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>

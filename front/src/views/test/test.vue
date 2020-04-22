<template>
  <TDrowdown trigger='click' v-if='dropdownItemEnum.length' :dropdownItemEnum='dropdownItemEnum' class="t-drowdown-wrapper">
    <template #link>
      <span class="link">link</span>
    </template>
  </TDrowdown>
</template>

<script>
import TDrowdown from '@/components/element/t-dropdown'
export default {
  name: 'test',
  components: {
    TDrowdown
  },
  props: {},
  data () {
    return {
      dropdownItemEnum: [
        {
          label: '首页',
          attrs: {
            command: 'dashboard'
          },
          fnCallback: () => {
            console.log('dashboard')
          }
        },
        {
          label: '系统布局',
          attrs: {
            command: 'layout'
          },
          fnCallback: () => {
            console.log('layout')
          }
        },
        {
          label: '退出',
          atts: {
            command: 'logout',
            divided: true
          },
          fnCallback: () => {
            console.log('logout')
          }
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

<style lang="scss" scoped>
.t-drowdown-wrapper {
  .link {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: lightblue;
    border-radius: 50%;
    line-height: 50px;
    text-align:center;
    cursor: pointer;
  }
}
</style>

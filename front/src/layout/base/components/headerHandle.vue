<template>
  <TDrowdown class="header-handle-dropdown" trigger='click' v-if='dropdownItemEnum.length' :dropdownItemEnum='dropdownItemEnum'>
      <template #link>
        <span class="el-dropdown-link" />
      </template>
    </TDrowdown>
</template>

<script>
import jsCookie from 'js-cookie'
import { mapMutations } from 'vuex'
import TDrowdown from '@/components/element/t-dropdown'
export default {
  name: 'headerHandle',
  components: {
    TDrowdown
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    dropdownItemEnum () {
      return [
        {
          label: '首页',
          attrs: {
            command: 'dashboard',
            disabled: this.$route.path.includes('dashboard')
          },
          fnCallback: this.goDashbaord
        },
        {
          label: '系统布局',
          attrs: {
            command: 'baseLayout'
          },
          fnCallback: this.setBaseLayout
        },
        {
          label: '退出',
          attrs: {
            command: 'logOut',
            divided: true
          },
          fnCallback: this.logout
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['SETGLOBALBASELAYOUT']),
    goDashbaord () {
      this.$router.push('/dashboard')
    },
    logout () {
      jsCookie.remove('token')
      this.$router.push('/login')
    },
    setBaseLayout () {
      this.SETGLOBALBASELAYOUT(true)
    }
  },
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.header-handle-dropdown {
  width: 50px;
  height: 100%;
  margin-right: 20px;
  box-sizing: border-box;
  .el-dropdown-link {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-image: url('~@/assets/img/default.jpeg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      opacity: .5;
    }
  }
}
</style>

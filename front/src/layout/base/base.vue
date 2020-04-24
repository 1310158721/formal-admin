<template>
  <el-container id="base-layout-wrapper">
    <t-sider />
    <el-container
      id="base-layout-right-part"
      :class="[
        $store.state.isFixedBaseLayoutHeader ? 'fixed-header' : 'release-header'
      ]"
    >
      <div class="t-header-wrapper">
        <t-header class="t-header" />
      </div>
      <div class="t-tab-routes-wrapper" v-if='$store.state.isOpenBaseLayoutTabRoutes'>
        <TabRoutes />
      </div>
      <div class="t-main-wrapper" id='t-main-wrapper'>
        <t-main class="t-main" />
      </div>
    </el-container>
    <t-globla-base-layout-drawer
      :visible='$store.state.isShowGlobalBaseLayout'
    />
  </el-container>
</template>

<script>
import THeader from './components/header'
import TSider from './components/sider'
import TMain from './components/main'
import TabRoutes from './components/tabRoutes'
import { mapMutations } from 'vuex'
export default {
  name: 'baseLayout',
  components: {
    TSider,
    THeader,
    TMain,
    TabRoutes
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {
    ...mapMutations(['SETGLOBALBASELAYOUT']),
    beforeClose () {
      this.SETGLOBALBASELAYOUT(false)
    }
  },
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped>
$header: 50px;
$tab: 40px;
#base-layout-wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  #base-layout-right-part {
    width: 100%;
    height: 100vh;
    .t-header-wrapper {
        width: 100%;
        height: $header;
      }
    &.fixed-header {
      display: flex;
      flex-direction: column;
      .t-main-wrapper {
        flex: 1;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;
      }

    }
    &.release-header {
      display: inline-block;
      overflow: auto;
      .t-main-wrapper {
        height: calc(100% - #{$header} - #{$tab});
        padding: 20px;
        box-sizing: border-box;
      }
    }
    .t-tab-routes-wrapper {
      height: $tab;
    }
  }
}
</style>

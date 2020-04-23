<template>
  <div class="select-routes-wrapper">
    <i class="search iconfont icon-ziyuan1" @click="handleSearchRoutes" />
    <TSelect
      ref="routesSelect"
      filterable
      :style="{ width: width + 'px', opacity, transition: 'all 0.2s linear' }"
      v-if="routesEnum.length"
      :optionEnum="routesEnum"
      @blur="selectBlur"
      @change="selectChange"
      :value="$route.path"
    />
  </div>
</template>

<script>
import TSelect from '@/components/element/t-select'
export default {
  name: 't-search-routes',
  components: {
    TSelect
  },
  props: {},
  data () {
    return {
      routesEnum: [],
      width: 0,
      opacity: 0
    }
  },
  computed: {},
  methods: {
    // parentTitle 用于保存父级的 title，用于传递给子级做拼接
    joinChildTitle (list, parentTitle = '') {
      list.map(i => {
        i.title =
          (parentTitle ? parentTitle + ' -> ' : '') +
          this.$t('menuList.' + i.title)
        if (i.children && i.children.length) {
          this.joinChildTitle(i.children, i.title)
        }
      })
    },
    // 获取搜索菜单，保存到 data -> routesEnum 中
    getRoutesEnum (list) {
      list.map(i => {
        if (i.children && i.children.length) {
          this.getRoutesEnum(i.children)
        } else {
          this.routesEnum.push({ label: i.title, value: i.path })
        }
      })
    },
    handleSearchRoutes () {
      this.width = 203
      this.opacity = 1
      this.$nextTick(() => {
        this.$refs.routesSelect.$children[0].focus()
      })
    },
    selectBlur () {
      this.width = 0
      this.opacity = 0
    },
    selectChange (val) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.$router.push({
            path: val
          })
        }, 200)
      })
    },
    formatRoutesEnum () {
      // 深合并一份 $store.state.menuList，防止如下操作会改变到 $store.state.menuList
      const menuList = JSON.parse(JSON.stringify(this.$store.state.menuList))
      this.joinChildTitle(menuList)
      this.getRoutesEnum(menuList)
    }
  },
  created () {
    this.formatRoutesEnum()
  },
  mounted () {},
  watch: {
    '$i18n.locale' () {
      this.routesEnum = []
      this.formatRoutesEnum()
    }
  }
}
</script>
<style lang="scss" scoped>
.select-routes-wrapper {
  height: 32px;
  line-height: 32px;
  .search {
    vertical-align: middle;
    display: inline-block;
    width: 32px;
    height: 32px;
    font-size: 32px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: rgba(#409eff, 0.3);
    }
  }
  /deep/.el-input {
    box-sizing: border-box;
    vertical-align: middle;
    .el-input__inner {
      border-radius: 0;
      border: 0;
      border-bottom: 1px solid #dcdfe6;
      background-color: transparent;
    }
    i {
      display: none;
    }
  }
}
</style>

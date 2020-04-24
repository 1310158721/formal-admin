<!--
  封装 el-dialog 组件，再起基础上设置一些默认配置
-->
<template>
  <el-dialog
    custom-class="t-dialog-wrapper"
    v-on='$attrs'
    v-bind='$listeners'
    :title='title'
    :width='width'
    :modal-append-to-body='modalAppendToBody'
    :append-to-body='appendToBody'
    :visible.sync="visible"
    :close-on-click-modal='closeOnClickModal'
    :close-on-press-escape='closeOnPressEscape'
    :before-close="dialogClose"
  >
    <slot>
      <span>这是一段默认信息</span>
    </slot>
    <span slot="footer" class="dialog-footer">
      <slot>
        <el-button size='small' @click="dialogCancel">{{ cancelText }}</el-button>
        <el-button size='small' type="primary" @click="dialogSure">{{ sureText }}</el-button>
      </slot>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 't-dialog',
  components: {},
  // props 为默认配置
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '我是默认标题'
    },
    width: {
      type: String,
      default: '70%'
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    dialogClose: {
      type: Function,
      default: () => {}
    },
    dialogCancel: {
      type: Function,
      default: () => {}
    },
    cancelText: {
      type: String,
      default: '取 消'
    },
    dialogSure: {
      type: Function,
      default: () => {}
    },
    sureText: {
      type: String,
      default: '确 定'
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {},
  created () {
    console.log(this.$attrs)
  },
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped>
/deep/.el-dialog {
  .el-dialog__header {
    height: 54px;
    padding: 18px 24px;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    .el-dialog__title {
      font-size: 18px;
      line-height: 18px;
    }
  }
  .el-dialog__body {
    padding: 24px;
    box-sizing: border-box;
  }
  .el-dialog__footer {
    height: 54px;
    padding: 11px 24px;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    .el-button {
      width: 120px;
    }
  }
}
</style>

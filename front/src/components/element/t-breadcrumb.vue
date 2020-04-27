<!--
  对 el-breadcrumb 做一次封装
  一般面包屑的最后一个是不会有跳转链接的
  el-breadcrumb 只接收属性，没有方法
-->
<template>
  <el-breadcrumb v-bind='$attrs'>
    <el-breadcrumb-item
      v-for="(i, index) in data"
      :key="i.id"
      :to="(index < data.length - 1) ? i.to : null"
      :replace="i.replace"
      >
        {{ i.label }}
      </el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script>
export default {
  name: 't-breadcrumb',
  components: {},
  /**
   * props 过滤 $attrs 中的某些属性、方法
   * 达到设置默认属性的目的
   */
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  }
}
</script>

<style lang="scss" scoped></style>

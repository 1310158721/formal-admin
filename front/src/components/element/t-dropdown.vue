<template>
  <el-dropdown v-bind='$attrs' @command="handleCommand">
    <span class="el-dropdown-link">
      <slot name='link'>
        默认配置<i class="el-icon-arrow-down el-icon--right" />
      </slot>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="i in dropdownItemEnum" :key="i.id" v-bind="i.attrs">
        {{ i.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 't-dropdown',
  props: {
    dropdownItemEnum: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleCommand (command) {
      try {
        this.dropdownItemEnum.filter((i) => i.attrs.command === command)[0].fnCallback(command)
      } catch (error) {
        console.error('dropdownItemEnum 配置数据格式不对')
      }
    }
  }
}
</script>

<!--
  对 form 表单做默认的配置，
  后期完善 VNode 来生成元素，暂时用 slot 来做
  ref='form' 要放在v-bind、v-on的后面才能生效（外部组件才能获取到）
-->
<template>
  <el-form
    :labelWidth="labelWidth"
    :inline='inline'
    :label-position='labelPosition'
    size='small'
    v-on='$listeners'
    v-bind='$attrs'
    ref='t-form'
  >
    <template v-for="i in data">
      <el-form-item :key="i.id" v-bind='i.formItem'>
        <template v-if='i.value !== undefined'>
          <span
            :is="i.is"
            v-model="i.value"
            v-bind="i.attrs"
            v-on="i.listeners"
          />
        </template>
        <template v-else>
          <span
            :is="i.is"
            v-bind="i.attrs"
            v-on="i.listeners"
          />
        </template>
      </el-form-item>
    </template>
    <slot />
  </el-form>
</template>

<script>
export default {
  name: 't-form',
  components: {},
  props: {
    labelWidth: {
      type: String,
      default: '96px'
    },
    inline: {
      type: Boolean,
      default: false
    },
    labelPosition: {
      type: String,
      default: 'left'
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    getRefs () {
      return this.$refs['t-form']
    }
  },
  created () {
    console.log(this.data)
  },
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>

<template>
  <el-form>
    <template v-for="i in formData">
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
  </el-form>
</template>

<script>
export default {
  name: 'my-form',
  components: {},
  props: {
    formData: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {}
  },
  computed: {},
  methods: {},
  created () {},
  mounted () {
    console.log(this.formData)
  },
  watch: {},
}
</script>

<style lang="scss" scoped></style>

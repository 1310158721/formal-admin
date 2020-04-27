<template>
  <div>
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
      >全选</el-checkbox
    >
    <t-checkbox v-model="checkedCities" :data="cities" />
  </div>
</template>

<script>
const cityOptions = [
  { label: '上海' },
  { label: '北京' },
  { label: '广州' },
  { label: '深圳' },
]
export default {
  name: 'componentName',
  components: {},
  props: {},
  data () {
    return {
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true
    }
  },
  computed: {},
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions.map((i) => i.label) : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length
    },
  },
  created () {},
  mounted () {},
  watch: {},
}
</script>

<style lang="scss" scoped></style>

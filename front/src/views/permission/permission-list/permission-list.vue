<template>
  <div class="permission-list-wrapper">
    <TTable :list="list" :pagination="pagination" @size-change='handleSizeChange' @current-change="handleCurrentChange">
    <el-table-column prop="account" label="账号" />
    <el-table-column prop="password" label="密码" />
    <el-table-column prop="token" label="token" />
    <el-table-column prop="hasPermission" label="已有权限" />
  </TTable>
  </div>
</template>

<script>
import TTable from '@/components/element/t-table'
import { getPermisionUsersList } from '@/apis/apis'
export default {
  name: 'permissionList',
  components: {
    TTable
  },
  props: {},
  data () {
    return {
      params: {
        page: 1,
        size: 20
      },
      list: null,
      pagination: null
    }
  },
  computed: {},
  methods: {
    getList () {
      getPermisionUsersList(this.params).then(res => {
        const { result, code, count } = res.data
        if (code === 0) {
          this.list = result
          this.pagination = {
            count,
            page: this.params.page,
            size: this.params.size
          }
        }
      })
    },
    handleSizeChange (val) {
      this.params.size = val
      this.getList()
    },
    handleCurrentChange (val) {
      this.params.page = val
      this.getList()
    }
  },
  created () {
    this.getList()
  },
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.permission-list-wrapper {
  width: 100%;
  height: 100%;
}
</style>

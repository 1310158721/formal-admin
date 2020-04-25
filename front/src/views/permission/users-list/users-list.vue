<template>
  <t-table
    class="permission-list-wrapper"
    :data="list"
    :pagination="pagination"
    :sizeChange="handleSizeChange"
    :currentChange="handleCurrentChange"
    :isLoading='isLoading'
    :openFilter='true'
  >
    <template #filter>
      <el-button type="primary" size="small" @click='addPermissionUser'>新增</el-button>
    </template>
    <template #table>
      <el-table-column
        align="center"
        prop="name"
        label="用户名"
        width="120px"
      />
      <el-table-column align="center" prop="account" label="账号" />
      <el-table-column align="center" prop="mobile" label="号码" />
      <el-table-column align="center" prop="desc" label="简述" />
      <el-table-column align="center" prop="roleDesc" label="级别" />
      <el-table-column align="center" label="操作" width="120px">
        <!-- <template slot-scope="scope"> -->
        <template>
          <el-button size="small" type="text">编辑</el-button>
          <el-button size="small" type="text">删除</el-button>
        </template>
      </el-table-column>
    </template>
  </t-table>
</template>

<script>
import { getPermisionUsersList } from '@/apis/apis'
export default {
  name: 'permissionList',
  components: {},
  props: {},
  data () {
    return {
      isLoading: false,
      params: {
        page: 1,
        size: 20,
      },
      list: null,
      pagination: null,
    }
  },
  computed: {},
  methods: {
    getList () {
      this.isLoading = true
      getPermisionUsersList(this.params).then((res) => {
        setTimeout(() => {
          const { result, code, total } = res.data
          if (code === 0) {
            this.isLoading = false
            this.list = result
            this.pagination = {
              total,
              page: this.params.page,
              size: this.params.size,
            }
          }
        }, 500)
      })
    },
    handleSizeChange (val) {
      this.params.size = val
      /**
       * 监听数据总条数（非初始化那次）除分页器 size 改变后的值大于等于当前分页器的 page 值
       * 即为监听分页器的 page 值是否变小了
       * 若变小了，则屏蔽掉当次的接口请求（因为触发了 page 的改变，也掉了一次接口），优化处理
       *
       * 该做法的前提是因为 ElementUI 的分页器在 size 改变时会触发 page 改变，且 size 改变优先于 page 改变
       * 此时的 this.params.page 仍未变化，this.params.size 在上面被重置了
       */
      if (
        this.pagination.total &&
        Math.ceil(this.pagination.total / val) >= this.params.page
      ) {
        this.getList()
      }
    },
    handleCurrentChange (val) {
      this.params.page = val
      this.getList()
    },
    addPermissionUser () {
      this.$router.push({
        path: '/permission-operation'
      })
    }
  },
  created () {
    this.getList()
  },
  mounted () {},
}
</script>

<style lang="scss" scoped>
.permission-list-wrapper {
  width: 100%;
  height: 100%;
  max-height: 100%;
}
</style>

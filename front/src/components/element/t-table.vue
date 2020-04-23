<template>
  <div class="t-table-wrapper" v-if='$attrs.list'>
    <span class="table-wrapper">
      <el-table height="100%" border v-bind='$attrs' v-on='$listeners' :data='$attrs.list'>
        <slot></slot>
      </el-table>
    </span>
    <span v-if='$attrs.pagination' class="pagination-wrapper">
      <el-pagination
        size='small'
        v-on='$listeners'
        :current-page="$attrs.pagination.page"
        :page-sizes="[20, 30, 50, 100]"
        :page-size="$attrs.pagination.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="$attrs.pagination.count"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: 't-table',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.t-table-wrapper {
  width: 100%;
  height: 100%;
  background-color: lightblue;
  box-sizing: border;
  // display: flex;
  // flex-direction: column;
  .table-wrapper {
    // flex: 1;
    height: calc(100% - 20px);
  }
  .pagination-wrapper {
    height: 32px;
    .el-pagination {
      float: right;
    }
  }
}
</style>

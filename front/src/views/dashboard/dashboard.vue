<template>
  <div class="dashboard-wrapper">
    <el-button type='primary' :loading='isLoading' @click='getData'>request</el-button>
    <el-button type='info' @click='cancel'>cancel</el-button>
    <div>{{ word }}</div>
    <div>
      在每一个模块开头添加备注
    </div>
  </div>
</template>

<script>
export default {
  name: 't-dashboard',
  components: {},
  props: {},
  data () {
    return {
      drawer: true,
      CancelToken: null,
      source: null,
      isLoading: false,
      word: ''
    }
  },
  computed: {},
  methods: {
    getData () {
      this.isLoading = true
      this.$axios.get('/demo', {
        cancelToken: this.source.token
      })
        .then((res) => {
          this.isLoading = false
          this.word = res.data.data
        })
        .catch((thrown) => {
          if (this.$axios.isCancel(thrown)) {
            console.log('Request canceled', thrown.message)
          } else {
          // handle error
          }
        })
    },
    cancel () {
      this.isLoading = false
      this.source.cancel('Operation canceled by the user.')
    },
    handleBeforeClose () {
      this.drawer = false
    },
    handleOpen () {
      console.log('open')
    },
    handleClose () {
      console.log('close')
    }
  },
  created () {
    this.CancelToken = this.$axios.CancelToken
    this.source = this.CancelToken.source()
  },
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.dashboard-wrapper {
  width: 100%;
  height: 2000px;
}
</style>

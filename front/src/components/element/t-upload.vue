<template>
  <el-upload
    class="t-upload-wrapper"
    :class="{
      'is-limit-one': limit === 1
    }"
    :multiple='limit === 1 ? false : multiple'
    :action="action"
    :list-type="listType"
    :limit='limit'
    :on-exceed='handleExceed'
    :before-upload='handleUpload'
    v-bind='$attrs'
    v-on='$listeners'
  >
    <i class="el-icon-plus"></i>
  </el-upload>
</template>

<script>
export default {
  name: 't-upload',
  components: {},
  props: {
    action: {
      type: String,
      default: '/tools/upload'
    },
    listType: {
      type: String,
      default: 'picture-card'
    },
    limit: {
      type: Number,
      default: 1,
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handleExceed () {
      this.$message.error(`图片上传数量不能超过${this.limit}张`)
    },
    handleUpload (file) {
      const limitSize = 1024 * 1000
      const limitType = [
        'image/png',
        'image/jpg',
        'image/jpeg',
        'image/gif'
      ]
      const { size, type } = file
      const isSizeOk = limitSize >= size
      const isTypeOk = limitType.includes(type)
      if (!isSizeOk) {
        this.$message.error(`文件大小不能大于${limitSize / 1024}kb`)
      }
      if (!isTypeOk) {
        this.$message.error('暂时只能上传 png、jpg、jpeg、gif 类型的图片')
      }
      return isSizeOk && isTypeOk
    }
  },
  created () {},
  mounted () {},
  watch: {},
}
</script>

<style lang="scss" scoped>
.t-upload-wrapper {
  &.is-limit-one {
    width: 148px;
    height: 148px;
    overflow: hidden;
  }
}
</style>

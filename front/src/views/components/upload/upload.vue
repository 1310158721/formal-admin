<template>
  <t-upload
    :limit='3'
    :fileList='fileList'
    :on-success='handleSuccess'
    action='/api/upload'
    :data="{
      directory: 'demo/img'
    }"
  />
</template>

<script>
export default {
  name: 'componentName',
  components: {},
  props: {},
  data () {
    return {
      // fileList: [
      //   {
      //     name: 'xxx',
      //     url: 'http://tang-tools.oss-cn-beijing.aliyuncs.com/undefined/3e91cb9a52d509f90f820cd16c93b139.png'
      //   },
      //   {
      //     name: 'yyy',
      //     url: 'http://tang-tools.oss-cn-beijing.aliyuncs.com/undefined/3e91cb9a52d509f90f820cd16c93b139.png'
      //   }
      // ]
      fileList: []
    }
  },
  computed: {},
  methods: {
    handleSuccess (res, file, fileList) {
      this.fileList = fileList
    }
  },
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>

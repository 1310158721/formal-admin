<template>
  <t-form
    class="t-form-wrapper"
    :data='data'
    ref='t-form'
  >
    <el-button size='small' type='primary' @click='handleClick'>
      确定
    </el-button>
  </t-form>
</template>

<script>
export default {
  name: 'componentName',
  components: {},
  props: {},
  data () {
    return {
      data: [
        {
          is: 't-input',
          value: null,
          rule: '',
          formItem: {
            label: '账号',
            class: 't-input-account',
            required: true,
            rules: { required: true, message: '请输入活动名称', trigger: 'blur' }
          },
          attrs: {
            type: 'text'
          },
          listeners: {}
        },
        {
          is: 't-input',
          value: null,
          rule: '',
          formItem: {
            label: '密码',
            class: 't-input-password',
            required: true,
            rules: { required: true, message: '请输入活动名称', trigger: 'blur' }
          },
          attrs: {
            type: 'password'
          },
          listeners: {}
        },
        {
          is: 't-input-number',
          formItem: {
            label: '人数',
            class: 'person-count',
            required: true,
            rules: { required: true, message: '请输入活动名称', trigger: 'blur' }
          },
          value: null,
          rule: '',
          attrs: {},
          listeners: {}
        },
        {
          is: 't-radio',
          formItem: {
            label: '性别',
            class: 't-radio',
            required: true,
            rules: { required: true, message: '请输入活动名称', trigger: 'blur' }
          },
          value: 'man',
          rule: '',
          attrs: {
            data: [
              { label: 'man', title: '男' },
              { label: 'womon', title: '女' }
            ]
          },
          listeners: {}
        },
        {
          is: 't-select',
          formItem: {
            label: '个数',
            class: 't-select',
            required: true,
            rules: { required: true, message: '请输入活动名称', trigger: 'blur' }
          },
          value: null,
          rule: '',
          attrs: {
            data: [
              { value: '1', label: 'one' },
              { value: '2', label: 'two' },
              { value: '3', label: 'three' }
            ]
          },
          listeners: {}
        },
        {
          is: 't-rate',
          formItem: {
            label: 't-rate',
            class: 't-rate-wrapper',
            required: true,
            rules: { required: true, message: '请输入活动名称', trigger: 'blur' }
          },
          value: null,
          rule: '',
          attrs: {},
          listeners: { }
        },
        {
          is: 't-upload',
          formItem: {
            label: 't-upload',
            class: 't-upload',
            required: true,
            rules: { required: true, message: '请输入活动名称', trigger: 'blur' }
          },
          value: null,
          rule: '',
          attrs: {},
          listeners: {}
        }
      ]
    }
  },
  computed: {},
  methods: {
    handleClick () {
      this.$refs['t-form'].getRefs().validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
    }
  },
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.t-form-wrapper {
  width: 60%;
  padding: 30px;
  box-sizing: border-box;
  border: 2px black solid;
  margin: 0 auto;
}
</style>

<template>
  <my-form
    :formData='formData'
  />
</template>

<script>
export default {
  name: 'componentName',
  components: {},
  props: {},
  data () {
    return {
      formData: [
        {
          is: 't-input',
          value: null,
          rule: '',
          formItem: {
            label: 't-input',
            class: 't-input'
          },
          attrs: {},
          listeners: {
            change: this.handleInputChange
          }
        },
        {
          is: 't-input-number',
          formItem: {
            label: 't-input-number',
            class: 't-input-number'
          },
          value: null,
          rule: '',
          attrs: {},
          listeners: {
            change: this.handleInputNumberChange
          }
        },
        {
          is: 't-radio',
          formItem: {
            label: 't-radio',
            class: 't-radio'
          },
          value: 'man',
          rule: '',
          attrs: {
            data: [
              { label: 'man', title: '男' },
              { label: 'womon', title: '女' }
            ]
          },
          listeners: {
            change: this.handleInputNumberChange
          }
        },
        {
          is: 't-select',
          formItem: {
            label: 't-select',
            class: 't-select'
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
          listeners: {
            change: this.handleInputChange
          }
        },
        {
          is: 't-rate',
          formItem: {
            label: 't-rate',
            class: 't-rate'
          },
          value: null,
          rule: '',
          attrs: {},
          listeners: {
            change: this.handleInputChange
          }
        },
        {
          is: 't-upload',
          formItem: {
            label: 't-upload',
            class: 't-upload'
          },
          value: null,
          rule: '',
          attrs: {},
          listeners: {
            change: this.handleInputChange
          }
        }
      ]
    }
  },
  computed: {},
  methods: {
    handleInputChange () {
      console.log(this.formData)
    },
    handleInputNumberChange (val) {
      console.log(val)
    }
  },
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>

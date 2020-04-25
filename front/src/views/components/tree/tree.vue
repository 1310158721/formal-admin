<template>
  <t-tree
    :data="data"
    ref="tree"
    :default-checked-keys="[1, 4, 9]"
    @check="checkChange"
  />
</template>

<script>
export default {
  name: 'test',
  components: {},
  props: {},
  data () {
    return {
      data: [
        {
          id: 1,
          label: '一级 1',
          disabled: true,
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                },
                {
                  id: 10,
                  label: '三级 1-1-2',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1',
            },
            {
              id: 6,
              label: '二级 2-2',
            },
          ],
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1',
            },
            {
              id: 8,
              label: '二级 3-2',
            },
          ],
        },
      ],
    }
  },
  computed: {},
  methods: {
    checkChange (data, options) {
      const currentClickKey = data.id
      const currentCheckKeys = options.checkedKeys
      const isCheck = currentCheckKeys.includes(currentClickKey)

      const childKeyArray = []
      this.getAllChildKeys([data], childKeyArray)
      const hasCheckKeys = this.$refs.tree.$children[0].getCheckedKeys()

      let hasCheckKeysAfterSet = null
      if (isCheck) {
        const { parent } = this.$refs.tree.$children[0].getNode(
          currentClickKey
        )
        const parentKeysArray = []
        this.getAllParentKeys(parent, parentKeysArray)
        hasCheckKeysAfterSet = [
          ...new Set([...childKeyArray, ...hasCheckKeys, ...parentKeysArray]),
        ]
      } else {
        hasCheckKeysAfterSet = hasCheckKeys.filter(
          (i) => !childKeyArray.includes(i)
        )
      }
      this.$refs.tree.$children[0].setCheckedKeys(hasCheckKeysAfterSet)
    },
    getAllChildKeys (parent, childKeyArray = []) {
      parent.map((i) => {
        childKeyArray.push(i.id)
        if (i.children) {
          this.getAllChildKeys(i.children, childKeyArray)
        }
      })
    },
    getAllParentKeys (parent, parentKeysArray = []) {
      if (!Array.isArray(parent.data)) {
        parentKeysArray.push(parent.data.id)
      }
      if (parent.parent) {
        this.getAllParentKeys(parent.parent, parentKeysArray)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>

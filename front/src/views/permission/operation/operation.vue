<template>
  <t-form
    class="permission-peration-wrapper"
    :model="model"
    :rules="rules"
    ref="permission-operation-form"
  >
    <div class="operation-wrapper">
      <div class="left flex">
        <el-form-item label="账号" prop="account">
          <el-input v-model="model.account" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="model.password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="model.name" placeholder="请输入名称" />
        </el-form-item>
        <el-form-item label="号码" prop="mobile">
          <el-input v-model="model.mobile" placeholder="请输入号码" />
        </el-form-item>
        <el-form-item label="头像" prop="avatar">
          <t-upload />
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <t-select
            ref="routesSelect"
            :data="optionEnum"
            @change="handleChange"
            v-model="model.role"
          />
        </el-form-item>
        <el-form-item label="简述" prop="desc">
          <el-input
            type="textarea"
            :autosize="{
              minRows: 4,
              maxRows: 6,
            }"
            placeholder="请输入简述"
            v-model="model.desc"
          >
          </el-input>
        </el-form-item>
      </div>
      <div class="right flex">
        <el-form-item label="权限" prop="permissions">
          <t-tree
            v-if="treeData"
            :data="treeData"
            ref="tree"
            :default-checked-keys="model.permissions"
            :defaultProps="defaultProps"
            nodeKey="permission"
            @check="checkChange"
          />
        </el-form-item>
      </div>
    </div>
    <div class="button-wrapper"></div>
  </t-form>
</template>

<script>
import { checkAllMenuList } from '@/apis/apis/'
export default {
  name: 'permissionOperation',
  components: {},
  props: {},
  data () {
    return {
      haPermission: [],
      treeData: null,
      model: {
        account: '',
        password: '',
        name: '',
        mobile: '',
        avatar: '',
        role: '',
        desc: '',
        permissions: [],
      },
      rules: {},
      defaultProps: {
        children: 'children',
        label: 'title',
      },
    }
  },
  computed: {
    optionEnum () {
      return [
        {
          label: '超级管理员',
          value: 'superadmin',
        },
        {
          label: '管理员',
          value: 'admin',
        },
        {
          label: '普通用户',
          value: 'common',
        },
      ]
    },
  },
  methods: {
    checkChange (data, options) {
      const currentClickKey = data.permission
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
        childKeyArray.push(i.permission)
        if (i.children) {
          this.getAllChildKeys(i.children, childKeyArray)
        }
      })
    },
    getAllParentKeys (parent, parentKeysArray = []) {
      if (!Array.isArray(parent.data)) {
        parentKeysArray.push(parent.data.permission)
      }
      if (parent.parent) {
        this.getAllParentKeys(parent.parent, parentKeysArray)
      }
    },
    formatButtons (treeData) {
      treeData.map((i) => {
        if (i.children && i.children.length) {
          this.formatButtons(i.children)
        } else {
          i.children = i.buttons
          return i
        }
      })
      return treeData
    },
    handleChange () {
      console.log(this.model)
    },
  },
  created () {
    this.model.permissions = this.$store.state.userInfo.hasPermission.split(
      ','
    )
    checkAllMenuList().then((res) => {
      const { code, result } = res.data
      if (code === 0) {
        this.treeData = this.formatButtons(result)
      }
    })
  },
  mounted () {},
  watch: {},
}
</script>

<style lang="scss" scoped>
.permission-peration-wrapper {
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .operation-wrapper {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: auto;
    & > .flex {
      flex: 1;
      overflow: auto;
    }
  }
  .button-wrapper {
    height: 52px;
    background-color: black;
  }
}
</style>

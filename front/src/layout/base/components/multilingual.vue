<template>
  <div class="multilingual-wrapper">
    <TDrowdown trigger='click' v-if='dropdownItemEnum.length' :dropdownItemEnum='dropdownItemEnum'>
      <template #link>
        <i class="link iconfont icon-duoyuyan" />
      </template>
    </TDrowdown>
  </div>
</template>

<script>
import TDrowdown from '@/components/element/t-dropdown'
export default {
  name: 't-multilingual',
  components: {
    TDrowdown
  },
  computed: {
    dropdownItemEnum () {
      return [
        {
          label: '中文',
          attrs: {
            command: 'zh',
            disabled: this.$i18n.locale === 'zh'
          },
          fnCallback: (command) => {
            localStorage.setItem('locale', command)
            this.$i18n.locale = command
            this.$message.success('切换语言成功')
          }
        },
        {
          label: 'English',
          attrs: {
            command: 'en',
            disabled: this.$i18n.locale === 'en'
          },
          fnCallback: (command) => {
            localStorage.setItem('locale', command)
            this.$i18n.locale = command
            this.$message.success('Switch Language Success')
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.multilingual-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  .link {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 50px;
    text-align:center;
    cursor: pointer;
    font-size: 50px;
  }
}
</style>

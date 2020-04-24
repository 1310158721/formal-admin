/**
 * 全局注册组件
 */
import Vue from 'vue'
import TDrawer from './t-drawer'
import TDropwodn from './t-dropdown'
import TForm from './t-form'
import TSelect from './t-select'
import TTable from './t-table'
import TDialog from './t-dialog'

Vue.component(TDrawer.name, TDrawer)
Vue.component(TDropwodn.name, TDropwodn)
Vue.component(TForm.name, TForm)
Vue.component(TSelect.name, TSelect)
Vue.component(TTable.name, TTable)
Vue.component(TDialog.name, TDialog)

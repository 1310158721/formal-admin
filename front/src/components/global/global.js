/**
 * 全局注册组件
 */
import Vue from 'vue'
import baseLayoutDrawer from './base-layout-drawer'
import mask from './mask'
import mavonEditor from './mavon-editor'

Vue.component(baseLayoutDrawer.name, baseLayoutDrawer)
Vue.component(mask.name, mask)
Vue.component(mavonEditor.name, mavonEditor)

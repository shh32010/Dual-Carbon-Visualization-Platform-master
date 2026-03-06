import { createApp } from 'vue'
// import Vuex from 'vuex';

import Cookies from 'js-cookie'

import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文语言

import '@/assets/css/public.scss'
import "@/assets/css/index.scss"

import App from './App'
import store from './store'
import router from './router'

import Echart from './components/echart/index.vue'
import ItemWrap from './components/item-wrap/item-wrap.vue'
import Message from './components/message/message.vue'
import Reacquire from './components/reacquire/reacquire.vue'
import DataVVue3 from '@kjgl77/datav-vue3'

// svg图标
import 'virtual:svg-icons-register'

import { parseTime, resetForm, addDateRange, handleTree, selectDictLabel, selectDictLabels } from '@/utils/ruoyi'


const app = createApp(App)
app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.resetForm = resetForm
app.config.globalProperties.handleTree = handleTree
app.config.globalProperties.addDateRange = addDateRange
app.config.globalProperties.selectDictLabel = selectDictLabel
app.config.globalProperties.selectDictLabels = selectDictLabels
app.use(DataVVue3)
// 全局组件挂载
app.component("Echart", Echart)
app.component("ItemWrap", ItemWrap)
app.component("Message", Message)
app.component("Reacquire", Reacquire)

app.use(router)
app.use(store)



// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: locale,
  // 支持 large、default、small
  size: Cookies.get('size') || 'default'
})

app.mount('#app')

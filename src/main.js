import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from '@/app'
import router from '@/router'
import Api from '@/api'

Vue.config.productionTip = false

Api.statistics()
  .then(({data}) => {
    Vue.prototype.$appStatistics = data

    const payload = {
      router,
      render: h => h(App),
    }

    new Vue(payload).$mount('#app')
  })

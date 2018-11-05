 import applyMixin from './mixin'
 let Vue
 class Store {
  constructor (options = {}){
     const state = options.state || {}
     this._vm = new Vue({
      data: {
        $$state: state
      }
    })
  }
 get  state(){
 	return this._vm._data.$$state
 }
}
 
 function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[mex] already installed. Vue.use(mex) should be called only once.'
      )
    }
    return
  }
  Vue = _Vue
  applyMixin(Vue)
}
 
export default {
  install,
  Store
}
	


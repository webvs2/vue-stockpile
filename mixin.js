export default function(Vue) {
	Vue.mixin({
		beforeCreate: mexInit
	})

	function mexInit() {
		const options = this.$options;
		if(options.store) {
			this.$store = typeof options.store === 'function' ? options.store() : options.store
		} else if(options.parent && options.parent.$store) {
			this.$store = options.parent.$store
		}
	}
	}
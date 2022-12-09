!function(context) {
	const patch = obj => {
		obj.defineProperty(obj, "module", {
			value: function () {
				this.exports = function(mName, exports) {
					_cachedModules.push({mName : exports})
				}
			}
		})
	}
}(this)

for (name in instance ) {
	var method = instance[name];
	if (typeof method == "function") {
		instance[name] = function(name,method) {
			return function() {
				try {
					return method.apply(this,arguments);
				} catch(ex) {
					console.log(ex.message);
				}
			}(name, method);
		}
	}
}
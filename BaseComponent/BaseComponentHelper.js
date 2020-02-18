({
	callServer : function(component, method, callback, params, storable) {
		var action = component.get(method);
		if (params) {
			action.setParams(params);
		}
		if (storable) {
			action.setStorable();
		}else {
			action.setStorable({
				"ignoreExisting" : "true"
			});
		}
		action.setCallback(this, function(response){
			var state = response.getState();
			try {
				if (state === "SUCCESS") {
					// pass returned value to callback function
					callback.call(this, response.getReturnValue());
				}else if (state === "ERROR") {
					// generic error handler
					var errors = response.getError();
					if (errors) {
						console.log("Errors", errors);
						throw new Error(errors);
					}else {
						consoloe.log(response);
						throw new Error("Unknown Error");
					}
				}
			} catch (ex) {
				console.error(ex);
				callback.call(this, response.getReturnValue());
			}
		});
		$A.enqueueAction(action);
	},
})
({
	doInit : function(component, event, helper) {
		let userEmail = component.get('v.userEmail');
        let returnedValue = null;
        let userName = null;
        helper.callServer(component, "c.getUserName", 
        function(response) {
			let user = response[0];
            userName = user.Name;
            let userDataEvent = component.getEvent("userDataEvent");
        	userDataEvent.setParams({
            "userName" : userName
        });
        userDataEvent.fire();
		}, {
            "email": userEmail
        });
    }
})
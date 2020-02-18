({
	handleUserDataEvent : function(component, event, helper) {
        component.set("v.userName", event.getParam("userName"));
	},
    
    handleCaseDataEvent : function(component, event, helper) {
        component.set("v.caseSubject", event.getParam("caseSubject"));
	},
    
     handleAccountDataEvent : function(component, event, helper) {
        component.set("v.accountName", event.getParam("accountName"));
	}
})
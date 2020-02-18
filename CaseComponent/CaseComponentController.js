({
	doInit : function(component, event, helper) {
		let caseId = component.get('v.caseId');
        let returnedValue = null;
        let caseSubject = null;
        helper.callServer(component, "c.retrieveCaseByID", 
        function(response) {
			let returnedCase = response[0];
            caseSubject = returnedCase.Subject;
            let caseDataEvent = component.getEvent("caseDataEvent");
        	caseDataEvent.setParams({
            "caseSubject" : caseSubject
        });
        caseDataEvent.fire();
		}, {
            "caseId": caseId
       })
    }
})
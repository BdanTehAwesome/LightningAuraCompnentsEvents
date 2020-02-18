({	
    doInit : function(component, event, helper) {
		const accountId = component.get('v.accountId');
        let returnedValue = null;
        let accountName = null;
        helper.callServer(component, "c.retrieveAccountsById", 
        function(response) {
			const returnedAccounts = response[0];
            accountName = returnedAccounts.Name;
            let accountDataEvent = component.getEvent("accountDataEvent");
        	accountDataEvent.setParams({
            "accountName" : accountName
        });
        accountDataEvent.fire();
		}, {
            "accountId": accountId
       })
    }
})
public class AccountDataController {

    @AuraEnabled(cacheable = true)
    public static List<Account> retrieveAccountsById(Id accountId) {
        return [Select Id,Name from Account where id =:accountId];
    }
}
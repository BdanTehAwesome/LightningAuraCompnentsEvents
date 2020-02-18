public class UserDataController {
    
    
    @AuraEnabled(cacheable=true)
    public static List<User> getUserName(String email) {
        return [Select id, Name from User where email =:email];
    }

}
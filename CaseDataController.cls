public class CaseDataController {

    @AuraEnabled(cacheable=true)
    public static List<Case> retrieveCaseByID(ID caseId) {
        return [Select id, subject from Case where id =:caseId];
    }
}
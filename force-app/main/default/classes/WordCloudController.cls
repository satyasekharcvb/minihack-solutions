public with sharing class WordCloudController {
    @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts(){
       return [SELECT Id, Name from Account WITH SECURITY_ENFORCED order by LastViewedDate desc limit 20];
   }

}
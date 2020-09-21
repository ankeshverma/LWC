public without sharing class AccountController {
    
    @AuraEnabled(cacheable = true)
    public static list<Account> getAccountList(){
        return [select Id,Name FROM Account LIMIT 10];
    }

    @AuraEnabled(cacheable = true)
    public static list<Contact> getRelatedContact(String accountId){
        system.debug('rel conttss'+accountId);
        return [select Id,Name FROM Contact where AccountId =: accountId];
    }

    @AuraEnabled(cacheable = true)
    public static list<Account> getAccountTypes(){
        return [select Id,Name, Type FROM Account];
    }

    @AuraEnabled
    public static void updateAccountTypes(){
       
        List<Account> accountList = new List<Account>();
        for(Account accUpdate : [SELECT Id, Name, Type FROM Account WHERE Type = null]){
            accUpdate.Type = 'Customer - Direct';
            accountList.add(accUpdate);
        }
        update accountList;
    }

    @AuraEnabled
    public static void mergeRequestTest1(){
        List<Opportunity> oppList = [select Id,Account.Name,stageName,Type from Opportunity];
    }



}

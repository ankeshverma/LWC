import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class Demo23CreateRecord extends LightningElement {
    accountObject  = ACCOUNT_OBJECT;
    myFields = [ NAME_FIELD, WEBSITE_FIELD ];
    websiteField = WEBSITE_FIELD;
    accountId;

    handleAccountCreated(event){
        console.log('account created'+event.detail.Id);
    }
}
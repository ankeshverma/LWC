import { LightningElement,api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';


export default class DemoEditRecords extends LightningElement {
    @api recordId;
    @api objectApiName = ACCOUNT_OBJECT;

    fields = [NAME_FIELD, REVENUE_FIELD, PHONE_FIELD,  WEBSITE_FIELD];
}
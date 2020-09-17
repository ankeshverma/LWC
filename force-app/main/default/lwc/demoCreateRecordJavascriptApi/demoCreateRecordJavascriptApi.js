import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';


export default class DemoCreateRecordJavascriptApi extends LightningElement {
    accountId;
    name = '';

    handleNameChange(event){
        this.accountId = undefined;
        this.name = event.target.value;
    }

    createAccount(){
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;

        const recordInput = {apiName : ACCOUNT_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(account => {
                this.accountId = account.id;
                console.log('acntId'+this.accountId);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account Created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error Creating Record',
                        message: 'erroroccured',
                        variant: 'error',
                    }),
                );
            });
    }
}
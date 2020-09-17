import { LightningElement,wire } from 'lwc';
import getAccountTypes from '@salesforce/apex/AccountController.getAccountTypes';
import updateAccountTypes from '@salesforce/apex/AccountController.updateAccountTypes';
import { refreshApex } from '@salesforce/apex';

export default class Demo26RefreshApex extends LightningElement {

    @wire(getAccountTypes) getAccountTypes;

    handleClick(event){
        updateAccountTypes()
        .then(() => {
            return refreshApex(this.getAccountTypes);
        }).catch((error) => {

        });
    }
}
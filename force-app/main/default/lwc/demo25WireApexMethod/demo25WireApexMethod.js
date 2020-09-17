import { LightningElement,wire,track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import getRelatedContact from '@salesforce/apex/AccountController.getRelatedContact';


export default class Demo25WireApexMethod extends LightningElement {
    value = 'None';
    @track options=[];
    @track allContacts;

    @wire(getAccountList)
    wiredAccounts({ error, data }) {
        if(data){
            const temp = { label: 'None', value: 'None'};
            this.options = [ ...this.options, temp ];
            for(var item of data){
                var acc = {label: item.Name , value: item.Id };
                this.options = [ ...this.options, acc ];
            }
        }
        if(error){

        }
    }

    handleChange(event){
        this.value = event.detail.value;
        console.log('valls'+this.value);
    }

    @wire(getRelatedContact, {accountId : '$value'} ) allContacts;
    
}
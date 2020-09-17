import { LightningElement, api, wire,track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import getRelatedContact from '@salesforce/apex/AccountController.getRelatedContact';

export default class Demo26wireMethodImperatively extends LightningElement {
    value = 'None';
    @track options=[];
    @track allContacts;

    handleChange(event){
        this.value = event.detail.value;
        console.log('val in change'+this.value);
        getRelatedContact({accountId : this.value})
        .then(data => {
            console.log('then');
            console.log('dta in thens'+data);
            this.allContacts = data;
            
            console.log('cntss'+JSON.stringify(this.allContacts));
        })
        .catch( error => {
            console.log('error');
        });
        
    }

    renderedCallback(){
        if(this.options.length == 0){
            getAccountList()
            .then( data => {
                if(data){
                    const temp = {label : 'None', value: 'None'};
                    this.options = [ ...this.options, temp ];
                    for(var item of data){
                        var acc = { label: item.Name, value: item.Id };
                        this.options = [ ...this.options, acc ];
                    }
                }
            })
            .catch(error => {

            });
        }
    }
}
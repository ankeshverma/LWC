import { LightningElement,track } from 'lwc';

export default class DataBindingDemo extends LightningElement {
    firstName = '';
    lastName = '';
    @track fullName = {firstName : '',lastName: ''};

    handleFullNameChange(event){
        const field = event.target.name;
        if(field === 'firstName'){
            this.firstName = event.target.value;
        }
        else if(field === 'lastName'){
            this.lastName = event.target.value;
        }
        this.fullName.firstName = this.firstName;
        this.fullName.lastName = this.lastName;
    }
}
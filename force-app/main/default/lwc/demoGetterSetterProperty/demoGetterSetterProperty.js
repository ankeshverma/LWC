import { LightningElement, api } from 'lwc';

export default class DemoGetterSetterProperty extends LightningElement {
    firstName = '';
    lastName = '';
    fullName = '';

    handleNameChange(event){
        const field = event.target.name;
    if(field === 'firstName'){
        this.firstName = event.target.value;
    }
    //console.log('firstname',this.firstName);

    else if(field === 'lastName'){
        this.lastName = event.target.value;
    }
    console.log('lastname',this.lastName);
    this.fullName  = this.firstName + ' ' +this.lastName;
    }

    @api
    get Uppercasename(){
        return this.fullName.toUpperCase();
    }

    set Uppercasename(value){
        this.fullName = value;
    }
    
}
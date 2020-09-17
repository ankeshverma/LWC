import { LightningElement,track } from 'lwc';

export default class RenderOnClick extends LightningElement {
    firstName = '';
    lastName = '';
    @track fullName = {firstName : '',lastName: ''};

    handleButtonClick(event){

        var inputValue = this.template.querySelectorAll("lightning-input");
        inputValue.forEach(function(element){
            
            if(element.name == "firstName"){
                this.firstName = element.value;
            }else if(element.name == "lastName")
            this.lastName = element.value;
        },this);
        this.fullName.firstName = this.firstName;
        this.fullName.lastName = this.lastName;
    }
}
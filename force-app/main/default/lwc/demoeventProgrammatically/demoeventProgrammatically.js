import { LightningElement } from 'lwc';

export default class DemoeventProgrammatically extends LightningElement {
    selectedContact;
    contacts = [{
        Id: '01009338345',
        Name: 'Ankesh Verma',
        Title: 'Lead Developer'
    },
    {
        Id: '01009109452',
        Name: 'Ankita Verma',
        Title: 'Intelligent Girl',
    },
    {
        Id: '01009290561',
        Name: 'Pulkit Verma',
        Title: 'freelancer',
    }];

    contactSelected(event){
        const contactId = event.detail;
        console.log('evntDetail',contactId);
        this.selectedContact =this.contacts.find(contact => contact.Id === contactId);
    }
    constructor(){
        super();
        this.template.addEventListener('selected',this.contactSelected.bind(this));
    }
}
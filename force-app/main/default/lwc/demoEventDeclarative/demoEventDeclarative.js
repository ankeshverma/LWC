import { LightningElement } from 'lwc';

export default class DemoEventDeclarative extends LightningElement {
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
        console.log('contactId',contactId);
        this.selectedContact = this.contacts.find(contact => contact.Id === contactId);
    }

}
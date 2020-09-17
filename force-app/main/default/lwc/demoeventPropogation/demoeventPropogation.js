import { LightningElement } from 'lwc';

export default class DemoeventPropogation extends LightningElement {
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
        const tempContact = event.target.contactdetails;
        console.log('tempContact',JSON.stringify(tempContact));
        this.selectedContact = this.contacts.find(contact => contact.Id === tempContact.Id);
    }
}
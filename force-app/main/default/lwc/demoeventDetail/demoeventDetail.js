import { LightningElement,api } from 'lwc';

export default class DemoeventDetail extends LightningElement {
    @api contactdetails;

    selectHandler(event){
        console.log('clcikeed');
        const selectedEvent = new CustomEvent('selected', { detail : this.contactdetails.Id});
        console.log('clicked val IN DECLARATIVE',JSON.stringify(selectedEvent));
        this.dispatchEvent(selectedEvent);
    }
}
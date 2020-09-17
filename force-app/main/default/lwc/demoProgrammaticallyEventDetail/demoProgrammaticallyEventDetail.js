import { LightningElement,api } from 'lwc';

export default class DemoProgrammaticallyEventDetail extends LightningElement {
    @api contactdetails;

    selectHandler(event){
        console.log('clcikeed');
        const selectedEvent = new CustomEvent('selected', { detail : this.contactdetails.Id , bubbles:true });
        console.log('clicked val',JSON.stringify(selectedEvent));
        this.dispatchEvent(selectedEvent);
    }
}
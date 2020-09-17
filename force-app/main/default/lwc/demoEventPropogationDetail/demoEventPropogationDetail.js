import { LightningElement, api } from 'lwc';

export default class DemoEventPropogationDetail extends LightningElement {
    @api contactdetails;

    selectHandler(event){
        console.log('clcikeed');
        const selectedEvent = new CustomEvent('selected', {bubbles:true });
        console.log('clicked val in programatically without constructor',JSON.stringify(selectedEvent));
        this.dispatchEvent(selectedEvent);
    }
}
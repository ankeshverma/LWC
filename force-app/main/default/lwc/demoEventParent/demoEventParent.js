import { LightningElement } from 'lwc';

export default class DemoEventParent extends LightningElement {

    //child to parent call by declaratively
    handleEventFromParent(event){
        console.log('event called',event.detail.name);
    }

    handleParent(){
        console.log('in parent');
        this.template.querySelector('c-demo-event-child').handleChild();
    }
}
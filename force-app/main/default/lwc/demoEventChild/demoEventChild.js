import { LightningElement, api } from 'lwc';

export default class DemoEventChild extends LightningElement {
    @api name;
    @api title;

    handleOnClick(event){
        console.log('in child');
       const simpleevent = new CustomEvent('simpleevent',
       {detail : {name : this.name , title : this.title}
    });
       this.dispatchEvent(simpleevent);
    }

    @api
    handleChild(){
        console.log('child method called');
    }
}
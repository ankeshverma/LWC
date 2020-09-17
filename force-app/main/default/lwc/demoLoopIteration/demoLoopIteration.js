import { LightningElement } from 'lwc';
//import cstomLbl from '@salesforce/label/c.customLabelName';
export default class DemoLoopIteration extends LightningElement {
    contacts = [{
        id: '01009338345',
        name: 'Ankesh Verma',
        title: 'Lead Developer'
    },
    {
        id: '01009109452',
        name: 'Ankita Verma',
        title: 'Intelligent Girl',
    },
    {
        id: '01009290561',
        name: 'Pulkit Verma',
        title: 'freelancer',
    }];
}
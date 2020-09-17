import { LightningElement } from 'lwc';
import lwcStaticResrc from '@salesforce/resourceUrl/LWCResource';
import lwcStyleResource from '@salesforce/resourceUrl/lwcNewResource';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
export default class DemoStaticResource extends LightningElement {
    lwcimageUrl = lwcStaticResrc;

    connectedCallBack(){
        promise.all([
            loadStyle(this,lwcStyleResource + '/lwcStyle/css/styleSheet.css'),
            loadScript(this, lwcStyleResource + '/lwcStyle/js/demo')
        ]).then(() => {

        }).catch(error => {

        });
    }
}
// wireGetRecordDynamicContact.js
import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Account.Name',
    'Account.BillingCity',
    'Account.BillingStreet',
    
];

export default class Test1 extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    myAccount;

    get accountname() {
        return this.myAccount.data.fields.Name.value;
    }

    get billingcity() {
        if(this.myAccount.data){
          return this.myAccount.data.fields.BillingCity.value;
        }
        else
        {
            return 'None Specified';
        }
    } 

    get billingstreet() {
      return this.myAccount ? this.myAccount.data.fields.BillingStreet.value : 'None Specified';
    }

    
}
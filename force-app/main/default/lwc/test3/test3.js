import { LightningElement,api } from 'lwc';

export default class Test3 extends LightningElement {
  @api flexipageRegionWidth;
   changeStyle= false;
   class1= "slds-col slds-size_6-of-12";
   class2 = "slds-col slds-size_1-of-1";
  
  get className(){
    return this.changeStyle ?  this.class2 : this.class1;
  }
  
  handleChange(event){
    this.changeStyle = event.target.checked;
  }
  
}
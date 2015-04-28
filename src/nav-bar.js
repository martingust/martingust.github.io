import {bindable} from 'aurelia-framework';

export class NavBar {
  @bindable router = null;
  @bindable selectableValue = null;
  activate(){

  }
  attached(){
    alert(this.selectableValue);
  }
}

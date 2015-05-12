import {computedFrom, bindable, inject, customAttribute} from 'aurelia-framework';

export class Welcome{
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'John';
  lastName = 'Doe';
  names = ['Martin', 'Matilde', 'Alma', 'Ronny', 'Inga-Britt', 'Mats', 'Maria'];
  hasFocus = true;

  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  activate(){
    this.hasFocus = true;
  }

  welcome(){
      this.names.push('Tessan');
      //this.names.splice(0, 1);
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}



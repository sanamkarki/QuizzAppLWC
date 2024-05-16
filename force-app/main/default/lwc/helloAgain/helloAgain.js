import { LightningElement, track } from "lwc";

export default class HelloAgain extends LightningElement {
  fullName = "sanam";
  feelings = "fine";
  keyUpFunction(event) {
    this.fullName = event.target.value;
  }

  personalInfo = {
    name: "sanam",
    age: "28"
  };
  trackDecorator(event) {
    this.personalInfo = { ...this.personalInfo, name: event.target.value };
  }
  users = ["sanam", "suyogya"];
  get getterMethod() {
    return this.users[1];
  }
}

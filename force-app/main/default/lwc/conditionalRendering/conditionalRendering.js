import { LightningElement } from "lwc";

export default class ConditionalRendering extends LightningElement {
  isVisible = false;
  name;
  rendering() {
    this.isVisible = true;
  }
  renderingMethod(event) {
    this.name = event.target.value;
  }
  get getterRendering() {
    return this.name === "hello";
  }
  objectLooping = ["sanam", "suyogya", "inaya"];
  arrayObj = [
    {
      id: 1,
      Name: "sanam"
    },
    {
      id: 1,
      Name: "suyogya"
    }
  ];
}

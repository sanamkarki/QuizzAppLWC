import { LightningElement, track } from "lwc";
export default class QuizzA extends LightningElement {
  @track
  listOfQuestions = [
    {
      Id: 1,
      Question: "When was Salesforce Established?",
      AnswerChoices: { a: "1998", b: "1997", c: "1999" },
      RightAns: "c"
    },
    {
      Id: 2,
      Question: "What is not one of the clouds in Salesforce?",
      AnswerChoices: {
        a: "Sales Cloud",
        b: "Service Cloud",
        c: "May Cloud"
      },
      RightAns: "c"
    },
    {
      Id: 3,
      Question: "What is Salesfore family of Professionals Called?",
      AnswerChoices: {
        a: "Ohana",
        b: "Mahalo",
        c: "Mahana"
      },
      // { label: "Ohana", value: "Ohana" },
      // { label: "Mahalo", value: "Mahalo" },
      // { label: "Mahana", value: "Mahana" }
      RightAns: "a"
    }
  ];
  @track displayFinalScore = false;
  allSelectedValue = {};
  finalValueCalc;
  valueChosen(event) {
    const { name, value } = event.target;
    this.allSelectedValue = { ...this.allSelectedValue, [name]: value };
    console.log(this.allSelectedValue[1]);
    console.log(event.target.name);
    console.log(event.target.value);
  }

  handleClickSubmit(event) {
    event.preventDefault();
    this.displayFinalScore = true;
    let finalValueCalcArray = this.listOfQuestions.filter(
      eachItem => this.allSelectedValue[eachItem.Id] === eachItem.RightAns
    );
    this.finalValueCalc = finalValueCalcArray.length;
  }
  handleClickReset() {
    this.allSelectedValue = {};
    this.finalValueCalc = 0;
    this.displayFinalScore = false;
  }
}

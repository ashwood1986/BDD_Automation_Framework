import { ElementFinder, element, by } from "protractor";

export class locators {

    firstName:ElementFinder;
    secondNumber:ElementFinder;
    goButton:ElementFinder;
    result:ElementFinder;

    constructor(){
        this.firstName = element(by.model("first"));
        this.secondNumber = element(by.model("second"));
        this.goButton = element(by.id("gobutton"));
        this.result = element(by.repeater("result in memory")).element(
            by.css("td:nth-child(3)"));
    }

}
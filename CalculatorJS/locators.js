"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class locators {
    constructor() {
        this.firstName = protractor_1.element(protractor_1.by.model("first"));
        this.secondNumber = protractor_1.element(protractor_1.by.model("second"));
        this.goButton = protractor_1.element(protractor_1.by.id("gobutton"));
        this.result = protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)"));
    }
}
exports.locators = locators;

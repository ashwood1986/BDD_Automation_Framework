"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locators = void 0;
const protractor_1 = require("protractor");
class locators {
    constructor() {
        this.firstName = (0, protractor_1.element)(protractor_1.by.model("first"));
        this.secondNumber = (0, protractor_1.element)(protractor_1.by.model("second"));
        this.goButton = (0, protractor_1.element)(protractor_1.by.id("gobutton"));
        this.result = (0, protractor_1.element)(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)"));
    }
}
exports.locators = locators;

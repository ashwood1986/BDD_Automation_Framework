"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const locators_1 = require("../locators");
let locator = new locators_1.locators;
cucumber_1.Given("I will naviage to calculator site", function () {
    protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
});
cucumber_1.When("I add two numbers {String} and {string}", (string1, string2) => __awaiter(this, void 0, void 0, function* () {
    yield locator.firstName.sendKeys(string1);
    yield locator.secondNumber.sendKeys(string2);
    yield locator.goButton.click();
}));
cucumber_1.Then("The output displayed is {string1}", (string) => __awaiter(this, void 0, void 0, function* () {
    yield locator.result.getText().then((text) => {
        console.log(text);
    });
    yield locator.result.getText().then(function (text) {
        console.log(text);
    });
    // await expect(theResult).toBe(string);
}));

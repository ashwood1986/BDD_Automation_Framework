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
const protractor_1 = require("protractor");
const locators_1 = require("./locators");
describe("Playing around with Super Calculator", () => __awaiter(this, void 0, void 0, function* () {
    let locator = new locators_1.locators();
    it("calculate by adding", () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield locator.firstName.sendKeys("3");
        yield locator.secondNumber.sendKeys("5");
        yield locator.goButton.click();
        locator.result.getText().then((text) => {
            console.log(text);
        });
        let theResult = locator.result.getText();
        yield expect(theResult).toBe("8");
    }));
}));

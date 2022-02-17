import {Given, When, Then} from "cucumber"
import {browser} from 'protractor'
import { locators } from "../locators";

let locator = new locators;

Given ("I will naviage to calculator site", function(){
    browser.get("http://juliemr.github.io/protractor-demo/");
})

When ("I add two numbers {String} and {string}", async(string1,string2)=>{
    await locator.firstName.sendKeys(string1);
    await locator.secondNumber.sendKeys(string2);
    await locator.goButton.click();
})

Then ("The output displayed is {string1}", async()=>{
    await locator.result.getText().then((text)=>{
            console.log(text)
        })
    await locator.result.getText().then(function(text){
        console.log(text)
    });
    // await expect(theResult).toBe(string);

})


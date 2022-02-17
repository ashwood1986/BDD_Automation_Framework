import {element, browser, by} from 'protractor'
import { locators } from './locators';


describe("Playing around with Super Calculator",async()=>{


    let locator = new locators()

    it("calculate by adding", async()=>{
        browser.get("http://juliemr.github.io/protractor-demo/");
        await locator.firstName.sendKeys("3");
        await locator.secondNumber.sendKeys("5")
        await locator.goButton.click();
        locator.result.getText().then((text)=>{
            console.log(text)
        })
        let theResult = locator.result.getText();
        await expect(theResult).toBe("8");
    })
});
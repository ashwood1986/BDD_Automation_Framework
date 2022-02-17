"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Need to install above for this to work... read iup and find a way to implement.
exports.config = {
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //direct connect allows you to run protractor tests without starting a server
    directConnect: true,
    specs: ['C:/Users/ashwo/OneDrive/Documents/Automation Framework/ashwood86/features/calculator.feature'],
    capabilities: {
        browserName: 'chrome',
    },
    cucumberOpts: {
        require: [
            'C:/Users/ashwo/OneDrive/Documents/Automation Framework/ashwood86/stepdefinitions/steps.js' // accepts a glob
        ]
    }
    // useAllAngular2AppRoots: true,
    // jasmineNodeOpts:{
    //     showColors: true,
    // }
};

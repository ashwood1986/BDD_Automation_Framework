"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// Need to install above for this to work... read iup and find a way to implement.
exports.config = {
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //direct connect allows you to run protractor tests without starting a server
    directConnect: true,
    specs: ['../features/calculator.feature'],
    capabilities: {
        browserName: 'chrome',
    },
    cucumberOpts: {
        require: [
            './stepdefinitions/steps.js' // accepts a glob
        ]
    }
    // useAllAngular2AppRoots: true,
    // jasmineNodeOpts:{
    //     showColors: true,
    // }
};

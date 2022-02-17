import{Config} from 'protractor';
// Need to install above for this to work... read iup and find a way to implement.

export let config: Config = {
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
          './stepdefinitio0ns/steps.js' // accepts a glob
        ]
      }
    // useAllAngular2AppRoots: true,
    // jasmineNodeOpts:{
    //     showColors: true,
    // }
}

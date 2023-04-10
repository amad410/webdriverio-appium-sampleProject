import { RemoteOptions } from "webdriverio";
import path from 'path';
import { config } from "./wdio.conf";

config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: 'Android',
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    deviceName: 'Pixel 2 API 24',
    automationName: 'UiAutomator2',
    // The path to the app
    app: path.join(process.cwd(),"./apps/android/ApiDemos-debug.apk"),
},

];

class ProjectCapabilities {
  private static webDriverPath: string = '/wd/hub';
  private static webDriverPort: number = 4723;

  static androidBaseCapabilities(appPackage: string = "com.android.contacts", appActivity: string = "com.android.contacts.activities.PeopleActivity", additionalCaps?: object): RemoteOptions {
    
    const desiredCapabilities = 
      {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        deviceName: 'Pixel 2 API 24',
        automationName: 'UiAutomator2',
        // The path to the app
        app: path.join(process.cwd(),"./apps/android/ApiDemos-debug.apk"),
    };/*{
      platformName: "Android",
      deviceName: "Pixel 2 API 24",
      automationName: "UiAutomator2",
      app: path.join(process.cwd(),"./apps/android/ApiDemos-debug.apk"),
      ...additionalCaps
    };*/

    // Add Allure Reporter
    const reporter = require('@wdio/allure-reporter').default;
    reporter.addStep(`Android capabilities: ${JSON.stringify(desiredCapabilities)}`);

    return {
      path: this.webDriverPath,
      port: this.webDriverPort,
      capabilities: desiredCapabilities
    }
  }
}

export default ProjectCapabilities;

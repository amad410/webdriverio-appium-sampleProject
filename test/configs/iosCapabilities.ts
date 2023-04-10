// File: projectCapabilites.ts
import { RemoteOptions } from "webdriverio";
import path from 'path';

class ProjectCapabilities {
 private static webDriverPath: string = '/wd/hub';
 private static webDriverPort: number = 4723;
 static iosBaseCapabilities(appPackage: string = "com.android.contacts", appActivity: string = "com.android.contacts.activities.PeopleActivity", additionalCaps?: object): RemoteOptions {
 const desiredCapabilities = {
   platformName: "Android",
   deviceName: "Pixel 2 API 24",
   automationName: "UiAutomator2",
   app: path.join(process.cwd(),"./apps/ios/ApiDemos-debug.apk"),
   ...additionalCaps
  };
 return {
   path: this.webDriverPath,
   port: this.webDriverPort,
   capabilities: desiredCapabilities
  }
 }
}
export default ProjectCapabilities;
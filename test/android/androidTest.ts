import { remote, RemoteOptions, Browser } from "webdriverio";
//import ProjectCapabilities from "./projectCapabilities";
import AndroidCapabilities from "../configs/androidCapabilities2";


// Our Test Suite Name
describe('Test Suite Name', function() {
  
    let driver: Browser;
	this.timeout(40000);
	before(async function () {
		const remoteOptions: RemoteOptions = AndroidCapabilities.androidBaseCapabilities();
		driver = await remote(remoteOptions);
	});
    
    // Our Test Case
    it('Test Case Name', function() {
    });
    
    // Teardown code we can run after our test case has executed
    after(async function () {
		  await driver.deleteSession();
	});
});
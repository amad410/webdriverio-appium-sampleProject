import { join } from 'path';
import config from './andLocal';
import path from 'path';

// ============
// Specs
// ============
config.specs = [
    'C:/Users/Antwan.Maddox/source/repos/Sandbox/webdriverio-mobile-mocha-typescript2/test/android/androidTest.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
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

exports.config = config;

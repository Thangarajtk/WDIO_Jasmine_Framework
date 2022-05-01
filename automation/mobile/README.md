# WDIO Appium - Mobile Automation - Android

<img src = "https://user-images.githubusercontent.com/48508827/136083498-e707b438-0ade-47fc-bb2b-fce34f8d04e3.png" width="500" height="300">

## :rocket: Quick Start - Appium set up on Windows (Android):
1) Download Visual Studio Code [IDE](https://code.visualstudio.com/download).
2) Install [NodeJS](https://nodejs.org/en/download/)
3) Install [Android studio](https://developer.android.com/studio)
4) Install Appium Server using npm (CLI) command `npm install -g appium`
```
Command to check the installed appium version: `appium --version`
```
5) Add below Android SDK path in the environment variable
```
    - ANDROID_HOME = <path to Sdk folder>
    - %ANDROID_HOME%\tools
    - %ANDROID_HOME%\tools\bin
    - %ANDROID_HOME%\platform-tools
```
6) Install [Appium desktop](https://github.com/appium/appium-desktop/releases/)
7) Install [Appium Inspector](https://github.com/appium/appium-inspector/releases)

## :pushpin: Appium Doctor to verify the installations
1) Install appium-doctor using command `npm install -g appium-doctor`
2) To view the list of available options `appium-doctor --help`
```
To check Android set up `appium-doctor --android`
To check ios set up `appium-doctor --ios`
```

## :pushpin: Creating Android Virtual Device (Emulator) from Android Studio:
1) Open Android Studio.
2) Click on Tools -> AVD Manager -> Create Virtual Device -> Select the device and OS version -> Finish.
3) Once Virtual device is created, click on Launch this AVD in the emulator.
4) Command to view the list of devices attached `adb devices`

## :pushpin: Android Real Device Set up:
1) Connect Android real device to the machine(Desktop/Laptop)
2) Turn on the developer options in android mobile
3) Enable USB debugging
4) Run command `adb devices` in cmd prompt to check whether the device is recognised

## :pushpin: Mirror android/ios device to your desktop
1) Download [Vysor](https://www.vysor.io/)

## :pushpin: Start Android Emulator from Command line
1) Open command prompt, go to `<sdk emulator path>`
```
Command to stard AVD: `emulator -avd <avd_name>`
Command to stop/kill AVD: `adb -e emu kill`
```

## :pushpin: Pushing the App (.apk file) to Android Emulator:
1) Copy the .apk file and paste it in the path - `<path to sdk platform-tools>`
2) Open the cmd terminal from the directory where APK file is placed and enter command `adb install <apk filename>`

## :pushpin: Android - Finding appPackage and appActivity:
If the app is already installed on your device then we can make use of appPackage and appActivity to launch the app

<b> Option 1 : </b>
1) Open the app on the device, for which appPackage and appActivity is required.
2) Open powershell and enter command `adb shell dumpsys window | grep -E 'mCurrentFocus|mFocusedApp'`
NOTE: This command may not work for newer Android OS (10 or 11). In that case, use command:
   `adb shell "dumpsys activity activities | grep mResumedActivity"`

<b> Option 2 : </b>
Install <b> APK info </b> app to retrieve appPackage and appActivity for the app installed in your device

## :pushpin: Inspecting Elements
### uiautomatorviewer
1) Go to the path - `<path to sdk folder>\tools\bin\`
2) click on `uiautomatorviewer`
3) On the UI Automator Viewer, click on Device Screenshot (uiautomator dump). Ui automator will capture the screenshot of current open screen in the device.

<img width="700" height="450" alt="UiAutomatorViewer" src="https://user-images.githubusercontent.com/48508827/136441564-56869f6b-d220-4114-b00b-1312957f3d5b.png">

### Appium Inspector
1) Start the Appium Server and connect with Real device/Emulator.
2) Open Appium Inspector app and provide the appium server details and Desired Capabilities.

<img width="700" alt="Appium Inspector" src="https://user-images.githubusercontent.com/48508827/136668610-7507a27d-1304-490a-b954-687d3bf6caa2.png">

3) Click on Start session which will start the appium inspector with layout shown below.

<img width="700" alt="Appium " src="https://user-images.githubusercontent.com/48508827/136668632-343aab0d-9eef-4a2d-beee-fa35825f361a.png">

## :pushpin: Inspecting Element for mobile web browser
```
Type url `chrome://inspect/#devices` in the desktop chrome browser and start inspecting element
```

<img width="800" alt="Capture" src="https://user-images.githubusercontent.com/48508827/146682499-00cb158a-5f9b-4daf-87ba-ca197b2804de.PNG">

## :pushpin: Execute tests
1. Open terminal and Run command `npm run test:android`
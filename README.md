![Commits](https://img.shields.io/github/commit-activity/y/actum/text-spacing-editor?label=Commits)
![GitHub issues](https://img.shields.io/github/issues/zmrhaljiri/text-spacing-editor)
[![Badge License]](LICENSE.txt)
[![Badge Chrome]](https://chrome.google.com/webstore/detail/text-spacing-editor/amnelgbfbdlfjeaobejkfmjjnmeddaoj)
[![Badge Mozilla]](https://addons.mozilla.org/en-US/firefox/addon/text-spacing-editor-actum/)
[![Badge Edge]](https://microsoftedge.microsoft.com/addons/detail/nhjfhffdjhbdflekgnopingdbflmgjfb)

<h1 align="center">
    <sub>
        <img src="https://raw.githubusercontent.com/zmrhaljiri/text-spacing-editor/master/icon48.png" height="38" width="38">
    </sub>
    Text Spacing Editor
</h1>

<p align="center">
A browser extension that allows you to set custom values for the following text spacing properties: Line height, letter spacing, word spacing, and paragraph spacing.
You can use it also as a way of testing the <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html">WCAG success criterion 1.4.12 - Text Spacing</a>.
</p>

<p align="center">
<a href="https://chrome.google.com/webstore/detail/text-spacing-editor/amnelgbfbdlfjeaobejkfmjjnmeddaoj"><img src="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/HRs9MPufa1J1h5glNhut.png" alt="Text Spacing Editor available in the Chrome Web Store" height="64"></a>
<a href="https://addons.mozilla.org/en-US/firefox/addon/text-spacing-editor-actum/"><img src="https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg" alt="Get the Text Spacing Editor addon for Firefox" height="64"></a>
<a href="https://microsoftedge.microsoft.com/addons/detail/nhjfhffdjhbdflekgnopingdbflmgjfb"><img src="https://get.microsoft.com/images/en-us%20dark.svg" alt="Get Text Spacing Editor for Microsoft Edge" height="64"></a>
<a href="https://apps.apple.com/us/app/text-spacing-editor/id6469146607"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download Text Spacing Editor on the App Store" height="64"></a>
</p>

<p>Note: Get the <a target="_blank" rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/text-spacing-editor/amnelgbfbdlfjeaobejkfmjjnmeddaoj">Text Spacing Editor for Opera from Chrome Web Store</a>.</p>
<p><a target="_blank" rel="noopener noreferrer" href="https://forums.opera.com/topic/16609/very-long-extension-moderation-process/408">Opera is no longer moderating their extensions</a> but allows you to install Chrome extensions.</p>

***

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Testing with Android


You can use [web-ext](https://github.com/mozilla/web-ext) to test your build for Android.

Assuming you have your Android device configured with adb and ready to use:

```bash
cd build/target-mvX-ENV # navigate to build target folder

adb devices # copy device name

web-ext run -t firefox-android  --android-device=DEVICE_NAME #use device name from adb
```

## Making production build

Run the following:

```bash
yarn build:all
```

This should create a production bundle for Chrome, Firefox, Safari, Edge and Opera in a `build/` folder. You can then publish zip archives

## Submit to the webstores

Build with plasmo, packed with `pack.sh` script and distributed to web stores manualy.


<!----------------------------------[ Badges ]--------------------------------->
[Badge License]: https://img.shields.io/badge/License-GPLv3-blue.svg
[Badge Chrome]: https://img.shields.io/chrome-web-store/users/amnelgbfbdlfjeaobejkfmjjnmeddaoj.svg?label=Chrome%20users
[Badge Edge]: https://img.shields.io/badge/dynamic/json?label=Edge%20users&query=%24.activeInstallCount&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fnhjfhffdjhbdflekgnopingdbflmgjfb
[Badge Mozilla]: https://img.shields.io/amo/users/text-spacing-editor-actum.svg?label=Firefox%20users

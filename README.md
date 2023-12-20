![Commits](https://img.shields.io/github/commit-activity/y/actum/text-spacing-editor?label=Commits)
![GitHub issues](https://img.shields.io/github/issues/actum/text-spacing-editor?label=Issues)
[![Badge License]](LICENSE.txt)
[![Badge Chrome]](https://chrome.google.com/webstore/detail/text-spacing-editor/amnelgbfbdlfjeaobejkfmjjnmeddaoj)
[![Badge Mozilla]](https://addons.mozilla.org/en-US/firefox/addon/text-spacing-editor-actum/)
[![Badge Edge]](https://microsoftedge.microsoft.com/addons/detail/nhjfhffdjhbdflekgnopingdbflmgjfb)
[![Badge Safari]](https://apps.apple.com/us/app/text-spacing-editor/id6469146607)

<h1>
    <sub>
        <img src="https://raw.githubusercontent.com/zmrhaljiri/text-spacing-editor/master/icon48.png" height="38" width="38">
    </sub>
    Text Spacing Editor
</h1>

A browser extension that allows you to set custom values for the following text spacing properties: <strong>Line height</strong>, <strong>letter spacing</strong>, <strong>word spacing</strong>, and <strong>paragraph spacing</strong>.
You can use it also as a way of testing the <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html">WCAG success criterion 1.4.12 - Text Spacing</a>.

<a href="https://chrome.google.com/webstore/detail/text-spacing-editor/amnelgbfbdlfjeaobejkfmjjnmeddaoj"><img src="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/HRs9MPufa1J1h5glNhut.png" alt="Text Spacing Editor available in the Chrome Web Store" height="64"></a>
<a href="https://addons.mozilla.org/en-US/firefox/addon/text-spacing-editor-actum/"><img src="https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg" alt="Get the Text Spacing Editor addon for Firefox" height="64"></a>
<a href="https://microsoftedge.microsoft.com/addons/detail/nhjfhffdjhbdflekgnopingdbflmgjfb"><img src="https://get.microsoft.com/images/en-us%20dark.svg" alt="Get Text Spacing Editor for Microsoft Edge" height="64"></a>
<a href="https://apps.apple.com/us/app/text-spacing-editor/id6469146607"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download Text Spacing Editor on the App Store" height="64"></a>

Note: Get the <a target="_blank" rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/text-spacing-editor/amnelgbfbdlfjeaobejkfmjjnmeddaoj">Text Spacing Editor for Opera from Chrome Web Store</a>.
<a target="_blank" rel="noopener noreferrer" href="https://forums.opera.com/topic/16609/very-long-extension-moderation-process/408">Opera is no longer moderating their extensions</a> but allows you to install Chrome extensions.

## Features

- Ability to adjust text spacing properties on web pages
- Multiple ways to adjust properties - a preset, a slider, and increase/decrease buttons (with the long-press event)
- Full keyboard support and screen reader support
- Support for light mode, dark mode, high contrast mode, and reduced motion mode
- Instructions on how to use the extension

***

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
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
npm run build:all
# or
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
[Badge Safari]: https://img.shields.io/badge/dynamic/json?color=blue&label=Safari%20users&query=ratingCount&url=https%3A%2F%2Fwww.rateinsight.app%2Fapi%2Fshield?appId=6469146607

## Contribution

If you encounter issues, have suggestions, or want to add a new feature, please [create a new issue](https://github.com/actum/text-spacing-editor/issues/new/choose). We are happy to help you.

### Translations

We welcome your help with localization! If you want to contribute with a translation of texts, here is what to do:

1. First, ensure the locale you want to add is supported by web stores. Check the list of [supported locales](https://developer.chrome.com/docs/extensions/reference/api/i18n#supported-locales). If you do not see your locale in the list, and you cannot choose the closest possible locale, it is not possible to localize the extension to your wanted language as the web stores do not support it.
2. Follow one of these two steps:
    1. **If you have experience with GitHub and know how to create a pull request**, fork this repository, create a new branch, and add the new locale file within a new folder like so: `/locales/[LOCALE]/messages.json`, where `[LOCALE]` is the code of the locale you are about to add. For instance, if you want to add an Indonesian locale, you would create a `/locales/id/messages.json` file.
    2. **If you are not comfortable with GitHub or pull requests**, create a new text document on your computer and name it `messages.json` or `messages.txt`.
3. Copy the contents of the [English (en) locale messages.json file](https://github.com/actum/text-spacing-editor/blob/main/locales/en/messages.json) and paste it to your new file.
4. Translate all values of `message` and `description` keys. Only translate the actual texts inside, such as `Text Spacing Editor` or `Line height`. Do not translate the keys themselves, for instance, `extensionName`, `message`, `description`, `placeholders`, `property`, or `content`. Also, some texts contain HTML tags inside, such as `<ul id='wcag-conformance-values'><li><em>Line height</em>` - in that case, only translate the texts inside the HTML tags.
5. Follow one of these two steps:
    1. **If you forked the repository**, commit and push your changes and create a pull request. Make sure the base repository is `actum/text-spacing-editor` and the base branch is `main`.
    2. **If you created a new file on your computer**, [add a new feature request](https://github.com/actum/text-spacing-editor/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=):
        1. Add a title (e.g. "Add Indonesian locale") and a description with any additional information you want to mention there.
        2. Attach your file to the description (or use the "Paste, drop, or click to add files" button to upload the file).        

[Check the other locales](https://github.com/actum/text-spacing-editor/tree/main/locales) to see how they are implemented.

We will review your request, contact you if necessary, and implement the changes. Thank you!
If you are not sure if you did something right, don't worry. We will review your issue and help you with everything 🙂. You can always contact us at devs@actumdigital.com.

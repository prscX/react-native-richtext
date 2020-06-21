<h1 align="center">

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-richtext"><img src="http://img.shields.io/npm/v/react-native-richtext.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-richtext/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-richtext#License"><img src="https://img.shields.io/npm/l/react-native-richtext.svg?style=flat" /></a>
</p>


    ReactNative: Native RichText (Android/iOS)

If this project has helped you out, please support us with a star 🌟
</h1>
This library is a React Native bridge around native rich text libraries. It allows you to edit/format content providing below set of features:


* _**FORMAT_STRONG / FORMAT_BOLD / FORMAT_EMPHASIS / FORMAT_CITE / FORMAT_ITALIC / FORMAT_BIG / FORMAT_SMALL / FORMAT_FONT / FORMAT_MONOSPACE / FORMAT_LINK / FORMAT_UNDERLINE / FORMAT_SUPERSCRIPT / FORMAT_SUBSCRIPT / FORMAT_CODE**_

* _**Video / Camera / Audio / Gallery [Not Supported - Targeting it for future releases]**_

> **Note**
> This library is support ReactNative >= 62

<img src="https://github.com/wordpress-mobile/AztecEditor-Android/raw/develop/visual_editor.png" />

## 📖 Getting started

`$ yarn add react-native-richtext`

- **iOS**

> **iOS Prerequisite:** Please make sure `CocoaPods` is installed on your system

- **Android**

- Please add below script in your build.gradle

```
defaultConfig {
    multiDexEnabled true
    ...
}

buildscript {
    repositories {
        maven { url "https://jitpack.io" }
        ...
    }
}

dependencies {
    implementation 'com.android.support:multidex:1.0.3'
}

allprojects {
    repositories {
        maven { url "https://jitpack.io" }
        ...
    }
}
```


- Add below activity in your app activities:

`
<activity android:name="org.wordpress.aztec.demo.MainActivity" />
`

## 💻 Usage

```
import { RNRichText } from '@prscx/react-native-richtext';

RNRichText.Show({
    title: 'Editor',
    content: EXAMPLE,
    onDone: (content) => {
        console.log('on done: ' + content);
    }
});
```

## 💡 Props

- **General(iOS & Android)**

| Prop                   | Type                | Default | Note                                             |
| ---------------------- | ------------------- | ------- | ------------------------------------------------ |
| `content: mandatory`     | `string`            |         | Specify html content which needs to be formatted                 |
| `onDone`    | `func` |         | Specify done callback            |


- **Android**

| Prop                   | Type                | Default | Note                                             |
| ---------------------- | ------------------- | ------- | ------------------------------------------------ |
| `title`     | `string`            |         | Specify html content which needs to be formatted                 |

## ✨ Credits

- Android - AztecEditor: [wordpress-mobile/AztecEditor-Android](https://github.com/wordpress-mobile/AztecEditor-Android)
- iOS AztecEditor: [wordpress-mobile/AztecEditor-iOS](https://github.com/wordpress-mobile/AztecEditor-iOS)

## 🤔 How to contribute
Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/prscX/react-native-richtext/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 💫 Where is this library used?
If you are using this library in one of your projects, add it in this list below. ✨


## 📜 License
This library is provided under the Apache 2 License.

RNRichText @ [prscX](https://github.com/prscX)

## 💖 Support my projects
I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:
* Starring and sharing the projects you like 🚀
* If you're feeling especially charitable, please follow [prscX](https://github.com/prscX) on GitHub.

  <a href="https://www.buymeacoffee.com/prscX" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

  Thanks! ❤️
  <br/>
  [prscX.github.io](https://prscx.github.io)
  <br/>
  </ Pranav >

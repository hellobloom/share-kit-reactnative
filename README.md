![Share Kit React Native](https://github.com/hellobloom/share-kit/raw/master/images/logo.png)

# Share Kit React Native

React Native wrapper for [Share Kit](https://github.com/hellobloom/share-kit#readme)

- [Share Kit React Native](#share-kit-react-native)
  - [Installation](#installation)
  - [Usage](#usage)
  - [More](#more)
  - [Storybook Demo](demo/README.md)

## Installation

Install `share-kit-reactnative` package
```
npm install --save @bloomprotocol/share-kit-reactnative
```

Link Libraries 
```
react-native link react-native-randombytes
react-native link react-native-svg
react-native link react-native-linear-gradient
```

To allow the usage of node core modules, [rn-nodeify](https://github.com/tradle/rn-nodeify) is being used.


**Note: You can also use any other method that you know to allow node core modules. Refer the [rn-nodeify](https://github.com/tradle/rn-nodeify) repo for any further details about `rn-nodeify`.**

Install [rn-nodeify](https://github.com/tradle/rn-nodeify)
```
npm install --save-dev rn-nodeify@latest
```

In `package.json`, add a `postinstall` script as follows.
```
...
"scripts": {
    ...
    "postinstall": "./node_modules/.bin/rn-nodeify --hack --install"
}
...
```

Run
```
npm run postinstall
```

## Usage

Check [demo](./demo) for complete example.

```tsx
import { RequestButton, RequestData, Action } from "@pbteja-dev/share-kit-reactnative";

const requestData: RequestData = {
    action: Action.attestation,
    token: 'a08714b92346a1bba4262ed575d23de3ff3e6b5480ad0e1c82c011bab0411fdf',
    url: 'https://receive-kit.bloom.co/api/receive',
    org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
    org_name: 'Bloom',
    org_usage_policy_url: 'https://bloom.co/legal/terms',
    org_privacy_policy_url: 'https://bloom.co/legal/privacy',
    types: ['phone', 'email'],
};

const buttonCallbackUrl = 'https://mysite.com/bloom-callback';

<RequestButton
    requestData={requestData}
    buttonCallbackUrl={buttonCallbackUrl} 
/>

```

## More
For more information and documentation see [Share Kit](https://github.com/hellobloom/share-kit#readme)

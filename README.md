![Share Kit React Native](https://github.com/hellobloom/share-kit/raw/master/images/logo.png)

**Important**: This repository is no longer maintained. It has been moved to the [attestations-es](https://github.com/hellobloom/attestations-es/) monorepo.

# Share Kit React Native

React Native wrapper for [Share Kit](https://github.com/hellobloom/share-kit#readme)

- [Share Kit React Native](#share-kit-react-native)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Storybook Demo](#storybook-demo)

## Installation

```
npm install --save @bloomprotocol/share-kit-reactnative
```

You may need to also link these dependencies

```
react-native link react-native-svg
react-native link react-native-linear-gradient
```

## Usage

`RequestButton` will render a button that opens the Bloom app to share specified data.

```tsx
import React from 'react'
import {RequestButton, Action, RequestData} from '@bloomprotocol/share-kit-reactnative'

const requestData: RequestData = {
  action: Action.attestation,
  token: 'a08714b92346a1bba4262ed575d23de3ff3e6b5480ad0e1c82c011bab0411fdf',
  url: 'https://receive-kit.bloom.co/api/receive',
  org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
  org_name: 'Bloom',
  org_usage_policy_url: 'https://bloom.co/legal/terms',
  org_privacy_policy_url: 'https://bloom.co/legal/privacy',
  types: ['phone', 'email'],
}

const buttonCallbackUrl = 'https://mysite.com/bloom-callback'
<RequestButton
  requestData={requestData}
  callbackUrl={callbackUrl}
  size="lg"
  type="log-in"
/>
```

## More

For more information and documentation see [Share Kit](https://github.com/hellobloom/share-kit#readme)

## Storyboard Demo

### Build Libary

1. Build the library

```
npm run build
```

2. Run the storybook

   ```
   cd example
   ```

   - On android

   ```
   react-native run-andoird
   ```

   - On ios

   ```
   react-native run-ios
   ```

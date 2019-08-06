import React from 'react'
import {Linking, TouchableOpacity} from 'react-native'
import {encode} from 'base-64'
import {RequestData, ButtonOptions} from '@bloomprotocol/share-kit'

import {appendQuery} from './append'
import {Large} from './content/Large'
import {Medium} from './content/Medium'
import {Small} from './content/Small'

type RequestButtonProps = {
  requestData: RequestData
  buttonOptions: ButtonOptions
}

const RequestButton: React.FC<RequestButtonProps> = props => {
  const appenedRequestData: RequestData = {
    ...props.requestData,
    url: appendQuery(props.requestData.url, {'share-kit-from': 'button'}),
  }

  let content: JSX.Element

  if (props.buttonOptions.size === 'sm') {
    content = <Small type={props.buttonOptions.type} invert={props.buttonOptions.invert} />
  } else if (props.buttonOptions.size === 'md') {
    content = <Medium type={props.buttonOptions.type || 'verify'} />
  } else {
    content = <Large type={props.buttonOptions.type || 'verify'} />
  }

  return (
    <TouchableOpacity
      onPress={() =>
        Linking.openURL(
          `https://bloom.co/download?request=${encode(JSON.stringify(appenedRequestData))}&callback-url=${encodeURIComponent(
            props.buttonOptions.callbackUrl,
          )}`,
        )
      }
      activeOpacity={1}
    >
      {content}
    </TouchableOpacity>
  )
}

export {RequestButton}

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';
import { RequestButton } from "../../src/RequestButton";
import { Action } from "@bloomprotocol/share-kit";

const style = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
};

const CenteredView = ({ children }) => (
    <View style={style}>
        {children}
    </View>
);

const requestData = {
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

storiesOf('CenteredView', module)
    .add('default view', () => (
        <CenteredView>
            <RequestButton requestData={requestData} buttonCallbackUrl={buttonCallbackUrl} />
        </CenteredView>
    ));

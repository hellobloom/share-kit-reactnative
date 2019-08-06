import React from 'react'
import {ImageBackground, StyleSheet, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {LargeButtonType} from '@bloomprotocol/share-kit'
import {BloomLogo} from './BloomLogo'
import Svg, {Path} from 'react-native-svg'

const backgroundPattern =
  'data:image/png;base64,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'

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 4,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 39,
    paddingLeft: 39,
    width: '100%',
  },
  imageBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  imageBackgroundImage: {
    marginLeft: 39,
  },
  lockContainer: {
    position: 'absolute',
    left: 19,
  },
  textAndLogo: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    marginRight: 12,
  },
  bloomLogo: {
    marginRight: 6,
  },
})

const texts: {[k in LargeButtonType]: {d: string; width: string; height: string}} = {
  'log-in': {
    d:
      'M.296 12V.976h2.352v8.96h4.128V12H.296zm11.328-2.048c.928 0 1.696-.672 1.696-1.712 0-1.008-.768-1.696-1.696-1.696-.912 0-1.68.688-1.68 1.696 0 1.04.768 1.712 1.68 1.712zm0 2.176c-2.112 0-3.872-1.536-3.872-3.888s1.76-3.872 3.872-3.872 3.888 1.52 3.888 3.872-1.776 3.888-3.888 3.888zm10.96-3.888c0-1.12-.88-1.76-1.808-1.76-.944 0-1.792.704-1.792 1.76 0 1.12.848 1.824 1.792 1.824.912 0 1.808-.736 1.808-1.824zm-3.904 4.288c.256.688 1.136 1.2 1.888 1.2 1.696 0 2.16-1.168 2.064-2.656-.352.688-1.312 1.088-2.24 1.088-1.92 0-3.728-1.52-3.728-3.872 0-2.4 1.808-3.92 3.728-3.92.928 0 1.872.4 2.24 1.088v-.928h2.16v6.432c0 3.216-1.568 4.768-4.224 4.768-1.648 0-3.056-.928-3.68-2.32.56-.272 1.232-.608 1.792-.88zM31.016.976h2.336V12h-2.336V.976zm6.88 7.072V12h-2.224V4.528h2.224v1.088c.4-.752 1.28-1.248 2.16-1.248 1.68 0 2.736 1.04 2.736 3.168V12h-2.224V8.016c0-.992-.544-1.488-1.296-1.488-.784 0-1.376.384-1.376 1.52zm21.792-3.52L57.064 12h-1.856l-1.472-4.752L52.328 12h-1.856l-2.704-7.472h2.368l1.328 4.448 1.312-4.448h1.904l1.312 4.448 1.328-4.448h2.368zm3.392 0V12h-2.208V4.528h2.208zM60.584 1.76c0-.736.64-1.296 1.392-1.296.752 0 1.36.56 1.36 1.296s-.608 1.312-1.36 1.312c-.752 0-1.392-.576-1.392-1.312zm7.456 2.768h1.568v1.76H68.04V12h-2.208V6.288h-1.36v-1.76h1.36V1.664h2.208v2.864zm5.152 3.52V12h-2.224V.464h2.224v5.232c.304-.928 1.392-1.328 2.096-1.328 1.968 0 2.992 1.312 2.992 3.568V12h-2.224V8.016c0-.976-.704-1.488-1.376-1.488-.704 0-1.488.384-1.488 1.52zm18.896-4c0 .72-.368 1.632-1.504 2.064 1.456.368 2.08 1.616 2.08 2.512 0 1.824-1.328 3.376-3.52 3.376h-4.736V.976h4.416c1.984 0 3.264 1.184 3.264 3.072zm-5.328 1.28h1.84c.608 0 1.024-.48 1.024-1.136 0-.688-.352-1.152-1.04-1.152H86.76v2.288zm2.208 1.936H86.76v2.672h2.256c.784 0 1.184-.704 1.184-1.36 0-.624-.4-1.312-1.232-1.312zm5.36-6.8h2.224V12h-2.224V.464zm7.696 9.488c.928 0 1.696-.672 1.696-1.712 0-1.008-.768-1.696-1.696-1.696-.912 0-1.68.688-1.68 1.696 0 1.04.768 1.712 1.68 1.712zm0 2.176c-2.112 0-3.872-1.536-3.872-3.888s1.76-3.872 3.872-3.872 3.888 1.52 3.888 3.872-1.776 3.888-3.888 3.888zm8.912-2.176c.928 0 1.696-.672 1.696-1.712 0-1.008-.768-1.696-1.696-1.696-.912 0-1.68.688-1.68 1.696 0 1.04.768 1.712 1.68 1.712zm0 2.176c-2.112 0-3.872-1.536-3.872-3.888s1.76-3.872 3.872-3.872 3.888 1.52 3.888 3.872-1.776 3.888-3.888 3.888zm13.744-5.6c-.704 0-1.28.432-1.28 1.52V12h-2.224V7.968c-.016-.944-.592-1.44-1.232-1.44-.672 0-1.296.384-1.296 1.52V12h-2.224V4.528h2.224v1.088c.352-.784 1.152-1.232 1.952-1.232 1.184 0 1.984.448 2.4 1.312.72-1.168 1.712-1.328 2.24-1.328 1.776 0 2.88 1.136 2.88 3.392V12h-2.208V8.016c0-.976-.576-1.488-1.232-1.488z',
    width: '129',
    height: '16',
  },
  'sign-up': {
    d:
      'M0 8.304h2.352c.032.704.592 1.328 1.648 1.328.944 0 1.6-.448 1.616-1.168.016-.496-.208-.928-1.328-1.248L2.96 6.848C.528 6.096.112 4.672.112 3.68c0-1.968 1.68-3.296 3.792-3.296 2.128 0 3.728 1.264 3.728 3.376H5.296c0-.736-.496-1.248-1.424-1.248-.816 0-1.424.448-1.424 1.104 0 .288.112.816 1.184 1.12l1.312.416C7.616 5.92 8 7.424 7.968 8.48 7.936 10.672 5.952 11.712 4 11.712c-2.4 0-4-1.424-4-3.408zm11.84-4.24v7.472H9.632V4.064h2.208zM9.344 1.296C9.344.56 9.984 0 10.736 0c.752 0 1.36.56 1.36 1.296s-.608 1.312-1.36 1.312c-.752 0-1.392-.576-1.392-1.312zm10.016 6.48c0-1.12-.88-1.76-1.808-1.76-.944 0-1.792.704-1.792 1.76 0 1.12.848 1.824 1.792 1.824.912 0 1.808-.736 1.808-1.824zm-3.904 4.288c.256.688 1.136 1.2 1.888 1.2 1.696 0 2.16-1.168 2.064-2.656-.352.688-1.312 1.088-2.24 1.088-1.92 0-3.728-1.52-3.728-3.872 0-2.4 1.808-3.92 3.728-3.92.928 0 1.872.4 2.24 1.088v-.928h2.16v6.432c0 3.216-1.568 4.768-4.224 4.768-1.648 0-3.056-.928-3.68-2.32.56-.272 1.232-.608 1.792-.88zm10.384-4.48v3.952h-2.224V4.064h2.224v1.088c.4-.752 1.28-1.248 2.16-1.248 1.68 0 2.736 1.04 2.736 3.168v4.464h-2.224V7.552c0-.992-.544-1.488-1.296-1.488-.784 0-1.376.384-1.376 1.52zm15.216 1.904c.976 0 1.904-.752 1.904-1.888V.512h2.352V7.6c0 2.496-2 4.096-4.256 4.096-2.272 0-4.288-1.6-4.288-4.096V.512h2.384V7.6c0 1.136.912 1.888 1.904 1.888zm8.72-1.664c0 1.12.816 1.776 1.728 1.776.944 0 1.728-.704 1.728-1.776 0-1.104-.784-1.808-1.728-1.808-.928 0-1.728.736-1.728 1.808zm-2.256-3.76h2.208v.928c.368-.688 1.264-1.088 2.192-1.088 1.92 0 3.616 1.52 3.616 3.872 0 2.4-1.696 3.92-3.616 3.92-.928 0-1.824-.384-2.192-1.072V15.2H47.52V4.064zm24.56 0l-2.624 7.472H67.6l-1.472-4.752-1.408 4.752h-1.856L60.16 4.064h2.368l1.328 4.448 1.312-4.448h1.904l1.312 4.448 1.328-4.448h2.368zm3.392 0v7.472h-2.208V4.064h2.208zm-2.496-2.768c0-.736.64-1.296 1.392-1.296.752 0 1.36.56 1.36 1.296s-.608 1.312-1.36 1.312c-.752 0-1.392-.576-1.392-1.312zm7.456 2.768H82v1.76h-1.568v5.712h-2.208V5.824h-1.36v-1.76h1.36V1.2h2.208v2.864zm5.152 3.52v3.952H83.36V0h2.224v5.232c.304-.928 1.392-1.328 2.096-1.328 1.968 0 2.992 1.312 2.992 3.568v4.064h-2.224V7.552c0-.976-.704-1.488-1.376-1.488-.704 0-1.488.384-1.488 1.52zm18.896-4c0 .72-.368 1.632-1.504 2.064 1.456.368 2.08 1.616 2.08 2.512 0 1.824-1.328 3.376-3.52 3.376H96.8V.512h4.416c1.984 0 3.264 1.184 3.264 3.072zm-5.328 1.28h1.84c.608 0 1.024-.48 1.024-1.136 0-.688-.352-1.152-1.04-1.152h-1.824v2.288zM101.36 6.8h-2.208v2.672h2.256c.784 0 1.184-.704 1.184-1.36 0-.624-.4-1.312-1.232-1.312zm5.36-6.8h2.224v11.536h-2.224V0zm7.696 9.488c.928 0 1.696-.672 1.696-1.712 0-1.008-.768-1.696-1.696-1.696-.912 0-1.68.688-1.68 1.696 0 1.04.768 1.712 1.68 1.712zm0 2.176c-2.112 0-3.872-1.536-3.872-3.888s1.76-3.872 3.872-3.872 3.888 1.52 3.888 3.872-1.776 3.888-3.888 3.888zm8.912-2.176c.928 0 1.696-.672 1.696-1.712 0-1.008-.768-1.696-1.696-1.696-.912 0-1.68.688-1.68 1.696 0 1.04.768 1.712 1.68 1.712zm0 2.176c-2.112 0-3.872-1.536-3.872-3.888s1.76-3.872 3.872-3.872 3.888 1.52 3.888 3.872-1.776 3.888-3.888 3.888zm13.744-5.6c-.704 0-1.28.432-1.28 1.52v3.952h-2.224V7.504c-.016-.944-.592-1.44-1.232-1.44-.672 0-1.296.384-1.296 1.52v3.952h-2.224V4.064h2.224v1.088c.352-.784 1.152-1.232 1.952-1.232 1.184 0 1.984.448 2.4 1.312.72-1.168 1.712-1.328 2.24-1.328 1.776 0 2.88 1.136 2.88 3.392v4.24h-2.208V7.552c0-.976-.576-1.488-1.232-1.488z',
    width: '141',
    height: '16',
  },
  connect: {
    d:
      'M8.288 7.968l1.888 1.312c-.96 1.456-2.64 2.416-4.64 2.416C2.384 11.696 0 9.152 0 6.048 0 2.912 2.384.384 5.536.384c1.968 0 3.632.928 4.592 2.336L8.224 4.032c-.592-.864-1.552-1.44-2.688-1.44-1.84 0-3.184 1.536-3.184 3.456 0 1.904 1.344 3.44 3.184 3.44 1.152 0 2.16-.624 2.752-1.52zm6.688 1.52c.928 0 1.696-.672 1.696-1.712 0-1.008-.768-1.696-1.696-1.696-.912 0-1.68.688-1.68 1.696 0 1.04.768 1.712 1.68 1.712zm0 2.176c-2.112 0-3.872-1.536-3.872-3.888s1.76-3.872 3.872-3.872 3.888 1.52 3.888 3.872-1.776 3.888-3.888 3.888zm7.712-4.08v3.952h-2.224V4.064h2.224v1.088c.4-.752 1.28-1.248 2.16-1.248 1.68 0 2.736 1.04 2.736 3.168v4.464H25.36V7.552c0-.992-.544-1.488-1.296-1.488-.784 0-1.376.384-1.376 1.52zm9.088 0v3.952h-2.224V4.064h2.224v1.088c.4-.752 1.28-1.248 2.16-1.248 1.68 0 2.736 1.04 2.736 3.168v4.464h-2.224V7.552c0-.992-.544-1.488-1.296-1.488-.784 0-1.376.384-1.376 1.52zm12.112 1.488l1.616 1.104c-.752 1.12-2.144 1.52-3.408 1.52-2.144 0-3.904-1.568-3.904-3.92s1.76-3.872 3.904-3.872c2.128 0 3.824 1.584 3.824 3.936 0 .192-.016.496-.032.688h-5.472c.112.864 1.056 1.248 1.84 1.248.608 0 1.264-.224 1.632-.704zm-3.44-1.936h3.232c-.112-.912-.944-1.28-1.568-1.28-.624 0-1.472.336-1.664 1.28zm6.544.64c0-2.352 1.92-3.872 4.064-3.872 1.328 0 2.528.576 3.248 1.584l-1.808 1.296c-.304-.48-.864-.752-1.44-.752-.944 0-1.856.672-1.856 1.744s.912 1.792 1.856 1.792c.576 0 1.136-.272 1.44-.752l1.808 1.28c-.704 1.008-1.904 1.6-3.248 1.6-2.144 0-4.064-1.568-4.064-3.92zm11.76-3.712h1.568v1.76h-1.568v5.712h-2.208V5.824h-1.36v-1.76h1.36V1.2h2.208v2.864zm12.208 7.472h-2.384V6.544L64.32.512h2.784L69.76 4.64 72.448.512h2.784L70.96 6.576v4.96zm8.464-2.048c.928 0 1.696-.672 1.696-1.712 0-1.008-.768-1.696-1.696-1.696-.912 0-1.68.688-1.68 1.696 0 1.04.768 1.712 1.68 1.712zm0 2.176c-2.112 0-3.872-1.536-3.872-3.888s1.76-3.872 3.872-3.872 3.888 1.52 3.888 3.872-1.776 3.888-3.888 3.888zm10.304-3.648V4.064h2.224v7.472h-2.224v-1.024c-.4.752-1.216 1.184-1.936 1.184-1.68 0-2.96-1.04-2.96-3.168V4.064h2.224v3.984c0 1.184.816 1.488 1.328 1.488.688 0 1.344-.384 1.344-1.52zm6.496.912v2.608H94V4.064h2.224v1.808c.384-1.392 1.344-1.968 2.112-1.968.528 0 .928.096 1.28.272l-.4 2c-.4-.192-.784-.224-1.136-.224-1.28 0-1.856 1.008-1.856 2.976zm16.4-5.344c0 .72-.368 1.632-1.504 2.064 1.456.368 2.08 1.616 2.08 2.512 0 1.824-1.328 3.376-3.52 3.376h-4.736V.512h4.416c1.984 0 3.264 1.184 3.264 3.072zm-5.328 1.28h1.84c.608 0 1.024-.48 1.024-1.136 0-.688-.352-1.152-1.04-1.152h-1.824v2.288zm2.208 1.936h-2.208v2.672h2.256c.784 0 1.184-.704 1.184-1.36 0-.624-.4-1.312-1.232-1.312zm5.36-6.8h2.224v11.536h-2.224V0zm7.696 9.488c.928 0 1.696-.672 1.696-1.712 0-1.008-.768-1.696-1.696-1.696-.912 0-1.68.688-1.68 1.696 0 1.04.768 1.712 1.68 1.712zm0 2.176c-2.112 0-3.872-1.536-3.872-3.888s1.76-3.872 3.872-3.872 3.888 1.52 3.888 3.872-1.776 3.888-3.888 3.888zm8.912-2.176c.928 0 1.696-.672 1.696-1.712 0-1.008-.768-1.696-1.696-1.696-.912 0-1.68.688-1.68 1.696 0 1.04.768 1.712 1.68 1.712zm0 2.176c-2.112 0-3.872-1.536-3.872-3.888s1.76-3.872 3.872-3.872 3.888 1.52 3.888 3.872-1.776 3.888-3.888 3.888zm13.744-5.6c-.704 0-1.28.432-1.28 1.52v3.952h-2.224V7.504c-.016-.944-.592-1.44-1.232-1.44-.672 0-1.296.384-1.296 1.52v3.952h-2.224V4.064h2.224v1.088c.352-.784 1.152-1.232 1.952-1.232 1.184 0 1.984.448 2.4 1.312.72-1.168 1.712-1.328 2.24-1.328 1.776 0 2.88 1.136 2.88 3.392v4.24h-2.208V7.552c0-.976-.576-1.488-1.232-1.488zm5.68-5.552h2.336v11.024h-2.336V.512zm7.264 2.128v6.768h1.984c1.76 0 2.64-1.552 2.64-3.36 0-1.824-.88-3.408-2.64-3.408h-1.984zm1.984 8.896h-4.32V.512h4.32c3.168 0 4.976 2.4 4.976 5.536 0 3.12-1.808 5.488-4.976 5.488z',
    width: '166',
    height: '12',
  },
  bloom: {
    d:
      'M7.68 3.584c0 .72-.368 1.632-1.504 2.064 1.456.368 2.08 1.616 2.08 2.512 0 1.824-1.328 3.376-3.52 3.376H0V.512h4.416C6.4.512 7.68 1.696 7.68 3.584zm-5.328 1.28h1.84c.608 0 1.024-.48 1.024-1.136 0-.688-.352-1.152-1.04-1.152H2.352v2.288zM4.56 6.8H2.352v2.672h2.256c.784 0 1.184-.704 1.184-1.36 0-.624-.4-1.312-1.232-1.312zM9.92 0h2.224v11.536H9.92V0zm7.696 9.488c.928 0 1.696-.672 1.696-1.712 0-1.008-.768-1.696-1.696-1.696-.912 0-1.68.688-1.68 1.696 0 1.04.768 1.712 1.68 1.712zm0 2.176c-2.112 0-3.872-1.536-3.872-3.888s1.76-3.872 3.872-3.872 3.888 1.52 3.888 3.872-1.776 3.888-3.888 3.888zm8.912-2.176c.928 0 1.696-.672 1.696-1.712 0-1.008-.768-1.696-1.696-1.696-.912 0-1.68.688-1.68 1.696 0 1.04.768 1.712 1.68 1.712zm0 2.176c-2.112 0-3.872-1.536-3.872-3.888s1.76-3.872 3.872-3.872 3.888 1.52 3.888 3.872-1.776 3.888-3.888 3.888zm13.744-5.6c-.704 0-1.28.432-1.28 1.52v3.952h-2.224V7.504c-.016-.944-.592-1.44-1.232-1.44-.672 0-1.296.384-1.296 1.52v3.952h-2.224V4.064h2.224v1.088c.352-.784 1.152-1.232 1.952-1.232 1.184 0 1.984.448 2.4 1.312.72-1.168 1.712-1.328 2.24-1.328 1.776 0 2.88 1.136 2.88 3.392v4.24h-2.208V7.552c0-.976-.576-1.488-1.232-1.488z',
    width: '44',
    height: '12',
  },
  verify: {
    d:
      'M0 .512h2.432L4.4 7.744 6.352.512H8.8L5.44 11.536H3.36L0 .512zm15.328 8.56l1.616 1.104c-.752 1.12-2.144 1.52-3.408 1.52-2.144 0-3.904-1.568-3.904-3.92s1.76-3.872 3.904-3.872c2.128 0 3.824 1.584 3.824 3.936 0 .192-.016.496-.032.688h-5.472c.112.864 1.056 1.248 1.84 1.248.608 0 1.264-.224 1.632-.704zm-3.44-1.936h3.232c-.112-.912-.944-1.28-1.568-1.28-.624 0-1.472.336-1.664 1.28zm9.216 1.792v2.608H18.88V4.064h2.224v1.808c.384-1.392 1.344-1.968 2.112-1.968.528 0 .928.096 1.28.272l-.4 2c-.4-.192-.784-.224-1.136-.224-1.28 0-1.856 1.008-1.856 2.976zm6.752-4.864v7.472h-2.208V4.064h2.208zM25.36 1.296C25.36.56 26 0 26.752 0c.752 0 1.36.56 1.36 1.296s-.608 1.312-1.36 1.312c-.752 0-1.392-.576-1.392-1.312zM34.848 0v2.128h-.816c-.768 0-1.136.544-1.136 1.424v.512H34.4v1.76h-1.504v5.712h-2.24V5.824h-1.408v-1.76h1.408v-.512C30.656 1.264 31.888 0 34.032 0h.816zm8 4.064L38.24 15.2h-2.352l1.792-4.432-2.88-6.704h2.368l1.648 4.24 1.664-4.24h2.368zm16.016 0l-2.624 7.472h-1.856l-1.472-4.752-1.408 4.752h-1.856l-2.704-7.472h2.368l1.328 4.448 1.312-4.448h1.904l1.312 4.448 1.328-4.448h2.368zm3.392 0v7.472h-2.208V4.064h2.208zM59.76 1.296C59.76.56 60.4 0 61.152 0c.752 0 1.36.56 1.36 1.296s-.608 1.312-1.36 1.312c-.752 0-1.392-.576-1.392-1.312zm7.456 2.768h1.568v1.76h-1.568v5.712h-2.208V5.824h-1.36v-1.76h1.36V1.2h2.208v2.864zm5.152 3.52v3.952h-2.224V0h2.224v5.232c.304-.928 1.392-1.328 2.096-1.328 1.968 0 2.992 1.312 2.992 3.568v4.064h-2.224V7.552c0-.976-.704-1.488-1.376-1.488-.704 0-1.488.384-1.488 1.52zm18.896-4c0 .72-.368 1.632-1.504 2.064 1.456.368 2.08 1.616 2.08 2.512 0 1.824-1.328 3.376-3.52 3.376h-4.736V.512H88c1.984 0 3.264 1.184 3.264 3.072zm-5.328 1.28h1.84c.608 0 1.024-.48 1.024-1.136 0-.688-.352-1.152-1.04-1.152h-1.824v2.288zM88.144 6.8h-2.208v2.672h2.256c.784 0 1.184-.704 1.184-1.36 0-.624-.4-1.312-1.232-1.312zm5.36-6.8h2.224v11.536h-2.224V0zm7.696 9.488c.928 0 1.696-.672 1.696-1.712 0-1.008-.768-1.696-1.696-1.696-.912 0-1.68.688-1.68 1.696 0 1.04.768 1.712 1.68 1.712zm0 2.176c-2.112 0-3.872-1.536-3.872-3.888s1.76-3.872 3.872-3.872 3.888 1.52 3.888 3.872-1.776 3.888-3.888 3.888zm8.912-2.176c.928 0 1.696-.672 1.696-1.712 0-1.008-.768-1.696-1.696-1.696-.912 0-1.68.688-1.68 1.696 0 1.04.768 1.712 1.68 1.712zm0 2.176c-2.112 0-3.872-1.536-3.872-3.888s1.76-3.872 3.872-3.872S114 5.424 114 7.776s-1.776 3.888-3.888 3.888zm13.744-5.6c-.704 0-1.28.432-1.28 1.52v3.952h-2.224V7.504c-.016-.944-.592-1.44-1.232-1.44-.672 0-1.296.384-1.296 1.52v3.952H115.6V4.064h2.224v1.088c.352-.784 1.152-1.232 1.952-1.232 1.184 0 1.984.448 2.4 1.312.72-1.168 1.712-1.328 2.24-1.328 1.776 0 2.88 1.136 2.88 3.392v4.24h-2.208V7.552c0-.976-.576-1.488-1.232-1.488z',
    width: '128',
    height: '16',
  },
}

type LargeProps = {
  type: LargeButtonType
}

const Large: React.FC<LargeProps> = props => {
  const text = texts[props.type]

  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#7A7CF3', '#6262F6']} style={styles.linearGradient}>
      <ImageBackground source={{uri: backgroundPattern}} style={styles.imageBackground} imageStyle={styles.imageBackgroundImage}>
        <View style={styles.lockContainer}>
          <Svg viewBox="0 0 24 24" height={20} width={20}>
            <Path
              fill="#5a5de0"
              d="M19.5 9.5h-.75V6.75a6.75 6.75 0 0 0-13.5 0V9.5H4.5a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V11.5a2 2 0 0 0-2-2zm-9.5 6a2 2 0 1 1 3 1.723V19.5a1 1 0 0 1-2 0v-2.277a1.994 1.994 0 0 1-1-1.723zM7.75 6.75a4.25 4.25 0 0 1 8.5 0V9a.5.5 0 0 1-.5.5h-7.5a.5.5 0 0 1-.5-.5z"
            />
          </Svg>
        </View>
        <View style={styles.textAndLogo}>
          <BloomLogo size={22} fill="#fff" style={styles.bloomLogo} />
          <Svg
            width={text.width}
            height={text.height}
            style={{
              marginTop: ['sign-up', 'log-in', 'verify'].indexOf(props.type) >= 0 ? 2 : undefined,
            }}
          >
            <Path fill="#fff" fillRule="evenodd" d={text.d} />
          </Svg>
        </View>
      </ImageBackground>
    </LinearGradient>
  )
}

export {Large}

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/types/rootStackParamList';
import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import WebView from 'react-native-webview';

type WebviewProps = NativeStackScreenProps<RootStackParamList, 'WebviewScreen'>;

const WebViewScreen = ({}: WebviewProps) => {
  return (
    <>
      <Text>Webview Screen</Text>
      <WebView
        source={{uri: 'https://marinahome.org/en-uae'}}
        javaScriptEnabled
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback
        allowsAirPlayForMediaPlayback
        mediaPlaybackRequiresUserAction={false}
      />
    </>
  );
};

export default WebViewScreen;

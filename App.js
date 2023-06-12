
// package name com.mamonator.wordmemo
// android:client 950519656661-0ng6hmosnvq7pgaika7oo2kaglu5t6bk.apps.googleusercontent.com
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '950519656661-0ng6hmosnvq7pgaika7oo2kaglu5t6bk.apps.googleusercontent.com',
    webClientId:'950519656661-d9qn23c1vkbunqvrqf78kcpnbp23eoef.apps.googleusercontent.com',
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start wodffrking on your app!</Text>

      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Open WebBrowser" onPress={() => promptAsync()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

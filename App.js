
// package name com.mamonator.wordmemo
// android:client 950519656661-0ng6hmosnvq7pgaika7oo2kaglu5t6bk.apps.googleusercontent.com
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState , useEffect} from 'react';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '950519656661-0ng6hmosnvq7pgaika7oo2kaglu5t6bk.apps.googleusercontent.com',
    webClientId:'950519656661-d9qn23c1vkbunqvrqf78kcpnbp23eoef.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      console.log(token);
      getUserInfo();
    }
  }, [response, token]);


  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start wodffrking on your app!</Text>

      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Open WebBrowser" onPress={() => promptAsync()} />

      {userInfo === null ? (
        <Button
          title="Sign in with Google"
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />
      ) : (
        <Text style={styles.text}>{userInfo.name}</Text>
      )}
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CreateAccount from './CreateAccount.js';
import RegisterConsoles from './RegisterConsoles.js';
import ProfilePicture from './ProfilePicture.js';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfilePicture />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
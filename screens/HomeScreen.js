import React from 'react';
import { View, Text, StyleSheet, Button, navigation } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home!</Text>
      <Button title="Back" onPress={backLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

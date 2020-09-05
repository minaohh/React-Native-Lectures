import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ComponentScreen = () => {
  const name = 'Amy Santiago';

  return (
    <View>
      <Text style={styles.fontBig}>
        Getting started with React Native Elements
      </Text>
      <Text style={styles.fontSmall}>Hello, {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontBig: {
    fontSize: 45,
  },
  fontSmall: {
    fontSize: 20,
  },
});
export default ComponentScreen;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // console.log(props);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Components Lecture</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to Components Demo"
        onPress={() => {
          navigation.navigate('Components');
        }}
      />
      <Button
        title="Go to List Demo"
        onPress={() => {
          navigation.navigate('Lists');
        }}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => {
          navigation.navigate('Images');
        }}
      />
      <Button
        title="Go to Box Screen Demo"
        onPress={() => {
          navigation.navigate('Box Screen');
        }}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('Lists')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      {/* <Button
        title="Go to Counter Screen Demo"
        onPress={() => {
          navigation.navigate('CounterScreen');
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;

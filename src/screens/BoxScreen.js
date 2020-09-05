import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>Rachel Greene</Text>
      <Text style={styles.textStyle2}>Monica Geller</Text>
      <Text style={styles.textStyle3}>Chandler Bing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    // alignItems: 'center',
    // flexDirection: 'row',
    height: 200,
    // justifyContent: 'space-around',
  },
  textStyle1: {
    borderWidth: 3,
    borderColor: 'red',
    // alignSelf: 'flex-start',
    // flex: 1,
    // marginVertical: 20,
    // marginHorizontal: 10,
  },
  textStyle2: {
    borderWidth: 3,
    fontSize: 20,
    borderColor: 'red',
    position: 'absolute',
    ...StyleSheet.absoluteFillObject,
    // marginHorizontal: 10,
  },
  textStyle3: {
    borderWidth: 3,
    borderColor: 'red',
    // alignSelf: 'flex-end',
    // flex: 4,
    // marginVertical: 20,
    // marginHorizontal: 10,
  },

  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200, //change
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view1: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  view2: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
    // marginTop: 50
  },
  view3: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
});

export default BoxScreen;

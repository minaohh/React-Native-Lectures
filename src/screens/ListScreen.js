import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Ross', job: 'Paleontologist' },
    { name: 'Monica', job: 'Chef' },
    { name: 'Rachel', job: 'Assistant Buyer' },
    { name: 'Chandler', job: 'Advertising' },
    { name: 'Joey', job: 'Actor' },
    { name: 'Phoebe', job: 'Masseuse' },
  ];

  return (
    <View>
      <Text style={styles.fontBig}>Friends List</Text>
      <FlatList
        data={friends}
        keyExtractor={(friend) => friend.name}
        renderItem={({ item }) => {
          // el === {item: {name: 'Chandler'},  index: 3}
          // item = {name: 'Monica'}
          return (
            <Text style={styles.listText}>
              {item.name} - {item.job}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fontBig: {
    fontSize: 45,
  },
  listText: {
    marginVertical: 50,
    fontSize: 30,
  },
});

export default ListScreen;

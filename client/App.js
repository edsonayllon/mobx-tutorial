import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react';
import BirdStore from './stores/BirdStore';
import AddBird from './components/AddBird';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider BirdStore={BirdStore}>
        <View style={styles.container}>
          <Text>Users</Text>
          <AddBird />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

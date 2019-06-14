import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { observer, inject } from 'mobx-react';
import Grocery from './Grocery';

@inject("groceryStore")
@observer
class GroceriesList extends Component {
  render() {
    const store = this.props.groceryStore;
    return (
      <View>
        <Text>Total: {store.numOfGroceries}</Text>
        <View>
          {store.groceries.map((g,index) =>  <Grocery key={index} name={g}/> )}
        </View>
      </View>
    );
  }
}

export default GroceriesList;
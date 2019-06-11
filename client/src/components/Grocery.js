import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { inject } from 'mobx-react';

@inject("groceryStore")
class Grocery extends Component {
  delete = () => {
    this.props.groceryStore.delete(this.props.name)
  }

  render() {
    return (
        <Button onClick={this.delete} title={this.props.name} />
    );
  }
}

export default Grocery;

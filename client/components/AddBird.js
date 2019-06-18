import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { inject, observer } from 'mobx-react';

class AddBird extends React.Component {
  state = {
    bird: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.BirdStore.addBird(this.state.bird);
    this.setState({ bird: '' })
  }

  render() {
    const { BirdStore } = this.props;
    console.log(this.props);
    return (
        <View>
          <Text style={{fontSize: 30}}>You have {BirdStore.birdCount} birds</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(bird) => this.setState({bird}) }
            value={this.state.bird}
            onSubmitEditing={this.handleSubmit}
          />
          <Button
            onPress={this.handleSubmit}
            title="Submit"
            color="#841584"
          />
          <View>
            {
              BirdStore.birds.map(bird =>  (
                <Text key={bird} >{ `\u2022 ${bird}` }</Text>
              ))
            }
          </View>
        </View>
    );
  }
}

export default inject("BirdStore")(observer(AddBird));

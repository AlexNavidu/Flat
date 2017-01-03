import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class buttonSocial extends Component {
  render() {

    return (

      <Button
        onPress={this.props.onPress}
        title={this.props.name || " "}
        color={this.props.color}
        backgroundColor={this.props.backgroundColor}
        />
    );
  }
};

const styles = StyleSheet.create({
  facebook: {
    backgroundColor: '#4e6bac',
  },
  instructions2: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

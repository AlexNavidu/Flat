import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class ButtonSocial extends Component {
  render() {
    return (
      <TouchableOpacity {...this.props} style={{backgroundColor: this.props.backgroundColor}}>
        { this.props.children }
      </TouchableOpacity>
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

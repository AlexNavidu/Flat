import React, { Component } from 'react';
import { StyleSheet, Text, View,} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import ButtonSocial from '../components/buttonSocial';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Flat Mobile App</Text>
          <Text style={styles.instructions}>Free ui kit</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.facebook}>
            <ButtonSocial name="Connect with Facebook" color="#ffffff"></ButtonSocial>
          </View>
          <View style={styles.twitter}>
            <ButtonSocial name="Connect with Twitter" color="#ffffff"></ButtonSocial>
          </View>
          <View style={styles.email}>
            <ButtonSocial name="Sign up with Email" color="#efad62"></ButtonSocial>
          </View>
        </View>
        <View style={styles.footer}>
           <Text style={styles.instructions}>
             {`Already have an account ?`}
             <Text style={styles.instructions2}>{` Sign in now`}</Text>
           </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efad62',
  },
  footer: {
    paddingBottom: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  facebook: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4e6bac',
    height: 60,
    marginBottom: 10
  },
  twitter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40c0ff',
    height: 60,
    marginBottom: 10
  },
  email: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 60,
    marginBottom: 10
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  instructions2: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

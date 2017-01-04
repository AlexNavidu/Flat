import React, { Component } from 'react';
import { StyleSheet, Text, View,} from 'react-native';

import { Actions } from 'react-native-router-flux';

import ButtonSocial from '../components/buttonSocial';
import Sign from './sign.scene.js';


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
            <ButtonSocial onPress={() => console.log('button is pressed')}>
              <Text style={Ss.buttonTitle}><Text style={Ss.buttonBoldTitle}>Connect with</Text> Facebook</Text>
            </ButtonSocial>
          </View>
          <View style={styles.twitter}>
            <ButtonSocial onPress={() => console.log('button is pressed')}>
              <Text style={Ss.buttonTitle}><Text style={Ss.buttonBoldTitle}>Connect with</Text> Twitter</Text>
            </ButtonSocial>
          </View>
          <View style={styles.email}>
            <ButtonSocial onPress={() => console.log('button is pressed')}>
              <Text style={[Ss.buttonTitle, {color: '#efad62'}]}><Text style={Ss.buttonBoldTitle}>Sign up with</Text> Email</Text>
            </ButtonSocial>
          </View>
        </View>
        <View style={styles.footer}>
           <Text style={styles.instructions}>
             {`Already have an account ?`}
             <Text onPress={()=>Actions.sign()} style={styles.instructions2}>{` Sign in now`}</Text>
           </Text>
        </View>
      </View>
    );
  }
};

const Ss = StyleSheet.create({
  buttonTitle: {
    color: '#fff',
    fontSize: 22
  },
  buttonBoldTitle: {
    fontWeight: '600'
  }
});

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

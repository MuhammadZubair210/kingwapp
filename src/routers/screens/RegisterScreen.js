import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

// import * as firebase from 'firebase';
import {firebase} from '../../config/firebaseConfig';

const db = firebase.default.database();

export default class App extends React.Component {
  state = {
    email: '',
    password: '',
    confirmpassword: '',
    name: '',
    phone: '',
  };

  signUp = () => {
    firebase.default
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        db.ref(`users/${u.user.uid}`)
          .set({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
          })
          .then(() => {
            this.props.navigation.goBack();
          })
          .catch((e) => {
            // Alert.alert(e.error);
          });
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message);
      });
  };

  checkPass = () => {
    if (this.state.password === this.state.confirmpassword) {
      this.signUp();
    } else {
      Alert.alert('password not matched');
    }
  };

  checkFields = () => {
    if (
      this.state.password !== '' &&
      this.state.confirmpassword !== '' &&
      this.state.email !== '' &&
      this.state.name !== ''
    ) {
      this.checkPass();
    } else {
      Alert.alert('please complete all fields');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Food App</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="white"
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Name..."
            placeholderTextColor="white"
            onChangeText={(text) => this.setState({name: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="white"
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password..."
            placeholderTextColor="white"
            onChangeText={(text) => this.setState({confirmpassword: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="phone no"
            placeholderTextColor="white"
            onChangeText={(text) => this.setState({phone: text})}
          />
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            this.checkFields();
          }}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

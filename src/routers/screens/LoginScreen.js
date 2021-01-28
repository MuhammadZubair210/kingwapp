import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {firebase} from '../../config/firebaseConfig';
const _firebase = firebase.default;
export default class App extends React.Component {
  state = {
    email: 'bbb@bbb.bbb',
    password: '111111',
  };

  login = () => {
    _firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.push('home');
      })
      .catch((e) => {
        Alert.alert(e.message);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Food App</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <TouchableOpacity onPress={() => this.login()} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.push('signup');
          }}>
          <Text style={styles.loginText}>Signup</Text>
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

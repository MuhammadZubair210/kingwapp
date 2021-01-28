import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {firebase} from '../../config/firebaseConfig';
const _firebase = firebase.default;

class App extends React.Component {
  state = {
    email: '',
    name: '',
    phone: '',
  };

  componentDidMount() {
    _firebase
      .database()
      .ref(`users/${_firebase.auth().currentUser.uid}`)
      .once('value', (v) => {
        console.log(v.val());

        this.setState({
          email: v.val().email,
          name: v.val().name,
          phone: v.val().phone ? v.val().phone : '',
        });
      });
  }
  render() {
    return (
      <>
        <View style={{padding: 10, marginTop: 50}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <View>
              <Image
                source={{
                  uri:
                    'data:image/png;base64,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',
                }}
                style={{width: 80, height: 80, borderRadius: 50}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: 12,
                  top: 10,
                }}>
                {this.state.name}
              </Text>
            </View>
            {/* <View>
              <Text
                style={{fontSize: 14, fontWeight: '500', textAlign: 'center'}}>
                55
              </Text>
              <Text style={{fontSize: 12, textAlign: 'center'}}>Followers</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: '90%',
                  padding: 10,
                  left: 10,
                  borderColor: 'silver',
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                    textAlign: 'center',
                  }}>
                  Follow
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>

          <View style={{marginTop: 20}}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
                padding: 5,
                borderColor: 'silver',
                borderRadius: 3,
              }}>
              <Text
                style={{fontSize: 12, fontWeight: '500', textAlign: 'center'}}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/profile2.png')}
                style={{width: 30, height: 30}}
              />
              <Text style={{fontSize: 13, marginLeft: 10}}>
                {this.state.name}
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/email.png')}
                style={{width: 30, height: 20}}
              />
              <Text style={{fontSize: 13, marginLeft: 10}}>
                {' '}
                {this.state.email}
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/phone2.png')}
                style={{width: 30, height: 30}}
              />
              <Text style={{fontSize: 13, marginLeft: 10}}>
                {this.state.phone}
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/website.png')}
                style={{width: 30, height: 30}}
              />
              <Text style={{fontSize: 13, marginLeft: 10}}> www.Here.com</Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({});

export default App;

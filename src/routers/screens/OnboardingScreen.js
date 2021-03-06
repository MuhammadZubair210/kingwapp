import React from 'react';
import { Image, Button, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => (
  <Button title = 'Skip' color = "#000000"/>);

const Next = ({...props}) => (
  <Button title = 'Next'color = "#000000"{...props}/>);

const Done = ({...props}) => (
  <Button title = 'Done'color = "#000000"{...props}/>);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent = {Skip}
      NextButtonComponent = {Next}
      DoneButtonComponent = {Done}
      onSkip = {() => navigation.navigate("login")}
      onDone = {() => navigation.navigate("login")}
      pages = 
      {[
        {
          backgroundColor: '#003f5c',
          image: <Image source = { require( `../../../assets/onboarding-img1.png`)} />,
          title: 'Step 1',
          subtitle: 'Purchase Food Product Online or Physical store'
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source = { require( '../../../assets/onboarding-img2.png' )} />,
          title: 'Step 2',
          subtitle: 'Scan with the App to Authenticate'
        },
      ]}
    />
  );
};

export default OnboardingScreen;
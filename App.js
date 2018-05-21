import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Actions, Router, Reducer, Scene } from 'react-native-router-flux';
import SplashScreen from './App/Components/SplashComponent/SplashScreen';
import AppIntro from "./App/Components/AppIntro/AppIntro"
import ContactComponent from "./App/Components/ContactComponent/ContactComponent"
import ServicePreferences from "./App/Components/ServicePreferenceComponent/ServicePreferenceComponent"
import ServicePreferencesDecided from "./App/Components/ServicePreferenceComponent/ServiceComponentDecideCompoenent"
import ChildInformationSize from "./App/Components/ChildInformation/ChildInformationSize"
// import AppGlobalConfig from './App/AppGlobalConfig/AppConfig';

const scenes = Actions.create(
  <Scene key="root">

    <Scene key="SplashScreen" component={SplashScreen}
      hideNavBar={true}
      
    />

 <Scene key="appIntro" component={AppIntro}
      hideNavBar={true}
      initial
    />

<Scene key="contact" component={ContactComponent}
hideNavBar={true}
/>

<Scene key="servicePreferences" component={ServicePreferences}
      hideNavBar={true}
  
    />

    <Scene key="servicePreferencesdecided" component={ServicePreferencesDecided}
      hideNavBar={true}
  
    />

     <Scene key="childSizeInformation" component={ChildInformationSize}
      hideNavBar={true}
  
    />

</Scene>


   

    
);

export default class App extends Component {

  constructor() {
    super();
    context = this;
    this.state = {
      initLoaded: false,
    };
    // GLOBAL.AppGlobalConfig = AppGlobalConfig;

    // AppGlobalConfig.init().finally(() => {
    //   SplashScreen.hide();
    //   this.setState({
    //     initLoaded: true,
    //   });
    // });
  }

  render() {
    return (
      <Router
        scenes={scenes}
      />
    );
  }
}

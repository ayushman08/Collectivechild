import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert,
    Platform,
    TextInput,
    ScrollView,
    AsyncStorage,
    ImageEditor,
    Button,
    KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Avatar, Icon } from 'react-native-elements';
import BottomNavigation, {
    FullTab
  } from 'react-native-material-bottom-navigation'

import DashBoardScreenStyle from './DashBoardScreenStyle'


import CommonStyles from '../../CommonStyle/CommonStyle';
import Colors from '../../Constants/Colors';
import Strings from '../../Constants/Strings';
import ImagePath from '../../Constants/ImagePath';
import NavDrawerStyle from './NavDrawer/NavDrawerStyle'
import ProfileScreen from '../ProfileComponent/ProfileScreen'



export default class DashBoardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerTitle: 'Home'
        }
    }

    tabs = [
        {
            key: 'games',
            icon: 'gamepad-variant',
            barColor: Colors.WHITE,
            pressColor: 'rgba(255, 255, 255, 0.16)'
          },
          {
            key: 'movies-tv',
            icon: 'movie',
            barColor: 'Colors.WHITE',
            pressColor: 'rgba(255, 255, 255, 0.16)'
          },
          {
            key: 'music',
            icon: 'music-note',
            barColor: 'Colors.WHITE',
            pressColor: 'rgba(255, 255, 255, 0.16)'
          }
      ]

    _showSelectedScreen() {
        return (
            <View style={DashBoardScreenStyle.dashBoardViewContainer}>
                {this.navBar()}
                {this.staticView()}
                
                 

            </View>
        );
    }

    bottomNavigationView(){
        return(
            <BottomNavigation
            onTabPress={newTab => this.setState({ activeTab: newTab.key })}
            renderTab={this.renderTab}
            tabs={this.tabs}
            style={DashBoardScreenStyle.bottomNavigationStyle}

          />


        );
       
    }

    staticView() {

        return(<ProfileScreen/>);

        
    }

    navBar() {

        return (

            <View style={NavDrawerStyle.toolBarStyle}>

                <Text style={NavDrawerStyle.headerTitle}>{this.state.headerTitle}</Text>

                <Icon
                    name='align-left'
                    type='font-awesome'
                    color={Colors.GRAY}
                    onPress={() => this.openControlPanel()} />

            </View>
        );
    }

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />
      )
    
      renderTab = ({ tab, isActive }) => (
        <FullTab
          isActive={isActive}
          key={tab.key}
          label={tab.label}
          renderIcon={this.renderIcon(tab.icon)}
        />
      )

    render() {
        return (
            <View style={CommonStyles.container}>

                {this._showSelectedScreen()}
                {this.bottomNavigationView()} 
             

            </View>
        );
    }
}
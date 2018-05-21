import React, { Component } from 'react';

import {
    Image,
    View,
    Text,
    AsyncStorage,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import {Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from "../Common/Header"
import { TextField } from 'react-native-material-textfield';
const { width, height } = Dimensions.get('window');

export default class ContactComponent extends Component {
     constructor() {
        super();
        this.state = {
     };
    }

    
    goBack(){
    Actions.pop()
    }
    render() {
        return (
          <View style={{flex:1}}>
          <View style={styles.viewStyle}>
              <Text style={{fontSize: 18}}>   CONTACT INFORMATION</Text>
          </View>
          <ScrollView style={{flex:1}}>
          <Text style={{textAlign:"center",color:"black",fontWeight:"600",margin:50}}>WHAT'S YOUR NAME AND EMAIL ADDRESS ?</Text>
          <View style={{justifyContent:"center",alignItems:"center",marginBottom:30}}>
          <Image source={require('../../Assets/email.png')}/>
          </View>

          <View style={{flexDirection:"row",flex:1}}>
          <View style={{margin:25,flex:1}}>
          <TextField
            baseColor="#84432d"
            tintColor="#231f20"
            textColor="#231f20"
            label='FIRST NAME'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onChangeText={(email)=>{this.setState({email})}} />
            </View>

            <View style={{margin:25,flex:1}}>
            <TextField
            baseColor="#84432d"
            tintColor="#231f20"
            textColor="#231f20"
            label='LAST NAME'
            // keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onChangeText={(email)=>{this.setState({email})}} />
            </View>

            </View>

            <View style={{margin:25}}>
            <TextField
         
            baseColor="#84432d"
            tintColor="#231f20"
            textColor="#231f20"
            label='EMAIL'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onChangeText={(email)=>{this.setState({email})}} />
            </View>

             <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
             <Button rounded  style={{width:width/1.4,justifyContent:"center",margin:15,alignItems:"center",backgroundColor:"#84432d"}} onPress={()=>{Actions.servicePreferences()}}>
             <Text style={{color:"white",textAlign:"center",fontWeight:"400", fontSize: 16}}>NEXT</Text>
             </Button>
             </View>
             
             <TouchableWithoutFeedback onPress={this.goBack}>
             <View>
             <Text style={{textAlign:"center"}}>Home</Text></View>
             </TouchableWithoutFeedback>

            </ScrollView>
         
         </View>  

         
        );
    }

}


const styles = {
    viewStyle: {
      backgroundColor: '#F8F8F8',
       justifyContent: 'center',
    //   alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    }
  
  };
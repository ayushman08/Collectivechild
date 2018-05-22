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

export default class TalkToUs extends Component {
     constructor() {
        super();
        this.state = {
     };
    }

    render() {
        return (
          <View style={{flex:1}}>
         <Text Style={{textAlign: "center",}}></Text>
         <View  style={{marginTop:100}}>
         <View style={{flex:1}}>
          <TextField
            baseColor="#84432d"
            tintColor="#231f20"
            textColor="#231f20"
            label='Feel Free to comments'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onChangeText={(comment)=>{null}} />
            </View>
          </View>
          <View style={{position:"absolute", bottom:80}}> 
          <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
             <Button rounded  style={{width:width/1.5,justifyContent:"center",margin:15,alignItems:"center",backgroundColor:"#84432d"}} onPress={()=>{Actions.servicePreferences()}}>
             <Text style={{color:"white",textAlign:"center",fontWeight:"400", fontSize: 16}}>NEXT</Text>
             </Button>
             </View>
             
             <TouchableWithoutFeedback onPress={null}>
             <View>
             <Text style={{textAlign:"center"}}>Previous</Text></View>
             </TouchableWithoutFeedback>

          </View>
         
         </View>  

         
        );
    }

}


const styles = {

  
  };
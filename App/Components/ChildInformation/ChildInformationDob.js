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
}  from 'react-native';
import {Button } from 'native-base';
import { TextField } from 'react-native-material-textfield';

import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
import Header from "../Common/Header"

export default  class  ChildInformationDob  extends Component {

    constructor() {
        super();
        this.state = {
         };
    }

   componentWillMount() {
   }
   render() {
        return (
         <View style={{flex:1}}>
         <Header headerText={"CHILD INFORMATION"}/>
          <Text style={{textAlign:"center",marginTop:40,marginBottom:40,fontSize:18,fontWeight:"400"}}> ENTER YOUR CHILD INFORMATION</Text>
           <View style={{flex:1}}>

            <View style={{marginTop:20, marginRight:20,marginLeft:20}}>
            <TextField
            baseColor="#84432d"
            tintColor="#231f20"
            textColor="#231f20"
            label='CHILD NAME'
            // keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onChangeText={(childname)=>{null}} />
            </View>
           <Text style={{marginLeft:20,
          fontSize:18,margin:20}}> is a</Text>
           <View style ={{flexDirection:"row"}}>
           <View style={styles.viewStyle}>
           <Image source={require('../../Assets/kids.png')}/>
           </View>

          <View style={styles.viewStyle}>
          <Image source={require('../../Assets/kids.png')}/>
          </View>
          </View>

         <View style={{marginTop:20,flexDirection:"row"}}>
         <Text style={{color:"black",marginTop:20,marginLeft:20,fontSize:18}} >Date of Birth </Text>
         <Text style={{color:"grey",marginTop:20,fontSize:18}}>(DD/MM/YYYY)</Text>
         </View>
         
       
          </View>
          </View>
    
         
        );
    }

}



const styles = StyleSheet.create({

   imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
  },
  
  viewStyle: {
    backgroundColor: '#F8F8F8',
     justifyContent: 'center',
  //   alignItems: 'center',
   
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
  });
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

import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');

export default  class  ChildInformationSize  extends Component {

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
            <View style={styles.viewStyle}>
            <Text style={{fontSize: 18}}>   CHILD INFORMATION</Text>
            </View>
            <ScrollView style={{flex:1}}>
           
            <Text style={{textAlign:"center",color:"black",fontWeight:"600",marginTop:50,marginBottom:20,marginRight:40,marginLeft:40}}>  SELECT SIZE CHILD IS CURRENTLY WEARING ?</Text>
            
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <View style={styles.viewStyle}><Text> 0-3 </Text></View>
            </View>
        
        {/* FlatList Use for Dyanamic size */}
     


          
           <Text style={{textAlign:"center",color:"black",fontWeight:"600",marginLeft:30,marginTop:16,marginBottom:16}}>HOW WOULD YOU CHARACTERIZE YOUR CHILD PROPORTIONS ?</Text>
           

          <View style={{justifyContent:"center",alignItems:"center"}}>
          <View style={styles.cardStyle}>
          <View style={{paddingLeft:30,paddingRight:30}}>
          <Image style={{height:42,width:20}} source={require('../../Assets/Average.png')}/>
          </View>
          <Text style={{color:"black",fontWeight:"100"}}>Average</Text>
          </View> 

          <View style={styles.cardStyle}>
          <View style={{paddingLeft:30,paddingRight:30}}>
          <Image style={{height:42,width:20}} source={require('../../Assets/Pudgy.png')}/>
          </View>
          <Text style={{color:"black",fontWeight:"100"}}>Pudgy</Text>
          </View>

         <View style={styles.cardStyle}>
         <View style={{paddingLeft:30,paddingRight:30}}>
         <Image style={{height:42,width:20}} source={require('../../Assets/Petite.png')}/>
         </View>
         <View>
         <Text style={{color:"black",fontWeight:"100"}}>Petite</Text></View>
        </View>
        </View>

             <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
             <Button rounded  style={{width:width/1.4,justifyContent:"center",margin:15,alignItems:"center",backgroundColor:"#84432d"}} onPress={()=>{null}}>
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



const styles = StyleSheet.create({

   imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
     justifyContent: 'center',
    //alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  cardStyle: {
    backgroundColor: '#F8F8F8',
    // justifyContent: 'center',
    alignItems: 'center',

   
    flexDirection: "row",
    paddingTop:20,
    paddingBottom:20,
    width:"85%",
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  
  },
  cardageStyle: {
    backgroundColor: '#F8F8F8',
     justifyContent: 'center',
    //alignItems: 'center',
    height: 30,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
  });
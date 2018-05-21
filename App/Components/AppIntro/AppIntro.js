import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Modal,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    ImageBackground,
    ScrollView,
    Image
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Button } from 'native-base';
import { TextField } from 'react-native-material-textfield';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');

//brown light color ="#662200"
//brown dark color =#331100
const styles = StyleSheet.create({
  image: {
  // height: 200,
 },
 textStyle1:{
   fontWeight: "400",
   fontSize: 22,
   color:"black"
 },
 imgBackground: {
  width:width,
  height: height,
  flex: 1 
}
});
 
const slides = [
  {
    key: 'somethun',
    text1:'SIGN UP',
    textStyle1: styles.textStyle1,
    textStyle2:"",
    text:"\n\nComplete our style survey and you'll will receive a personal stylist",
    image: require('../../Assets/Intro1.png'),
    imageStyle: styles.image,
    backgroundColor: 'white',
  },
  {
    key: 'somethun-dos',
    text1:'TRY ON',
    textStyle1: styles.textStyle1,
    textStyle2:"",
    text: '\n\nReceive a selection of handpicked clothing for your child and take 7 days to try everything on.',
    image: require('../../Assets/Intro2.png'),
    imageStyle: styles.image,
    backgroundColor: 'white',
  },
  {
    key: 'somethun1',
    text1:'SIGN UP',
    textStyle1: styles.textStyle1,
    textStyle2:"",
    text: "\n\nLog in , Check out and leave feedback.Return the rest and that's it! ",
    image: require('../../Assets/Intro3.png'),
    imageStyle: styles.image,
    backgroundColor: 'white',
  }
];
 
export default class App extends Component {
   state = {
    modalVisible: false,
    password:"",
    email:"",
    passwordComponentVisible:false
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
 
 
   _onDone = () => {
     //changed
   Actions.contact();
  }

  onSkip=()=>{
    //changed
     this.setModalVisible(true);
  }


  render() {
    return (
       // <ScrollView style={{flex:1}}>
       <View style={{flex:1}}>
       <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
        showSkipButton
        onSkip={this.onSkip}
        />
        <View  style={{position:"absolute",bottom:100,left:0,right:0,justifyContent:"center",alignItems:"center"}}>
        <TouchableWithoutFeedback   onPress={() => {null
               //changed
                  this.setState({modalVisible:true})
                }}>
              <View style={{flexDirection:"row"}}><Text>Already have account ? </Text><Text style={{fontWeight:"bold",color:"black"}}>Login</Text>  </View></TouchableWithoutFeedback>   
        </View>

        {/* Login Modal    */}
         <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            // alert('Modal has been closed.');
          }}>
          <ScrollView style={{flex:1}}>
           <ImageBackground style={ styles.imgBackground } 
                 resizeMode='stretch' 
                 source={require('../../Assets/bg_login.png')}>
              <View style={{flex:1}}>
              <View style={{justifyContent:"center",alignItems:"center",marginTop:30}}>
              <Text style={{fontSize:20,margin:30}}>Welcome back to,</Text>
              </View>
              <View style={{justifyContent:"center",alignItems:"center"}}>
              <Image
               source={require('../../Assets/logo.png')} /></View>
             <View style={{margin:25}}>
            <TextField
            baseColor="#662200"
            tintColor="black"
            textColor="grey"
            label='EMAIL'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onChangeText={(email)=>{this.setState({email})}} />
            </View>

            <View style={{margin:25}}>
            <TextField
             fontWeight="100"
             secureTextEntry
             baseColor="#662200"
             tintColor="black"
             textColor="black"
             label='PASSWORD'
            // value={this.state.value}
            onChangeText={(password)=>{this.setState({password})}} />
            </View>
      
             <View style={{flexDirection:"row",justifyContent:"flex-end",marginRight:20,marginHorizontal:20}}>
             <TouchableWithoutFeedback onPress={() => {
                 this.setState({modalVisible:false, passwordComponentVisible:true})
                }}><View><Text style={{fontWeight:"400",color:"#331100"}}>Forgot Password ?</Text></View></TouchableWithoutFeedback> 
             </View>
             <Button rounded  dark style={{width:width/1.1,justifyContent:"center",margin:15}} onPress={()=>{alert("Login")}}>
             <Text style={{color:"white",textAlign:"center",fontWeight:"400", fontSize: 16}}>LOGIN</Text>
             </Button>

             <Text style={{textAlign:"center",margin:7,fontWeight:"400"}}>or</Text>
        
              <Button rounded style={{width:width/1.1,justifyContent:"center",margin:15,backgroundColor:"#3b5998"}} onPress={()=>alert("facebook login")}> 
              <Text style={{color:"white",textAlign:"center",fontWeight:"400", fontSize: 16}}>CONNECT WITH FACEBOOK</Text>
              </Button>
              
              <TouchableWithoutFeedback
                style={{flexDirection:"row"}}
                 onPress={() => {
                  null
                }}>
                <View style={{flexDirection:"row",justifyContent:"center"}}><Text style={{textAlign:"center",color:"black"}}>{"Don't have an account ? "}</Text><Text style={{fontWeight:"400",color:"#331100"}}>Sign Up</Text></View>   
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                 onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
               <View style={{margin:20}}><Text style={{textAlign:"center",color:"#331100"}}>Back</Text></View>
               </TouchableWithoutFeedback>
            </View>
        </ImageBackground>
        </ScrollView>
        </Modal>

        {/* Forgot Password */}
         <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.passwordComponentVisible}
          onRequestClose={() => {
            // alert('Modal has been closed.');
          }}>
         
          <ImageBackground style={ styles.imgBackground } 
                 resizeMode='stretch' 
                 source={require('../../Assets/bg_login.png')}>
              <View style={{flex:1}}>
              <View style={{justifyContent:"center",alignItems:"center",marginTop:30}}>
              <Text style={{fontSize:20,margin:30}}>Forgot Password</Text>
              </View>
              <View style={{justifyContent:"center",alignItems:"center"}}>
              <Image
               source={require('../../Assets/logo.png')} /></View>
             <View style={{margin:25}}>
            
            <TextField
            baseColor="#662200"
            tintColor="black"
            textColor="grey"
            label='EMAIL'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onChangeText={(email)=>{this.setState({email})}} />
            </View>

  
             <Button rounded  dark style={{width:width/1.1,justifyContent:"center",margin:15}} onPress={()=>{alert("Login")}}>
             <Text style={{color:"white",textAlign:"center",fontWeight:"400", fontSize: 16}}>SUBMIT</Text>
             </Button>

          <TouchableWithoutFeedback
                 onPress={() => {
                 this.setState({passwordComponentVisible:false})
                 
                }}>
               <View style={{margin:20}}><Text style={{textAlign:"center",color:"#331100"}}>Back</Text></View>
               </TouchableWithoutFeedback>
            </View>
        </ImageBackground>
        
        </Modal>
 </View>
   

    );
  }
}
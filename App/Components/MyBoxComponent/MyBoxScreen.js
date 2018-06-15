import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Image,
    View,
    Text,
    AsyncStorage,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback,
    Modal,
    FlatList,

}  from 'react-native';
import {
    clearResponse
} from "./MyBoxAction";
import {
    getKidsBoxList,
} from "../../Action/ActionCreators";
const window = Dimensions.get('window');
import Header from '../Common/Header';
import style from '../SizeAndProportionComponent/SizeAndProportionStyle'
import Colors from '../../Constants/Colors';
import Strings from '../../Constants/Strings';
import HeaderHome from '../Common/HeaderHome';
import {Button } from 'native-base';


class MyBoxScreen extends Component{

    constructor(props){
        super(props);
        this.state={

        }

        this.handleSelectedServiceSize = this.handleSelectedServiceSize.bind(this);
        //this.checkout = this.checkout.bind(this)
    }
    handleSelectedServiceSize(){
        alert("hii")
    }
    componentWillMount(){
        this.getUserData()
    }

    getUserData(){
        AsyncStorage.getItem("UserInfo").then((value) => {
            console.log(value);
    
          if (value) {
              var userData = JSON.parse(value);
              this.setState({userInfo:userData});
              this.getKidsStyleBoxList()
            
          }
      }).done();
    }

    getKidsStyleBoxList(userData){
        postData ={
            _id:"5b1e3f8ca97a5c420319b07d",
           
         }
        this.props.getKidsBoxList(postData);

    }

    render(){
        return(
            <View style={style.mainContainer}>
                <HeaderHome/>
                <View style={style.titleStyleView}>
                    <Text style={[style.titleStyle,{fontWeight:"100"}]}>{Strings.BOX_SCREEN_TITLE}</Text>
                </View>
                <View style={{flex:1}}>
                <View style={{flex:0.7}}>
                    <View style={styles.viewStyle}>
                    <View style={style.headerSection}>
                    <View style={{flex:1,justifyContent:'center',marginLeft:10}}>
                    <Text style={[style.textStyle,{fontSize:20}]}>JOHN</Text>
                    <Text style={[style.subTitle]}>Shirt with blue color</Text>
                    </View>
                    <Text style={styles.priceStyle}>$150</Text>    
                    </View>
                    <View style={{flex:0.6}}>
                   <Image source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}} style={style.imageStyle} />
                    </View>
                  <View style={style.headerSection}>
                  <View style={{flex:1}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={[style.textStyle,{fontSize:15,color:Colors.TEXT_COLOR_NEW}]}>{Strings.QUANTITY}</Text>
                    <Text style={[style.textStyle,{marginLeft:10}]}>20</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={[style.subTitle,{fontSize:15}]}>{Strings.SIZE}</Text>
                    <Text style={[style.textStyle,{marginLeft:10,fontSize:15}]}>20</Text>
                    </View>
                    
                </View> 
                <Button rounded  style={{width:80,height:30,marginTop: 10,padding:10,justifyContent:'center',backgroundColor:Colors.BUTTON_COLOR}} onPress={()=>this.sendBrandSelection()}>
                <Text style={{color:"white",textAlign:"center",fontWeight:"400", fontSize: 16}}>{Strings.KEEP}</Text>
                 </Button>
                 <Button rounded  style={{width:80,height:30,padding:10,marginTop: 10,marginLeft:10,justifyContent:'center',alignItems:'center',backgroundColor:Colors.BUTTON_COLOR}} onPress={()=>this.sendBrandSelection()}>
                <Text style={{color:"white",textAlign:"center",fontWeight:"400", fontSize: 16}}>{Strings.RETURN}</Text>
                 </Button>
                  </View>    
               
                    </View>
                </View>
                <View style={{flex:0.3,marginBottom:10}}>
                <Text style={{textAlign:'center',fontSize:20}}>Share your experience</Text>
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{margin:10}}>
                    <Text>Size</Text>
                </View>
                <View style={styles.optionStyle}>
                    <Text>Small</Text>
                </View>
                <View style={styles.optionStyle}>
                    <Text>Perfect</Text>
                </View> 
                <View style={styles.optionStyle}>
                    <Text>Big</Text>
                </View>        
                </View> 
                <View style={{flexDirection:'row'}}>
                <View style={{margin:10}}>
                    <Text>Style</Text>
                </View>
                <View style={styles.optionStyle}>
                    <Text>Love</Text>
                </View>
                <View style={styles.optionStyle}>
                    <Text>Just Ok</Text>
                </View>
                <View style={styles.optionStyle}>
                    <Text>Dislike</Text>
                </View>         
                </View> 
                <View style={{flexDirection:'row'}}>
                <View style={{margin:10}}>
                    <Text>Price</Text>
                </View>
                <View style={styles.optionStyle}>
                    <Text>Low</Text>
                </View>
                <View style={styles.optionStyle}>
                    <Text>Perfect</Text>
                </View>  
                <View style={styles.optionStyle}>
                    <Text>High</Text>
                </View>       
                </View>
                </View>   
                </View>        
                </View>    
              
                  
            </View>   
        );
    }
}

const styles = {
    viewStyle: {
      backgroundColor: 'white',
      flex:1,
      width:null,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      elevation: 5,
      flexDirection:'column',
      marginLeft:30,
      marginRight:30,
      marginTop:20,
      marginBottom:20,
      borderRadius:10,
      justifyContent:'space-between'

    },
    priceStyle:{
        marginRight:10,
        marginTop:10,
        color:'#E3AB73',
        fontWeight:'600',
        fontSize:18
    },
    optionStyle:{
        margin:10,
        borderWidth:1,
        borderRadius:20,
        padding:5,
        width:70,
        justifyContent:'center',
        alignItems:'center'
        
    }
  
  };

  function mapStateToProps(state) {
    console.log('mapStateToProps= ', JSON.stringify(state));
    return {
        myBoxReducer: state.myBoxReducer
    }
}


export default connect(
    mapStateToProps,
    {
   
        getKidsBoxList,
        clearResponse
    }

)(MyBoxScreen)
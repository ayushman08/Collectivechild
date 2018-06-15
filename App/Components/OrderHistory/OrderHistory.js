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
    TouchableHighlight,
    FlatList
} from 'react-native';

import {
    clearResponse,
    // selectOption
} from "./OrderHistoryAction";
import {
    getOrderHistory,
} from "../../Action/ActionCreators";

import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
import Header from '../Common/Header';
import Strings from '../../Constants/Strings';
import Colors from '../../Constants/Colors';

// import AppIntro from "../AppIntro/AppIntro"
import Spinner from 'react-native-spinkit';
const window = Dimensions.get('window');
import Accordion from 'react-native-collapsible/Accordion';
import { Dropdown } from 'react-native-material-dropdown';

var data = "";

let spinnerData = [{
    value: '2017',
  }, {
    value: '2018',
  } ];


 class OrderHistory extends Component {

    constructor() {
        super();
        this.state = {
         userInfo:{},
        //  isSpinnerVisible:false,
         selectedoption:"",
         onPressedCon: false,
         onPressedstyle: false,
         onPressedgift:false,
         userData:{},
         productList:[],
         isSpinnerVisible:true,
         
        };
    }

componentWillMount() {
    //  this.getUserData();
 this.props.getOrderHistory("5954972e2262f132ea97a12f")
 }


//  getUserData(){
//     AsyncStorage.getItem("UserInfo").then((value) => {
//         console.log(value);

//       if (value) {
//           var userData = JSON.parse(value);
//           this.setState({userInfo:userData});
//           this.getOrderList()
//       }
//   }).done();

// }
 

// getOrderList(){
//     // postData = {
//     //          userId:this.state.userInfo._id,
//     //          key:"5954972e2262f132ea97a12f"
//     //         //  userId:"5b1e3e5aa97a5c420319b07b",
//     //         //  kid_no:1
//     // }
   
//     this.props.getOrderHistory("5954972e2262f132ea97a12f")
//   }





//  orderDetail(){}

// getOrderList(){
//     postData = {
//              userId:this.state.userInfo._id,
//             //  userId:"5b1e3e5aa97a5c420319b07b",
//              kid_no:1
//     }
   
//     this.props.getStyleList(postData)

componentWillReceiveProps(nextProps) {
    if (
        nextProps.OrderHistoryReducer.orderListRes != undefined &&
        nextProps.OrderHistoryReducer.orderListRes != ""
    ) {

        this.setState({isSpinnerVisible:false})
        if (nextProps.OrderHistoryReducer.orderListRes.messageId == 200) {
            // alert("Hello")
            // this.setState({ product: nextProps.OrderHistoryReducer.data,})
           
            //  data=nextProps.OrderHistoryReducer.orderListRes.data[0].products
             this.setState({productList: nextProps.OrderHistoryReducer.orderListRes.data})
            // alert(JSON.stringify(data))
            // console.log("==== Profile Response =====", JSON.stringify(nextProps.ProfileRerducer.data.data));
        } else {
            alert("Invalid Credential");
        }
    }
}
// }


// componentDidUpdate(){
//     // alert(JSON.stringify(this.props.OrderHistoryReducer.orderListRes.data))
//     console.log("Response>>>>"+JSON.stringify(this.props.OrderHistoryReducer.orderListRes));
//      if(this.props.OrderHistoryReducer.orderListRes!=''){
//     //    this.setState({isSpinnerVisible:false})
//        if(this.props.OrderHistoryReducer.orderListRes.status==="success"){
//             //    alert(JSON.stringify(this.props.OrderHistoryReducer.orderListRes.data))
//               data = this.props.OrderHistoryReducer.orderListRes.data
//             //   this.setState({productList:data[0].products})

//             //   alert(JSON.stringify(this.state.productList))
//             //    this.setState({})
        
//               // this.setState({signUpData:this.props.orderHistoryReducer.orderListRes.data})
              
//             //    AsyncStorage.setItem("UserInfo", JSON.stringify(this.props.OrderHistoryReducer.orderListRes.data));
//                // Actions.servicePreferences({type:"reset"})

//             //    Actions.orderHistory({type:"reset"})
//        }else{
//            alert(this.props.OrderHistoryReducer.orderListRes.message);
//        }
//         // this.props.clearResponse();
//    }
   
// }




 goBack(){
    // Actions.contact();
 }

// 
//  goToIntroScreen(){
//     Actions.appIntro({type:'reset'})
//  }




// _renderItem(item,index){
        
//     return (
//   <Text>{item.content}</Text>
  
//     )
// }

// _renderItem(item){
//     return (
//         <TouchableWithoutFeedback onPress={() => null}>
//            <Text>{item.name}</Text>
//         </TouchableWithoutFeedback>
//     )
// }


// _renderSectionTitle(section) {
//     return (
//       <View style={styles.content}>
//         <Text>{section.content}</Text>
//       </View>
//     );
//   }
 
  _renderHeader(item) {
    return (

        
            <View >

           <View style={styles.container}> 
           <View style={{marginLeft:20,marginRight:20}}>
           <Text style={{fontSize:20}}>{"JOHN"}</Text> 
           </View>

          <View style={{flexDirection:"row",marginLeft:20,marginRight:20}}>
         <Text>Processing</Text> <Text> 20May 2018</Text>
        </View>
        </View>
        <View>

         <View style={{marginLeft:20,marginRight:20}}> 
          <Text > {"Shirt with blue color"}</Text></View>
        </View>
    

           <View style={styles.container}>
           <View style={{flexDirection:"row",marginLeft:20}}>
           <Text >{" Qunatity " +"2"}</Text> <Text >{" Size "+ "0-3"}</Text>
           </View>

        <View style={{flexDirection:"row",marginRight:20}}>
        <Text style={{color:"#bc9f95",fontSize:20}}>{"$"}</Text> <Text style={{color:"#bc9f95",fontSize:20}}>{"150"}</Text>
       </View>
       </View>
       <View style={{justifyContent:"center",alignItems:"center"}}>
       <View style={{backgroundColor:"#bc9f95",height:1,width :"92%",marginTop:10, paddingLeft:20,paddinRight:20}}/></View>
       </View>

   
    );
  }
 
    _renderContent(content){
     return (
        //  <Text>{"HELLO"}</Text>
                 <View>

                    <FlatList
                    data={content.products}
                    renderItem={({item}) => 

                   
         <View >
        <View style={styles.containerStyle}>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri:item.product_image }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{item.vendor_name}</Text>
          <Text>{item.product_style}</Text>

          <View style={{ flexDirection: 'row' }}>
          <Text>{" Qunatity " +item.product_qty}</Text>
          <View style={{ height: 15, width: 1 ,backgroundColor:"black",marginLeft:10,marginRight:10}} />
           <Text>{" Size "+ item.product_size}</Text>
          </View>
        </View>

        <View style={{ position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center', top: 30 }}>
        <Text style={{color:"#bc9f95",fontSize:10}}>{"$"}</Text> <Text style={{color:"#bc9f95",fontSize:20}}>{item.sub_total}</Text>
          {/* <Text>{artist}</Text> */}
          
        </View>
      </View>
                        {/* <View>
                        <View style={styles.container}> 
                        <View style={{justifyContent:"center",alignItems:"center"}}>
                        <Image style={{height:60,width:60,marginTop:100}} source={{uri:item.product_image}} />   </View>
                        <View style={{marginLeft:20,marginRight:20}}>
                        <Text style={{fontSize:20}}>{item.vendor_name}</Text> 
                        </View>
             
                       <View style={{flexDirection:"row",marginLeft:80,marginRight:20}}>
                       <Text> 20May 2018</Text>
                      </View>
                     </View>

                     <View>
                     <View style={{marginLeft:80,marginRight:20}}> 
                       <Text > {item.product_style}</Text></View>
                     </View>
                 
             
                        <View style={styles.container}>
                        <View style={{flexDirection:"row",marginLeft:80}}>
                        <Text >{" Qunatity " +item.product_qty}</Text> <Text >{" Size "+ item.product_size}</Text>
                        </View>
             
                     <View style={{flexDirection:"row",marginRight:20}}>
                     <Text style={{color:"#bc9f95",fontSize:20}}>{"$"}</Text> <Text style={{color:"#bc9f95",fontSize:20}}>{item.sub_total}</Text>
                    </View>
                    </View>
                
                     </View> */}
                    {/* <View style={{justifyContent:"center",alignItems:"center"}}>
                    <View style={{backgroundColor:"#bc9f95",height:1,width :"92%",marginTop:10, paddingLeft:20,paddinRight:20}}/></View> */}
                    </View>
                   
             } 
                        
                    />

<View >
<View style={styles.container}> 
<View style={{marginLeft:20,marginRight:20}}>
<Text style={{color:"black"}}>{"Billing Address"}</Text> 
</View>

<View style={{flexDirection:"row",marginLeft:20,marginRight:20}}>
<Text>{"Billing Address"}</Text> 
</View>
</View>



<View style={styles.container}>
<View style={{marginLeft:20}}>
<Text >{"Shipping Address"}</Text>
</View>

<View style={{marginRight:20}}>
<Text style={{color:"#bc9f95"}}>{"shipping Address"}</Text> 
</View>
</View>


<View style={styles.container}>
<View style={{marginLeft:20}}>
<Text >{"Subtotal"}</Text>
</View>

<View style={{flexDirection:"row",marginRight:20}}>
<Text style={{color:"#bc9f95",fontSize:20}}>{"$"}</Text> <Text style={{color:"#bc9f95",fontSize:20}}>{"125"}</Text>
</View>
</View>

<View style={styles.container}>
<View style={{marginLeft:20}}>
<Text >{"MemberShip fee"}</Text>
</View>

 <View style={{flexDirection:"row",marginRight:20}}>
        <Text style={{color:"#bc9f95",fontSize:20}}>{"$"}</Text> <Text style={{color:"#bc9f95",fontSize:20}}>{"125"}</Text>
</View>
</View>

<View style={styles.container}>
<View style={{marginLeft:20}}>
<Text >{"-15%"}</Text>
</View>

 <View style={{flexDirection:"row",marginRight:20}}>
        <Text style={{color:"#bc9f95",fontSize:20}}>{"$"}</Text> <Text style={{color:"#bc9f95",fontSize:20}}>{"00"}</Text>
</View>
</View>

<View style={styles.container}>
<View style={{marginLeft:20}}>
<Text >{"Tax"}</Text>
</View>

 <View style={{flexDirection:"row",marginRight:20}}>
        <Text style={{color:"#bc9f95",fontSize:20}}>{"$"}</Text> <Text style={{color:"#bc9f95",fontSize:20}}>{"00"}</Text>
</View>
</View>

<View style={styles.container}>
<View style={{marginLeft:20}}>
</View>

 <View style={{flexDirection:"row",marginRight:20,backgroundColor:"black"}}>
 <Text style={{color:"white",fontSize:20,paddingRight:50,padding:10}}>{"Total"}</Text><Text style={{color:"white",fontSize:10,padding:10}}>{"$"}</Text> <Text style={{color:"white",fontSize:20,padding:10}}>{"150"}</Text>
</View>
</View>

<View style={{justifyContent:"center",alignItems:"center"}}>
<View style={{backgroundColor:"#bc9f95",height:1,width :"92%",marginTop:10, paddingLeft:20,paddinRight:20}}/></View>
</View>

 </View>
         );
      
   
  }


  render() {
        return (
           <View style={{flex:1,backgroundColor:Colors.BACKGROUND_COLOR_GENERAL}}>

           <Header headerText={Strings.ORDER_HISTORY} />
   
           <ScrollView>
          <View style={styles.container}>
           <View>
           <Text style={{color:"#bc9f95",marginLeft:20}}>{"This Year"}</Text> 
           </View>

          <View style={{width:200}}>
          <Dropdown
          label='Select Year'
          data={spinnerData}
           />

        </View>
        </View>
        <View style={{flex:1}}>

        <Accordion
        sections={this.state.productList}
        // renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        touchableComponent={TouchableWithoutFeedback}
        />
      </View>
      </ScrollView>


           {/* <FlatList
                style ={{marginTop:20}} 
                data={this.state.productList}
                //  numColumns={2}
                //  contentContainerStyle={style.list}
                renderItem={({item,index}) => this._renderItem(item,index)}/> */}
    {/*        
           <TouchableWithoutFeedback onPress={() => this.goBack()}>
             <View>
             <Text style={{textAlign:"center"}}>{Strings.CAN_DO_THIS_LATER}</Text></View>
             </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.goToIntroScreen()}>
             <View>
             <Text style={{textAlign:"center",marginTop:10}}>{Strings.CAN_DO_THIS_LATER_NEW}</Text></View>
             </TouchableWithoutFeedback> */}
             <Spinner
              isVisible={this.state.isSpinnerVisible}
             style={{position:'absolute',alignSelf:'center',top:window.height/2}} type="FadingCircleAlt" color={Colors.BUTTON_COLOR}
           
            />
            />
            </View>
    
         
        );
    }

}



const styles = StyleSheet.create({

    HeaderText:{
      padding:20
    }
    ,
    container: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        justifyContent:'space-between',
        // margin:20
        // backgroundColor: 'black',
       }
,
containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  headerContentStyle: {
    flexDirection: 'column',
    // padding: 10
   justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 16
  },
  thumbnailStyle: {
    height: 60,
    width: 60
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
  
  
  });

  function mapStateToProps(state) {
    console.log('mapStateToProps= ', JSON.stringify(state));
    return {
        OrderHistoryReducer: state.OrderHistoryReducer
    }
}



export default connect(
    mapStateToProps,
    {
     getOrderHistory,
     clearResponse,
    // selectOption
    }

)(OrderHistory)
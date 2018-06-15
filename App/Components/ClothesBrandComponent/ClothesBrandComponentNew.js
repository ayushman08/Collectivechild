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
    TextInput
}  from 'react-native';
import {
    brandNameChanged,
    clearResponse,
    clearList
} from "./ClothesBrandAction";
import {
    getBrands,
    sendBrandsData
} from "../../Action/ActionCreators";
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-spinkit';
import Header from "../Common/Header"
import Colors from '../../Constants/Colors';
import Strings from '../../Constants/Strings';
import ClothesComponentStyle from './ClothesBrandStyle';
import ClothesBrandStyle from './ClothesBrandStyle';
import {Button } from 'native-base';
import MaterialTextInput from 'react-native-material-textinput';
const BASE_URL = 'http://52.34.207.5:5032/';
const window = Dimensions.get('window');
class ClothesBrandComponentNew extends Component{
    constructor(){
        super();
        this.state ={
            onPressedFirstOption:false,
            onPressedSecondOption:false,
            onPressedOptionThree:false,
            onPressedBrand:false,
            selectedSize:'',
            selectedIndex:'',
            selectedIndexes:[],
            brandList:[],
            isSpinnerVisible:false,
            enrolledKids:'',
            kidsDataInfo:{},
            completeBrandList:[]
            
        }
    }

    componentWillMount(){
      //  this.getUserData();
       this.getBrandList();
    }

    onFirstNameChanged(text) { 
        this.props.firstNameChanged(text);
        this.setState({ isFirstName: true });
       // this.setState({ errorOnTextField: '' });
   }

    getUserData(){
        AsyncStorage.getItem("UserInfo").then((value) => {
            console.log(value);
    
          if (value) {
              var userData = JSON.parse(value);
              this.setState({userInfo:userData});
              this.fillData(userData);
          }
      }).done();
      AsyncStorage.getItem("EnrolledKids").then((value) => {
        console.log(value);

      if (value) {
          var userData = JSON.parse(value);
          this.setState({enrolledKids:userData});
      }
  }).done();
    }

   
    fillData(userData){
        console.log("Child data step 3>>>"+JSON.stringify(userData));
        if(userData.kids.length>0){
            if(userData.kids[userData.kids.length-1].fit_size!=''){
                if(userData.kids[userData.kids.length-1].fit_size===0){
                    this.selectOption(Strings.CHILD_FIT_OPTION_ONE)
                }else if(userData.kids[userData.kids.length-1].fit_size===1){
                    this.selectOption(Strings.CHILD_FIT_OPTION_TWO)
                }else if(userData.kids[userData.kids.length-1].fit_size===2){
                    this.selectOption(Strings.CHILD_FIT_OPTION_THREE)
                }
            }

            if(userData.kids[userData.kids.length-1].other_brand!=''){
              this.onBrandNameChanged(userData.kids[userData.kids.length-1].other_brand)
            }

            if(userData.kids[userData.kids.length-1].brand!='' && userData.kids[userData.kids.length-1].brand.length>0 ){
                this.state.completeBrandList.map((item,index) =>{
                    if(userData.kids[userData.kids.length-1].brand.indexOf(item._id)!=-1){
                        this.selectSize(item,index)
                    }
                })
            }

           

           


        }
        this.setState({kidsDataInfo:userData.kids})
        //this.selectSize(userData.kids[userData.kids.length-1],length-1)
          
      }

    _renderItem(item,index){
        
        return (
            <TouchableWithoutFeedback onPress={() => this.selectSize(item,index)} >
            <View style={[ClothesBrandStyle.itemContainer,(this.state.onPressedBrand && this.state.selectedIndexes.indexOf(index)!=-1)?{backgroundColor:Colors.BACKGROUND_COLOR}:null]}>
            <Image style={ClothesBrandStyle.image} source={{uri:BASE_URL + item.logo_path}} />
            </View>
            </TouchableWithoutFeedback>
        )
    }

    selectSize(item, index){
       this.setState({onPressedBrand:true,selectedIndex:index})
       this.state.brandList.push(item._id)
        this.state.selectedIndexes.push(index)
    }

    

    getBrandList(){
       // this.setState({isSpinnerVisible:true})
        this.props.getBrands();
    }

    onBrandNameChanged(text){
        this.props.brandNameChanged(text);
     }


    selectOption(option){
        if(option===Strings.CHILD_FIT_OPTION_ONE){
            this.setState({onPressedFirstOption:true,onPressedSecondOption:false,onPressedOptionThree:false,selectedSize:0})
        }else if(option===Strings.CHILD_FIT_OPTION_TWO){
            this.setState({onPressedFirstOption:false,onPressedSecondOption:true,onPressedOptionThree:false,selectedSize:1})

        }else if(option===Strings.CHILD_FIT_OPTION_THREE){
            this.setState({onPressedFirstOption:false,onPressedSecondOption:false,onPressedOptionThree:true,selectedSize:2})
        }
      
    }

    componentDidUpdate(){
        if(this.props.clothesBrandReducer.brandDataRes!=''){
            this.setState({isSpinnerVisible:false})
            if(this.props.clothesBrandReducer.brandDataRes.status==='success'){
                console.log("enrolled kids>>>"+this.state.enrolledKids);
                AsyncStorage.setItem("UserInfo", JSON.stringify(this.props.clothesBrandReducer.brandDataRes.data));
                Actions.stylecomponent({type:'reset'})
                // if(this.state.enrolledKids!='' && this.state.enrolledKids>=1){
                //     console.log("enrolled kids 1>>>"+this.state.enrolledKids);
                //     if(this.props.clothesBrandReducer.brandDataRes.data.kids.length!=this.state.enrolledKids){
                //         console.log("enrolled kids 2>>>"+this.state.enrolledKids);
                //         AsyncStorage.setItem("UserInfo", JSON.stringify(this.props.clothesBrandReducer.brandDataRes.data));
                //         //Actions.childDobInformation({type:'reset',childData:this.props.clothesBrandReducer.brandDataRes.data})
                //         Actions.childDobInformation({type:'reset'});
                //     }else{
                //         console.log("enrolled kids 3>>>"+this.state.enrolledKids);
                //        Actions.talktoUs({type:'reset'})
                //     }
                    
                // }
                   // Actions.stylecomponent({type:'reset'})
            }
            this.props.clearResponse()
        }else if(this.props.clothesBrandReducer.brandListRes!=''){
            if(this.props.clothesBrandReducer.brandListRes.status==='success'){
                this.setState({completeBrandList:this.props.clothesBrandReducer.brandListRes.data})
                this.getUserData();
            }

            this.props.clearList()
        }
    }

 

     goBack(){
        Actions.sizeandproportion({type:'reset',kids:this.state.kidsDataInfo})
    }


    sendBrandSelection(){
        
        let kidsData =[]
        console.log(`brand list ${this.state.brandList.length}`);
        if(this.state.selectedSize===''){
            alert("Please select one option")
        }else if(this.state.brandList.length===0 && this.props.clothesBrandReducer.brand_name===''){
            alert("Please input brand ")
        }else{
            if(this.state.kidsDataInfo.length>0 && this.state.kidsDataInfo!=''){
                // kidsDataInfo.map((item) => {
                //     kidsData.push(kidsDataInfo);
                // })
                for(var i=0;i<this.state.kidsDataInfo.length-1;i++){
                    kidsData.push(this.state.kidsDataInfo[i])
                }
                postData ={
                    name:this.state.kidsDataInfo[this.state.kidsDataInfo.length-1].name,
                    dob:this.state.kidsDataInfo[this.state.kidsDataInfo.length-1].dob,
                    gender:this.state.kidsDataInfo[this.state.kidsDataInfo.length-1].gender,
                    size:this.state.kidsDataInfo[this.state.kidsDataInfo.length-1].size,
                    _id:this.state.kidsDataInfo[this.state.kidsDataInfo.length-1]._id,
                    proportion:this.state.kidsDataInfo[this.state.kidsDataInfo.length-1].proportion,
                    fit_size:this.state.selectedSize,
                    other_brand:this.props.clothesBrandReducer.brand_name,
                    brand:this.state.brandList
                   
                 }
                 kidsData.push(postData)
    
                 postDataKids ={
                    _id:this.state.userInfo._id,
                     kids:kidsData,
                     savedScreen:Strings.SCREEN_NINE
                 }
                 this.setState({isSpinnerVisible:true})
                 console.log("Postdata>>>"+JSON.stringify(postDataKids));
                 this.props.sendBrandsData(postDataKids);

        }
            
        }
    }

    goToIntroScreen(){
        Actions.appIntro({type:'reset'})
     }

    render(){
        return(
          
            <View style={{flex:1}}>
            <Header headerText={Strings.CHILD_INFORMATION} screenCount="03" />
            <ScrollView style={{flex:0.7}}>
            <View style={ClothesComponentStyle.subContainer}>
            <Text style={ClothesBrandStyle.titleStyle}>{Strings.CHILD_BRAND_TITLE_ONE}</Text>
            <TouchableWithoutFeedback onPress={() => this.selectOption(Strings.CHILD_FIT_OPTION_ONE)}>
                <View style={[ClothesBrandStyle.cardStyle,this.state.onPressedFirstOption?{backgroundColor:Colors.BACKGROUND_COLOR}:null]}>
                <Text style={{alignSelf:'center',alignItems:'center',marginLeft:5,fontSize:15}}>
                    {Strings.CHILD_FIT_OPTION_ONE}
                </Text>
                </View>    
            </TouchableWithoutFeedback> 
            <TouchableWithoutFeedback onPress={() => this.selectOption(Strings.CHILD_FIT_OPTION_TWO)}>
                <View style={[ClothesBrandStyle.cardStyle,this.state.onPressedSecondOption?{backgroundColor:Colors.BACKGROUND_COLOR}:null]}>
                <Text style={{alignSelf:'center',alignItems:'center',marginLeft:5,fontSize:15}}>
                    {Strings.CHILD_FIT_OPTION_TWO}
                </Text>
                </View>    
            </TouchableWithoutFeedback> 
            <TouchableWithoutFeedback onPress={() => this.selectOption(Strings.CHILD_FIT_OPTION_THREE)}>
                <View style={[ClothesBrandStyle.cardStyle,this.state.onPressedOptionThree?{backgroundColor:Colors.BACKGROUND_COLOR}:null]}>
                <Text style={{alignSelf:'center',alignItems:'center',marginLeft:5,fontSize:15}}>
                    {Strings.CHILD_FIT_OPTION_THREE}
                </Text>
                </View>    
            </TouchableWithoutFeedback>    
            </View>   
            <Text style={ClothesBrandStyle.titleStyle}>{Strings.CHILD_BRAND_TITLE_TWO}</Text>
        
            <Text style={{marginLeft:30,color:Colors.LABEL_TEXT_COLOR}}>{Strings.OTHERS}</Text> 
       
            <View style={{marginLeft:30,marginTop:10}}>
                     <TextInput
                            placeholder={Strings.HINT_TEXT}
                            placeholderTextColor={Colors.LABEL_TEXT_COLOR}
                            color={Colors.TEXT_COLOR}
                            fontSize={15}
                            underlineColor={Colors.TEXT_COLOR}
                            underlineActiveColor={Colors.TEXT_COLOR}
                            underlineHeight={0.7}
                            underlineActiveHeight={0.7}
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            returnKeyType='next'
                            onChangeText={this.onBrandNameChanged.bind(this)}
                            value={this.props.clothesBrandReducer.brand_name}
                            //onSubmitEditing={(event)=>{this.refs.lastname.focus()}}
                           
                        />

            </View> 
            
            <View style={{flex:0.7}}>
             <FlatList
                style ={{marginTop:20}} 
                data={this.state.completeBrandList}
                numColumns={3}
                contentContainerStyle={ClothesBrandStyle.list}
                renderItem={({item,index}) => this._renderItem(item,index)}/>
            </View>
            
             <Spinner
            isVisible={this.state.isSpinnerVisible}
            style={{position:'absolute',alignSelf:'center',top:window.height/2}} type="FadingCircleAlt" color={Colors.BUTTON_COLOR}
           
            /> 
            </ScrollView>  

 <View style={{flex:0.3}}>
 <View>
 <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
             <Button rounded  style={{width:window.width/2.4,justifyContent:"center",margin:15,alignItems:"center",backgroundColor:Colors.BUTTON_COLOR}} onPress={()=>this.sendBrandSelection()}>
             <Text style={{color:"white",textAlign:"center",fontWeight:"400", fontSize: 16}}>NEXT</Text>
             </Button>
             </View>
             <TouchableWithoutFeedback onPress={() => this.goBack()}>
             <View>
             <Text style={{textAlign:"center"}}>{Strings.CAN_DO_THIS_LATER}</Text></View>
             </TouchableWithoutFeedback> 
             <TouchableWithoutFeedback onPress={() => this.goToIntroScreen()}>
             <View>
             <Text style={{textAlign:"center",marginTop:10}}>{Strings.CAN_DO_THIS_LATER_NEW}</Text></View>
             </TouchableWithoutFeedback>
  </View>
 

 </View>
            </View>   
            
        );
    }

}

function mapStateToProps(state) {
    console.log('mapStateToProps= ', JSON.stringify(state));
    return {
        clothesBrandReducer: state.clothesBrandReducer
    }
}


export default connect(
    mapStateToProps,
    {
    sendBrandsData,
    getBrands,
    brandNameChanged,
    clearResponse,
    clearList
    }

)(ClothesBrandComponentNew)
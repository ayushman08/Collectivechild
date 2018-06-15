import React, { Component } from 'react';
import { connect } from 'react-redux';
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

import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from "../Common/Header"
import MaterialTextInput from 'react-native-material-textinput';

import Strings from '../../Constants/Strings';
import Colors from '../../Constants/Colors';
import Spinner from 'react-native-spinkit';
import {
    // addressChanged,
    // cityChanged,
    // stateChanged,
    // emailChanged,
    // zipcodeChanged,
    // showLoading,
    // resetState,
    clearResponse,
    // phoneNumberChanged
} from "./UpdateBilingContactAction";

import {
    _getProfile,
    updateAddress,
} from "../../Action/ActionCreators";
import CheckBox from 'react-native-checkbox';


const { width, height } = Dimensions.get('window');


const validateNumber = (number) => {
    var re = /^[0-9]*$/;
    return re.test(number);
  };


class UpdateBillingContactInformation extends Component {
    constructor() {
        super();
        this.state = {
           
            city: "",
            state: "",
            zipcode: "",
            country: "",
            phonenumber: {
                type: Number,
                required: true
            },
           
            signUpData: {},
            isFirstName: true,
            isLastName: true,
            isEmail: true,
            isSpinnerVisible: false,
            emailValidated: false,
            isPassword: true,
            isAddress: true,
            isCityName: true,
            isState: true,
            isZipcode: true,
            isPhoneNumber: true,
            checked: false,
            userInfo:{},

           
            address:"",
            billing_address:"",
            billing_city:"",
            billing_state:"",
            billing_zipcode:"",
            sameAdrress: false

        };
    }


    componentWillMount() {
     this.props._getProfile("5954972e2262f132ea97a12f");
        // this.getUserData();
    }

    // getUserData(){
    //     AsyncStorage.getItem("UserInfo").then((value) => {
    //         console.log(value);
    
    //       if (value) {
    //           var userData = JSON.parse(value);
    //           this.setState({userInfo:userData});
    //            this.fillData()
             
    //       }
    //   }).done();
    // }

    //  fillData(){
    //  alert(this.state.userInfo.billing_address)

    // this.setState({billing_address:this.state.userInfo.billing_address})
    // // this.setState({billing_address:this.state.userInfo.billing_address})
    // // this.setState({billing_address:this.state.userInfo.billing_address})
    // // this.setState({billing_address:this.state.userInfo.billing_address})
    // // this.setState({billing_address:this.state.userInfo.billing_address})
    // // this.setState()

    // //   this.onAddressChanged(this.state.userInfo.billing_address)
    //     // console.log("Userdata>>"+JSON.stringify(this.state.userInfo));
    // }


    // onAddressChanged(text) {
    //     this.props.addressChanged(text);
    //     this.setState({ isAddress: true });
    //     // this.setState({ errorOnTextField: '' });
    // }

    // onCityChanged(text) {
    //     this.setState({ isCityName: true });
    //     this.props.cityChanged(text);

    // }

    // onStateChanged(text) {
    //     this.setState({ isState: true });
    //     this.props.stateChanged(text);
    // }


    // onZipcodeChanged(text) {
    //     this.setState({ isZipcode: true });
    //     this.props.zipcodeChanged(text);
    // }

    // onphoneNumberChanged(text) {
    //     this.setState({ isPhoneNumber: true });

    //     this.props.phoneNumberChanged(text);
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log("====== Billing Response ========" + JSON.stringify(nextProps.billingInfoReducer.billingRes));

    //     if(nextProps.billingInfoReducer.billingRes!=''){
    //                    this.setState({isSpinnerVisible:false})
        
    //                    //alert(this.props.billingInfoReducer.billingRes)
    //                 if(nextProps.billingInfoReducer.billingRes.status==="success"){
    //                           // this.setState({signUpData:this.props.contactreducer.signupRes.data})
        
    //                      AsyncStorage.setItem("UserInfo", JSON.stringify(nextProps.billingInfoReducer.billingRes));
    //                      console.log("HelloResponse"+nextProps.billingInfoReducer.billingRes)
    //                       Actions.servicePreferences({type:"reset"})
    //                    }else{
    //                        alert(nextProps.billingInfoReducer.billingRes.message);
    //                    }
    //                     this.props.clearResponse();
    //                }
    // }


    componentWillReceiveProps(nextProps) {
        if (
            nextProps.updatebillingInfoReducer.data != undefined &&
            nextProps.updatebillingInfoReducer.data != ""
        ) {

            this.setState({ isLoading: false })
            if (nextProps.updatebillingInfoReducer.data.messageId == 200) {
            console.log("UPDATED BILLING ADDRESS"+JSON.stringify(nextProps.updatebillingInfoReducer.data))
            // alert(JSON.stringify(nextProps.updatebillingInfoReducer.data))

                
                // this.setState({ product: nextProps.ProfileRerducer.data.data.order.products, userInfo: nextProps.ProfileRerducer.data.data })
                console.log("==== Profile Response =====", JSON.stringify(nextProps.updatebillingInfoReducer.data));
            } else {
                alert("Invalid Credential");
            }
        }

  
        if (
            nextProps.updatebillingInfoReducer.updatedAddressRes != undefined &&
            nextProps.updatebillingInfoReducer.updatedAddressRes != ""
        ) {

            this.setState({ isLoading: false })
            if (nextProps.updatebillingInfoReducer.updatedAddressRes.messageId == 200) {
            console.log("UPDATED BILLING ADDRESS"+JSON.stringify(nextProps.updatebillingInfoReducer.updatedAddressRes))
                    alert(JSON.stringify(nextProps.updatedAddressRes.updatedAddressRes))

                
                // this.setState({ product: nextProps.ProfileRerducer.data.data.order.products, userInfo: nextProps.ProfileRerducer.data.data })
                console.log("==== Profile Response =====", JSON.stringify(nextProps.updatebillingInfoReducer.data));
            } else {
                alert("Invalid Credential");
            }
        }
    }


 

   goBack(){
       Actions.billingContactInformation({type:"reset"})
   }

   saveForShipmentCheckBox(checked) {
    if (checked == false) { this.setState({ sameAdrress: true, checked:true}) }
    else if (checked == true) { this.setState({ sameAdrress: false ,checked:false}) }
  }


    submit() {
//         if (t.trim() == '') {
//             this.setState({ isAddress: false });
         


//         } else if (this.props.updatebillingInfoReducer.city.trim() == '') {
//             this.setState({ isCityName: false });
       

//         } else if (this.props.updatebillingInfoReducer.state.trim() == '') {
//             this.setState({ isState: false });
       

//         }
//          else if (this.props.updatebillingInfoReducer.zipcode.trim() == '') {
//             this.setState({ isZipcode: false });

    
// } 
//     else if (!validateNumber(this.props.updatebillingInfoReducer.zipcode.trim())) {
//     alert("Enter correct zipcode")
//     }
        
//         else if (this.props.updatebillingInfoReducer.zipcode.trim()<6) {
//         alert("Enter correct zipcode")
//         }

//         // else if (this.props.billingInfoReducer.zipcode.trim()>6) {
//         //     alert("Enter correct zipcode")
//         // }

//         else if (this.props.updatebillingInfoReducer.phonenumber == '') {
//             this.setState({ isPhoneNumber: false });
//             // alert("Please enter phonenumber")
//         } 
      

//         else if (!validateNumber(this.props.updatebillingInfoReducer.phonenumber)) {
//             alert("Enter correct number")
//         }
//         else if (this.props.updatebillingInfoReducer.phonenumber.trim().length<10) {
//             alert("Enter 10 digit phone number")
//         }   
        
//         else if (this.props.updatebillingInfoReducer.phonenumber.trim().length>10) {
//             alert("Enter 10 digit phone number")
//         }


     

            // if (this.state.checked) {


                AsyncStorage.getItem("UserInfo").then((value) => {

                    if (value) {
                    userData = JSON.parse(value);
                      console.log("====== User Id =======", userData.email)
              
                      postdata = {
                     _id: userData._id,
                     billing_address: this.state.billing_address ,
                     billing_state: this.state.billing_state,
                     billing_city:this.state.billing_city,
                     billing_zipcode: this.state.billing_zipcode,
                    }
                     
                    
               this.setState({ isSpinnerVisible: true })
              this.props.updateAddress(postData);
               }
                  }).done();
    
                // postData = {
                //     _id:this.state.userInfo._id,
                //     billing_address: this.state.billing_address ,
                //     billing_state: this.state.billing_state,
                //     billing_city:this.state.billing_city,
                //     billing_zipcode: this.state.billing_zipcode,
                
                // }

    
                

// }
           
    //   else if(!this.state.checked) {

    //     postData = {
    //         _id:this.state.userInfo._id,
    //         billing_address: this.props.updatebillingInfoReducer.address,
    //         billing_state: this.props.updatebillingInfoReducer.state,
    //         billing_city: this.props.updatebillingInfoReducer.city,
    //         billing_zipcode: this.props.updatebillingInfoReducer.zipcode,
    //         contact_no: parseInt(this.props.updatebillingInfoReducer.phonenumber),
    //         savedScreen: "BILLINGCONTACTINFORMATION"
    //     }


        

    // this.props.billingSignup(postData);
            // }
  
}



    // saveForShipmentCheckBox(checked) {
    //     if (checked == false) { this.setState({ checked: true }) }
    //     else if (checked == true) { this.setState({ checked: false }) }
    // }

    // goBack() {
    //     // Actions.pop()  
    // }

    sameAddress(){
    if(this.state.sameAdrress){
     return(
     <View>
     <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ flex: 1, marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
                      <MaterialTextInput
                          label={Strings.ADDRESS}
                          labelColor={Colors.LABEL_TEXT_COLOR}
                          activeColor={Colors.LABEL_TEXT_COLOR}
                          color={Colors.TEXT_COLOR}
                          fontSize={15}

                          labelActiveTop={-30}
                          underlineColor={Colors.TEXT_COLOR}
                          underlineActiveColor={Colors.TEXT_COLOR}
                          underlineHeight={0.7}
                          underlineActiveHeight={0.7}
                          autoCapitalize='none'
                          autoCorrect={false}
                          underlineColorAndroid='transparent'
                          returnKeyType='next'
                          // onChangeText={this.onAddressChanged.bind(this)}
                          value={"sadsad"}


                      />


                  </View>

                  {
                      (!this.state.isAddress) ? <View style={{ flex: 0.1 }}>
                          <Text style={{ color: 'red', fontSize: 20 }}>X</Text>
                      </View> : <View style={{ flex: 0.1 }} />
                  }
              </View>






              <View style={{ flexDirection: "row", flex: 1 }}>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                      <View style={{ flex: 1, marginLeft: 20, marginBottom: 20 }}>

                          <MaterialTextInput
                              label={Strings.CITY}
                              labelColor={Colors.LABEL_TEXT_COLOR}
                              activeColor={Colors.LABEL_TEXT_COLOR}
                              color={Colors.TEXT_COLOR}
                              fontSize={15}
                              labelActiveTop={-30}
                              underlineColor={Colors.TEXT_COLOR}
                              underlineActiveColor={Colors.TEXT_COLOR}
                              underlineHeight={0.7}
                              underlineActiveHeight={0.7}
                              autoCapitalize='none'
                              autoCorrect={false}
                              underlineColorAndroid='transparent'
                              returnKeyType='next'
                              // onChangeText={this.onCityChanged.bind(this)}
                              value={"sadsad"}
                          // onChangeText={null}
                          // value={null}

                          />

                      </View>
                      {
                          (!this.state.isCityName) ? <View style={{ flex: 0.1 }}>
                              <Text style={{ color: 'red', fontSize: 20 }}>X</Text>
                          </View> : <View style={{ flex: 0.1 }} />
                      }


                  </View>


                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <View style={{ flex: 1, marginBottom: 20 }}>
                          <MaterialTextInput

                              label={Strings.STATE}
                              labelColor={Colors.LABEL_TEXT_COLOR}
                              activeColor={Colors.LABEL_TEXT_COLOR}
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
                              // onChangeText={this.onStateChanged.bind(this)}
                              value={"dsfsdf"}
                          // onSubmitEditing={(event)=>{this.refs.email.focus()}}
                          //    onChangeText={null}
                          //    value={null}


                          />
                      </View>
                      {

                          (!this.state.isState) ? <View style={{ flex: 0.1 }}>
                              <Text style={{ color: 'red', fontSize: 20 }}>X</Text>
                          </View> : <View style={{ flex: 0.1 }} />
                      }

                  </View>
              </View>


              <View style={{ flexDirection: "row", flex: 1 }}>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                      <View style={{ flex: 1, marginLeft: 20, marginBottom: 20 }}>

                          <MaterialTextInput
                              label={Strings.ZIP_CODE}
                              labelColor={Colors.LABEL_TEXT_COLOR}
                              activeColor={Colors.LABEL_TEXT_COLOR}
                              color={Colors.TEXT_COLOR}
                              fontSize={15}
                              labelActiveTop={-30}
                              underlineColor={Colors.TEXT_COLOR}
                              underlineActiveColor={Colors.TEXT_COLOR}
                              underlineHeight={0.7}
                              underlineActiveHeight={0.7}
                              autoCapitalize='none'
                              autoCorrect={false}
                              underlineColorAndroid='transparent'
                              returnKeyType='next'
                              // onChangeText={this.onZipcodeChanged.bind(this)}
                              value={"sadsad"}
                          // onChangeText={null}
                          // value={null}

                          />

                      </View>
                      {
                          (!this.state.isZipcode) ? <View style={{ flex: 0.1 }}>
                              <Text style={{ color: 'red', fontSize: 20 }}>X</Text>
                          </View> : <View style={{ flex: 0.1 }} />
                      }


                  </View>

                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <View style={{ flex: 1, marginBottom: 20 }}>
                          <MaterialTextInput
                              label={Strings.PHONE_NUMBER}
                              labelColor={Colors.LABEL_TEXT_COLOR}
                              activeColor={Colors.LABEL_TEXT_COLOR}
                              color={Colors.TEXT_COLOR}
                              fontSize={15}
                              labelActiveTop={-30}
                              underlineColor={Colors.TEXT_COLOR}
                              underlineActiveColor={Colors.TEXT_COLOR}
                              underlineHeight={0.7}
                              underlineActiveHeight={0.7}
                              autoCapitalize='none'
                              autoCorrect={false}
                              underlineColorAndroid='transparent'
                              returnKeyType='next'
                              // onChangeText={this.onphoneNumberChanged.bind(this)}
                           
                              value={"sadsadsd"}
                              // onChangeText={null}
                              // value={null}

                          />
                      </View>
                      {

                          (!this.state.isPhoneNumber) ? <View style={{ flex: 0.1 }}>
                              <Text style={{ color: 'red', fontSize: 20 }}>X</Text>
                          </View> : <View style={{ flex: 0.1 }} />
                      }

                  </View>
              </View>

              </View>
            

    
        )
      
       }
       else{
           alert("notsameddress")
       }

    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Header headerText={"BILLING & SHIPPING"} />
                <ScrollView style={{ flex: 1 }}>

           <View style={{flex:1 ,flexDirection:"row"}}>
           <View style={{justifyContent:"center",alignItems:"center",padding:20,width:width/2 }}><Text></Text></View>
           <View style={{justifyContent:"center",alignItems:"center",padding:20,width:width/2}}></View>
           </View>
           <Text style={{ textAlign: "center", fontSize: 20, color: "black", fontWeight: "600", marginTop: 50, marginBottom: 30 }}>CONTACT INFORMATION
            </Text>


                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 1, marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
                            <MaterialTextInput
                                label={Strings.ADDRESS}
                                labelColor={Colors.LABEL_TEXT_COLOR}
                                activeColor={Colors.LABEL_TEXT_COLOR}
                                color={Colors.TEXT_COLOR}
                                fontSize={15}

                                labelActiveTop={-30}
                                underlineColor={Colors.TEXT_COLOR}
                                underlineActiveColor={Colors.TEXT_COLOR}
                                underlineHeight={0.7}
                                underlineActiveHeight={0.7}
                                autoCapitalize='none'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                returnKeyType='next'
                                // onChangeText={this.onAddressChanged.bind(this)}
                                value={"sadsad"}


                            />


                        </View>

                        {
                            (!this.state.isAddress) ? <View style={{ flex: 0.1 }}>
                                <Text style={{ color: 'red', fontSize: 20 }}>X</Text>
                            </View> : <View style={{ flex: 0.1 }} />
                        }
                    </View>






                    <View style={{ flexDirection: "row", flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                            <View style={{ flex: 1, marginLeft: 20, marginBottom: 20 }}>

                                <MaterialTextInput
                                    label={Strings.CITY}
                                    labelColor={Colors.LABEL_TEXT_COLOR}
                                    activeColor={Colors.LABEL_TEXT_COLOR}
                                    color={Colors.TEXT_COLOR}
                                    fontSize={15}
                                    labelActiveTop={-30}
                                    underlineColor={Colors.TEXT_COLOR}
                                    underlineActiveColor={Colors.TEXT_COLOR}
                                    underlineHeight={0.7}
                                    underlineActiveHeight={0.7}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                    returnKeyType='next'
                                    // onChangeText={this.onCityChanged.bind(this)}
                                    value={"sadsad"}
                                // onChangeText={null}
                                // value={null}

                                />

                            </View>
                            {
                                (!this.state.isCityName) ? <View style={{ flex: 0.1 }}>
                                    <Text style={{ color: 'red', fontSize: 20 }}>X</Text>
                                </View> : <View style={{ flex: 0.1 }} />
                            }


                        </View>


                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, marginBottom: 20 }}>
                                <MaterialTextInput

                                    label={Strings.STATE}
                                    labelColor={Colors.LABEL_TEXT_COLOR}
                                    activeColor={Colors.LABEL_TEXT_COLOR}
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
                                    // onChangeText={this.onStateChanged.bind(this)}
                                    value={"dsfsdf"}
                                // onSubmitEditing={(event)=>{this.refs.email.focus()}}
                                //    onChangeText={null}
                                //    value={null}


                                />
                            </View>
                            {

                                (!this.state.isState) ? <View style={{ flex: 0.1 }}>
                                    <Text style={{ color: 'red', fontSize: 20 }}>X</Text>
                                </View> : <View style={{ flex: 0.1 }} />
                            }

                        </View>
                    </View>


                    <View style={{ flexDirection: "row", flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                            <View style={{ flex: 1, marginLeft: 20, marginBottom: 20 }}>

                                <MaterialTextInput
                                    label={Strings.ZIP_CODE}
                                    labelColor={Colors.LABEL_TEXT_COLOR}
                                    activeColor={Colors.LABEL_TEXT_COLOR}
                                    color={Colors.TEXT_COLOR}
                                    fontSize={15}
                                    labelActiveTop={-30}
                                    underlineColor={Colors.TEXT_COLOR}
                                    underlineActiveColor={Colors.TEXT_COLOR}
                                    underlineHeight={0.7}
                                    underlineActiveHeight={0.7}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                    returnKeyType='next'
                                    // onChangeText={this.onZipcodeChanged.bind(this)}
                                    value={"sadsad"}
                                // onChangeText={null}
                                // value={null}

                                />

                            </View>
                            {
                                (!this.state.isZipcode) ? <View style={{ flex: 0.1 }}>
                                    <Text style={{ color: 'red', fontSize: 20 }}>X</Text>
                                </View> : <View style={{ flex: 0.1 }} />
                            }


                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, marginBottom: 20 }}>
                                <MaterialTextInput
                                    label={Strings.PHONE_NUMBER}
                                    labelColor={Colors.LABEL_TEXT_COLOR}
                                    activeColor={Colors.LABEL_TEXT_COLOR}
                                    color={Colors.TEXT_COLOR}
                                    fontSize={15}
                                    labelActiveTop={-30}
                                    underlineColor={Colors.TEXT_COLOR}
                                    underlineActiveColor={Colors.TEXT_COLOR}
                                    underlineHeight={0.7}
                                    underlineActiveHeight={0.7}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                    returnKeyType='next'
                                    // onChangeText={this.onphoneNumberChanged.bind(this)}
                                 
                                    value={"sadsadsd"}
                                    // onChangeText={null}
                                    // value={null}

                                />
                            </View>
                            {

                                (!this.state.isPhoneNumber) ? <View style={{ flex: 0.1 }}>
                                    <Text style={{ color: 'red', fontSize: 20 }}>X</Text>
                                </View> : <View style={{ flex: 0.1 }} />
                            }

                        </View>
                    </View>

                    
                     <View style={{ padding: 20 }}>
                        <CheckBox
                            label='USE THIS ADDRESS FOR SHIPMENT'
                            checked={this.state.checked}
                            onChange={(checked) => this.saveForShipmentCheckBox(checked)}
                        />

                    </View>

               
                <View>{this.sameAddress()}</View>

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Button rounded style={{ width: width / 2.4, justifyContent: "center", margin: 15, alignItems: "center", backgroundColor: Colors.BUTTON_COLOR, padding: 0 }} onPress={() => { this.submit() }}>
                            <Text style={{ color: "white", textAlign: "center", fontWeight: "800", fontSize: 16, fontFamily: "Roboto" }}>{Strings.NEXT}</Text>
                        </Button>
                    </View>

                    <TouchableWithoutFeedback onPress={() => this.goBack()}>
                        <View>
                            <Text style={{ textAlign: "center" }}>{Strings.HOME}</Text></View>
                    </TouchableWithoutFeedback>

            </ScrollView>

                {
                    this.state.isSpinnerVisible ? <Spinner
                        isVisible={this.state.isSpinnerVisible}
                        style={{ position: 'absolute', alignSelf: 'center', top: height / 2 }} type="FadingCircleAlt" color={Colors.BUTTON_COLOR}

                    /> : null
                }
    </View>

    



        );
    }

}
function mapStateToProps(state) {
    console.log('mapStateToProps= ', JSON.stringify(state));
    return {
        updatebillingInfoReducer: state.updatebillingInfoReducer
    }
}


export default connect(
    mapStateToProps,
    {
        _getProfile,
        updateAddress,
       //// addressChanged,
      //  cityChanged,
      //  stateChanged,
      //  emailChanged,
       // zipcodeChanged,
       // showLoading,
        // resetState,
        clearResponse,
        // phoneNumberChanged
    }

)(UpdateBillingContactInformation)

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 70,
        width: width / 3.8,
        marginLeft: 10,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    }

};
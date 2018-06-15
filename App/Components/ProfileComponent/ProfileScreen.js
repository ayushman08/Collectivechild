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
    KeyboardAvoidingView,
    FlatList
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Avatar, Icon } from 'react-native-elements';
import CardView from 'react-native-cardview';
import {
    SkypeIndicator,
    UIActivityIndicator,
} from 'react-native-indicators';
import {
    getProfile,
    getLastBox
} from "../../Action/ActionCreators";
import API from '../../Constants/APIUrls';



import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CommonStyles from '../../CommonStyle/CommonStyle';
import Colors from '../../Constants/Colors';
import Strings from '../../Constants/Strings';
import ImagePath from '../../Constants/ImagePath';
import ProfileScreenStyle from './ProfileScreenStyle'


class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            product: [],
            userInfo: []
        }
    }

    componentWillMount() {
        this.props.getProfile("5954972e2262f132ea97a12f");
    }

    componentWillReceiveProps(nextProps) {
        if (
            nextProps.ProfileRerducer.data != undefined &&
            nextProps.ProfileRerducer.data != ""
        ) {

            this.setState({ isLoading: false })
            if (nextProps.ProfileRerducer.data.messageId == 200) {
                this.setState({ product: nextProps.ProfileRerducer.data.data.order.products, userInfo: nextProps.ProfileRerducer.data.data })
                console.log("==== Profile Response =====", JSON.stringify(nextProps.ProfileRerducer.data.data));
            } else {
                alert("Invalid Credential");
            }
        }
    }

    _keyExtractor = (item, index) => item.id;

    renderItem = itemData => {

        return (

            <CardView
                cardElevation={1}
                cardMaxElevation={1}
                cornerRadius={5}
                style={ProfileScreenStyle.cardViewStyle}>


                <Image
                    style={ProfileScreenStyle.ImageStyle}
                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSctLbawtMtFcGkOSHK-zYmOmk_4rg9VvQNJ5MT6gLnMPBJjFz5" }}
                />


                <Icon
                    name='heart'
                    type='font-awesome'
                    color={Colors.GRAY_COLOR}
                    size={25} />




            </CardView>
        );

    }

    render() {

        return (


            <View style={CommonStyles.container}>
                {
                    this.state.isLoading ?
                        <View style={CommonStyles.activityIndicatorStyle}>
                            <UIActivityIndicator color='gray' />
                        </View>
                        : <View style={{ flex: 1 }}>




                            <View style={ProfileScreenStyle.userInfoStyle}>

                                <Image
                                    resizeMode={"cover"}
                                    style={ProfileScreenStyle.canvas}
                                    source={{ uri: API.IMAGE_BASE_USR + this.state.userInfo.profile_pic }} />

                                <View style={ProfileScreenStyle.detailsInfoStyle}>
                                    <View style={ProfileScreenStyle.nameContainer}>
                                        <Text style={ProfileScreenStyle.nameStyle}> {this.state.userInfo.first_name} {this.state.userInfo.last_name} </Text>
                                        <Icon
                                            name='pencil'
                                            type='font-awesome'
                                            color={Colors.GRAY_COLOR}
                                            size={16} />
                                    </View>
                                    <Text style={ProfileScreenStyle.emailStyle}> {this.state.userInfo.email} </Text>

                                    <Text style={ProfileScreenStyle.numberStyle}> {this.state.userInfo.contact_no} </Text>

                                    <View style={ProfileScreenStyle.InfoStyle}>

                                        <View style={ProfileScreenStyle.InfoViewStyle}>
                                            <Text > Kids</Text>

                                            <Text > {this.state.userInfo.kids.length} </Text>

                                        </View>
                                        <View style={ProfileScreenStyle.InfoViewStyle}>

                                            <Text > Sizes</Text>
                                            <Text > 12 / 4  </Text>
                                        </View>

                                        <View style={ProfileScreenStyle.InfoViewStyle}>
                                            <Text > Delivery</Text>
                                            <Text > 4/12  </Text>
                                        </View>

                                    </View>
                                </View>

                            </View>

                            <View style={ProfileScreenStyle.myBoxContainerStyle}>

                                <FlatList
                                    data={this.state.product}
                                    renderItem={this.renderItem}
                                    numColumns={1}
                                    key={"ONE COLUMN"}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={this._keyExtractor}
                                    horizontal={true}
                                />
                               
                            </View>

                        </View>
                }

            </View>
        );
    }

}


function mapStateToProps(state) {

    return {
        ProfileRerducer: state.ProfileRerducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getProfile }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
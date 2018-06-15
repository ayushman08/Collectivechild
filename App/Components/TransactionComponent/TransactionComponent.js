import React, { Component } from 'react';
import { View, Platform } from 'react-native'
import { connect } from 'react-redux';
import BrainTreeClient from 'react-native-braintree-xplat';
const options = {
    bgColor: '#FFF',
    tintColor: 'orange',
    callToActionText: 'Save',
    threeDSecure: {
      amount: 1.0
    }
  }

class TransactionComponent extends Component{
    componentWillMount(){
        const token = "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJkMjcxYmQxM2U3MmFkZjlhYzgwNTU4MmI5MTk4MTZmNzM2OGY5OTYyYWY4MDY2MjYwYTkxN2FmN2RjNzI1MjU2fGNyZWF0ZWRfYXQ9MjAxOC0wNi0wNVQwNjozNDozOS4wNDAwMzI5MTIrMDAwMFx1MDAyNm1lcmNoYW50X2lkPXlzdzJqYmZra3dubjZ0eGpcdTAwMjZwdWJsaWNfa2V5PXpnajM1dnh2OW5wNG5oOHYiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveXN3MmpiZmtrd25uNnR4ai9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL3lzdzJqYmZra3dubjZ0eGovY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tL3lzdzJqYmZra3dubjZ0eGoifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoic21hcnRkYXRhIiwiY2xpZW50SWQiOm51bGwsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOnRydWUsImVudmlyb25tZW50Ijoib2ZmbGluZSIsInVudmV0dGVkTWVyY2hhbnQiOmZhbHNlLCJicmFpbnRyZWVDbGllbnRJZCI6Im1hc3RlcmNsaWVudDMiLCJiaWxsaW5nQWdyZWVtZW50c0VuYWJsZWQiOnRydWUsIm1lcmNoYW50QWNjb3VudElkIjoic21hcnRkYXRhIiwiY3VycmVuY3lJc29Db2RlIjoiVVNEIn0sIm1lcmNoYW50SWQiOiJ5c3cyamJma2t3bm42dHhqIiwidmVubW8iOiJvZmYifQ==";
        if (Platform.OS === 'ios') {
            BrainTreeClient.setupWithURLScheme(token, 'com.collectivechild.payments');
        } else {
            BrainTreeClient.setup(token);
        }
    
        BrainTreeClient.showPaymentViewController(options).then(function(nonce) {
            console.log("Nouncesfdfgdfg>>>"+nonce)
          //payment succeeded, pass nonce to server
        })
        .catch(function(err) {
          //error handling
          console.log(`Error ${err}`)
    });
    }
    render(){
        return(
            <View>
            </View>
        );
    }
}

export default TransactionComponent;
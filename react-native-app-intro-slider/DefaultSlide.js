// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Dimensions,
//   Platform,
// } from 'react-native';

// export default class DefaultSlide extends React.PureComponent {
//   render() {
//     const style = {
//       backgroundColor: this.props.backgroundColor,
//       paddingTop: this.props.topSpacer,
//       paddingBottom: this.props.bottomSpacer,
//       width: this.props.width,
//       height: this.props.height,
//     }
//     return (
//       <View style={[styles.mainContent, style]}>
//         <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
//         <Image source={this.props.image} style={this.props.imageStyle} />
//         <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   mainContent: {
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   text: {
//     color: 'rgba(255, 255, 255, .7)',
//     fontSize: 16,
//     textAlign: 'center',
//     fontWeight: '300',
//     paddingHorizontal: 16,
//   },
//   title: {
//     fontSize: 26,
//     color: 'rgba(255, 255, 255, .7)',
//     fontWeight: '300',
//     paddingHorizontal: 16,
//   }
// });


import React from 'react';
import {
 StyleSheet,
 Text,
 View,
 Image,
 Dimensions,
 Platform,
} from 'react-native';

export default class DefaultSlide extends React.PureComponent {
 render() {
 const style = {
 backgroundColor: this.props.backgroundColor,
 // paddingTop: this.props.topSpacer,
 paddingBottom: this.props.bottomSpacer,
 width: this.props.width,
 height: this.props.height,
 }
 return (
 <View style={[styles.mainContent, style]}>
 {/* <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text> */}
 {/* <Text style={{position:"absolute",top:300,zIndex:3}}> Hello</Text> */}
 {/* <Image source={this.props.image} style={this.props.imageStyle} /> */}
 <View style={{height:"57%",width:"100%",backgroundColor:"#f6ede8",justifyContent:"center",alignItems:"center"}}>
 <Image source={this.props.image} style={this.props.imageStyle}/>

 </View>
 
 <View style={{backgroundColor:"white",width:"100%" ,height:200,marginTop:50,zIndex:10}}>
 <Text style={[styles.text, this.props.textStyle1]}>{this.props.text1}</Text>
 <Text style={[styles.text, this.props.textStyle2]}>{this.props.text}</Text>
 </View>
 </View>
 );
 }
}

const styles = StyleSheet.create({
 mainContent: {

 // justifyContent: 'center',
 alignItems: 'center',
 },
 text: {
 color: "black",
 fontFamily: 'Century Gothic',
 fontSize: 16,
 textAlign: 'center',
 fontWeight: '300',
 paddingHorizontal: 16,

 
 },
 title: {
 fontSize: 26,
 color: 'rgba(255, 255, 255, .7)',
 fontWeight: '300',
 paddingHorizontal: 16,
 fontFamily: 'Century Gothic'
 }
});

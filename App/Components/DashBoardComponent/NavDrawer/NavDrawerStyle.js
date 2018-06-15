import {
    StyleSheet,
    Platform,
    Image,
    StatusBar
} from 'react-native';
import Dimensions from 'Dimensions';
import Colors from '../../../Constants/Colors';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const window = Dimensions.get('window');

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 75 : 56;

export default StyleSheet.create({

    headerTitle: {
       
        color: Colors.TEXT_COLOR,
       
        fontSize: 20,
        
      },


    toolBarStyle: {
        backgroundColor: Colors.WHITE,
        height: APPBAR_HEIGHT,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    
});
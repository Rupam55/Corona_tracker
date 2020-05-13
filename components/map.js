import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';


class Home extends Component {
  render() {
    let remove = 'document.getElementById("main-content").style.display="none";'+
    'document.getElementsByClassName("row")[0].remove("row");'+
    'document.getElementsByClassName("header-bottom")[0].remove("header-bottom");'+
    'document.getElementsByClassName("footer-section")[0].remove("footer-section");'
    let remove2 = ''
    return (
     <View style={styles.Card}>
       <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={remove}
        source={{ uri: "https://www.mohfw.gov.in/index.php" }}/>
    </View>
   )
  }
}


// const Home = ({ weather, temperature }) => {
//   return (
//     < WebView source = {{uri: 'https://www.mohfw.gov.in/index.php'}}/>
//   );
// };
// function Home() {
//   return (
//     <WebView source={{ uri: "https://www.mohfw.gov.in/index.php" }} />
//   );
// }

const styles = StyleSheet.create({
    Card: {
        flex:1,
        margin:'3%',
        marginBottom:'1%'
    },
});

export default Home;
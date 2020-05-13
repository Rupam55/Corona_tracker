import React,{Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

class Home extends Component {
  render() {
    return (
     <View style={styles.Card}>
       <WebView
        source={{ uri: "https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en" }}/>
    </View>
   )
  }
}

const styles = StyleSheet.create({
    Card: {
        flex:1,
        margin:'3%',
        marginBottom:'1%'
    },
});

export default Home;
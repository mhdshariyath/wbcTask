import React, { Component } from 'react';
import { Card, Icon } from 'react-native-elements'
import {
  Image,
  ImageBackground,
  Linking,
  ListView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

class Blog extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.ImageBg}></Image>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    margin:16,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  ImageBg:{
    flex:1,
    margin:16,
    width:'100%',
    height:150,
    resizeMode:'cover'
  }

});

export default Blog;
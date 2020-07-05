import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text, Button, Image, ActivityIndicator} from 'react-native';
import firebase from '../src/firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Dashboard extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      data: [],
      page:1,
      isLoading: false,
      title_movie:''
    }
  }

  // signOut = () => {
  //   firebase.auth().signOut().then(() => {
  //     this.props.navigation.navigate('Login')
  //   })
  //   .catch(error => this.setState({ errorMessage: error.message }))
  // }  

  componentDidMount(){
    this.setState({isLoading: true}, this.getdata,this.title_movie)
    //this.getdata()
  }

  getdata = async () => {
    const apiURL =  "https://www.omdbapi.com/?type=movie&apikey=5d81e1ce&s=guardians&page="+ this.state.page
    fetch(apiURL).then((res) => res.json())
    .then((resJson) => {
      this.setState({
      data: this.state.data.concat(resJson.Search),
      isLoading: false
    });
  })

  }


  _onPress(item) {

    console.log(item.Title);

    var str_title = item.Title;

    console.log(str_title);

       this.props.navigation.navigate('Details', {
        JSON_ListView_Clicked_Item: str_title
       });

  }

  renderRow = ({item}) =>{
    // const { params } = this.props.navigation.state;  
    const { navigate } = this.props.navigation
   
    return(

      <View style = {styles.itemRow}>

      <TouchableOpacity onPress={() => this._onPress(item)}>
      <Image source = {{uri:item.Poster}} style = {styles.itemImage}/>
      </TouchableOpacity>

         <Text numberOfLines={1} ellipsizeMode='tail' style = {styles.itemText}>{item.Title}
         </Text>
         <Text numberOfLines={1} ellipsizeMode='tail' style = {styles.itemText}>{item.Year}
         </Text>
      </View>

    );
  }

  renderFooter = () => {
    return(
      this.state.isLoading ?
      <View style = {styles.loader}>
        <ActivityIndicator size="large"
        color="black"></ActivityIndicator>
      </View>:null
    )

  }

  handleLoadmore = () => {

    this.setState({page: this.state.page + 1},this.getdata)
    
  }

  render(){
    
    return (

      <FlatList
        style = {styles.container}
        data = {this.state.data}
        renderItem = {this.renderRow}
        numColumns={3}
        keyExtractor = {(item,index) => index.toString()}
        onEndReached = {this.handleLoadmore}
        onEndReachedThreshold = {1}
        ListFooterComponent = {this.renderFooter}

      ></FlatList>

    );
  

  }

  // render() {
  //   this.state = { 
  //     displayName: firebase.auth().currentUser.displayName,
  //     uid: firebase.auth().currentUser.uid
  //   }    
  //   return (
  //     <View style={styles.container}>
  //       <Text style = {styles.textStyle}>
  //         Hello, {this.state.displayName}
  //       </Text>

  //       <Button
  //         color="orange"
  //         title="Logout"
  //         onPress={() => this.signOut()}
  //       />
  //     <View style={styles.flatlist}>
  //     <Button
  //         color="orange"
  //         title="Logout"
  //         onPress={() => this.signOut()}
  //       />
  //     </View>


  //     </View>


  //   );
  // }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    margin:16,
    backgroundColor: '#fff'
  },
  itemRow:{
    flexDirection: 'column',
    flex: 1,
    margin: 1,
    borderColor:'#fff',
  },
  itemText:{
    fontSize:12,
    padding:6,
    alignItems:'center',
    alignContent:'center'
  },
  itemImage:{
  width:'100%',
  height:200,
  resizeMode:'cover'   
  },
  loader:{
    marginTop:10,
    alignItems:'center'
  }
 
});


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex",
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     padding: 35,
//     backgroundColor: '#fff'
//   },
//   flatlist:{
//     flex: 1,
//     backgroundColor:'#81c04d',
//     flexDirection:'column'    //Step 1
// },

// textStyle: {
//   fontSize: 15,
//   marginBottom:6
// }
 
// });

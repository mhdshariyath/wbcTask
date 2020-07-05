import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

class Details extends Component {


  constructor(props) {
    super(props)
    this.state = { 
     
      data: ''

    }
    
  }

  componentDidMount(){
    this.getdata()
  }


  getdata = async () => {

    const { JSON_ListView_Clicked_Item } = this.props.route.params;

    console.log('Checking in this Api');

    const apiURL =  "https://www.omdbapi.com/?plot=full&apikey=5d81e1ce&t="+encodeURI(JSON_ListView_Clicked_Item)
    console.log(apiURL);

    fetch(apiURL).then((res) => res.json())
    .then((resJson) => {

      console.log(resJson);

      this.setState({
      
         data: resJson
    
    });
})


  }

  render() {

    const { JSON_ListView_Clicked_Item } = this.props.route.params;
   
    return (
    
          <ScrollView>
          <Image source = {{uri:this.state.data.Poster}} style = {styles.itemImage}/>
          
          <Text style = {styles.itemText}>{"Title : " + this.state.data.Title}</Text>
          <Text style = {styles.itemText}>{"Year : " + this.state.data.Year}</Text>
          <Text style = {styles.itemText}>{"Rated : " + this.state.data.Rated}</Text>
          <Text style = {styles.itemText}>{"Released : " + this.state.data.Released}</Text>
          <Text style = {styles.itemText}>{"Runtime : " + this.state.data.Runtime}</Text>
          <Text style = {styles.itemText}>{"Genre : " + this.state.data.Genre}</Text>
          <Text style = {styles.itemText}>{"Director : " + this.state.data.Director}</Text>
          <Text style = {styles.itemText}>{"Writer : " + this.state.data.Writer}</Text>
          <Text style = {styles.itemText}>{"Actors : " + this.state.data.Actors}</Text>
          <Text style = {styles.itemText}>{"Plot : " + this.state.data.Plot}</Text>
          <Text style = {styles.itemText}>{"Language : " + this.state.data.Language}</Text>
          <Text style = {styles.itemText}>{"Country : " + this.state.data.Country}</Text>
          <Text style = {styles.itemText}>{"Awards : " + this.state.data.Awards}</Text>
          <Text style = {styles.itemText}>{"Rating : " + this.state.data.imdbRating}</Text>

          <Text style = {styles.itemText}>{"Votes : " + this.state.data.imdbVotes}</Text>

          <Text style = {styles.itemText}>{"BoxOffice : " + this.state.data.BoxOffice}</Text>

          <Text style = {styles.itemText}>{"Production : " + this.state.data.Production}</Text>


          </ScrollView>

    );
  }
}

export default Details;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      margin:16,
      padding:16,
      backgroundColor: '#fff'
    },
   
    itemText:{
      fontSize:12,
      padding:6,
      alignItems:'center',
      alignContent:'center'
    },
    itemImage:{
    width:'100%',
    flex:1,
    height:450,
    resizeMode:'cover'   
    },
   
   
  });
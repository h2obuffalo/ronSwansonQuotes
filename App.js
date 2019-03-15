import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground } from 'react-native';
import axios from 'axios';
import Button from './Button';
import wood from './assets/wood.jpg';
// import Loading from './Loading';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      quote:null,
      loading:false,
    }
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(){
      this.setState({loading: true});
       axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes").then(({data}) =>{
      this.setState({quote: data, loading: false})
    });
  }

    getRandomColor = () =>
    {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }

  componentDidMount(){
    this.handlePress()
  }

  render() {
    let {quote} = this.state;
    return (
      <View style={styles.container}>
      {(quote === null ) ? <ActivityIndicator /> :
      <View style={styles.centering} >
      <ImageBackground source={wood}
      style={{backgroundColor:'#ccc', width:'100%', height:'100%', justifyContent:'center'}}
      >
      <Text style={styles.learn}>
      {quote}
      </Text>
      <Button handlePress={this.handlePress} />
      </ImageBackground>
       </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  learn: {
    backgroundColor: 'transparent',
    fontSize:30,
    fontWeight:"bold",
    color:'blue',
    marginRight:10,
    marginLeft:10,
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
  },

});

import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import ron from './assets/ron.png';

const Button = ({handlePress}) => {
    return(
        <TouchableOpacity
            onPress={handlePress}
            style={styles.opacity}
            >
            <Image style={styles.image} source={ron} />

        </TouchableOpacity>)
};

const styles = StyleSheet.create ({
   image: {
    height:180,
    width:140,
  },
  opacity: {
    marginTop:60,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  }
});

export default Button;
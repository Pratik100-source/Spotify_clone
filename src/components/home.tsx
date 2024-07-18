import React from "react";
import {View, Text} from 'react-native';
import { StyleSheet } from "react-native";

const Home = () =>{

    return(
       <View style={styles.container}>

        <Text style={{color:"#fff"}}>Welcome to Spotify</Text>

       </View>
    )
}

export const styles= StyleSheet.create({
  

    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        backgroundColor:"#000000",
        width:"100%",
        height:"100%"
    }
})

export default Home;
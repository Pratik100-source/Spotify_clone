import React from "react";
import {View, Text, Alert, Button, TouchableOpacity} from 'react-native';
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from "@fortawesome/free-regular-svg-icons/faBell";
import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { faGear } from "@fortawesome/free-solid-svg-icons";





const Home = () =>{


    return(
       <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.header_text}>Good morning</Text>

        <View style={styles.header_icon}>
       <FontAwesomeIcon icon={faBell} size={30} color="white"></FontAwesomeIcon>
       <FontAwesomeIcon icon={faClock} size={30} color="white"></FontAwesomeIcon>
       <FontAwesomeIcon icon={faGear} size={30} color="white"></FontAwesomeIcon>
       </View>
       
       </View>
       

       </View>
    )
}

export const styles= StyleSheet.create({
  

    container:{
        flex:1,
        position:"absolute",
        backgroundColor:"#000000",
        width:"100%",
        height:"100%",

    },
    header:{
        position:"absolute",
        width:"100%",
        height:"30%",
        paddingTop: 83,
        paddingRight:15,
        paddingLeft: 15,
        paddingBottom:0,
        display:"flex",
        flexDirection:"row",
        // backgroundColor:"white"
    },
    header_text:{
       color:"#fff",
       fontSize:30,
       flex:0.7,
    //    paddingLeft:15
    },
    header_icon:{
        flex:0.3,
        color:"white",
        marginRight:"3%",
        display:"flex",
        flexDirection:"row",
        gap:15,
        paddingTop:9
    },
})

export default Home;
import React from "react";
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import { StyleSheet} from "react-native";
import { Image } from "react-native";
import Logo from "../images/logo.png";




const Signup = () =>{
       
   return(
    <View style={styles.main_div}>
        
        <View style={styles.submain_div}>
            <View style={styles.logo_div}>
            <Image source={Logo} style={styles.logo}></Image>
            </View>
            <View style={styles.credential_div}>
                <TextInput placeholder="Type something"></TextInput>
            </View>
        </View>
    </View>
   )
}

export const styles = StyleSheet.create({

    main_div:{
            flex:1,
            backgroundColor:"black",
            justifyContent:"center",
            paddingRight:15,
            paddingLeft:15,
            alignItems:"center",
            width:"100%",
            
    },

    submain_div:{
            display:"flex",
            flexDirection:"column",
            backgroundColor:"white",
            height:"60%",
            marginTop:90

    },

    logo_div:{
          flex:0.2,
    },

    credential_div:{
        flex:0.8,
        backgroundColor:"yellow",
        width:380,

    },
    logo:{
        width: "90%",
        height:"90%",
        position:"absolute",
        objectFit:"contain",
        
    },


})


export default Signup;
import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import Logo from "../images/logo.png";

export default function Splash(){
    
    return(
       
               <View style={styles.main}> 
               
               <Image source={Logo} style={styles.logo}></Image>
            
            
              </View>
       
        
    )
    

}

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        height:"100%",
        zIndex: 1001,
    },

    logo:{
        width: "25%",
        height:"25%",
        position:"absolute",
        objectFit:"contain",
        
    },
   
});
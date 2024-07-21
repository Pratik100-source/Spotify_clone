import React from "react";
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import { StyleSheet} from "react-native";
import { Image } from "react-native";
import Logo from "../images/logo.png";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";



const Signup = () =>{
       
   return(
    <View style={styles.main_div}>
        
        <View style={styles.submain_div}>
            <View style={styles.logo_div}>
            <Image source={Logo} style={styles.logo}></Image>
            <Text style={styles.text}>Millions of Songs,</Text>
            <Text style={[styles.text,{marginTop:-35}]}>Free on Spotify</Text>
            </View>
            <View style={styles.credential_div}>
                {/* <TextInput placeholder="Type something" style={styles.text_Input}></TextInput> */}
                <TouchableOpacity style={styles.credential}><Text style={styles.credential_text}>Signup with Google</Text></TouchableOpacity>
                <TouchableOpacity style={styles.credential}><FontAwesomeIcon icon={faGoogle} style={styles.credential_icon}></FontAwesomeIcon><Text style={styles.credential_text}>Signup with Google</Text></TouchableOpacity>
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
            height:"65%",
            marginTop:310

    },

    logo_div:{
          flex:0.4,
          display:"flex",
          flexDirection:"column"
    },
    logo:{
        width: "30%",
        height:"30%",
        position:"absolute",
        objectFit:"contain",
        marginLeft:"35%",
        marginRight:"50%",
        marginTop:0,
        marginBottom:0,
        flex: 0.4,

        
    },
    text:{
           
        fontSize:35,
        flex:0.3,
        textAlign:"center",
        top:90,

        
    },

    credential_div:{
        flex:0.6,
        backgroundColor:"yellow",
        width:380,
        paddingLeft:20,
        paddingRight:20

    },
   
    credential:{  

       borderWidth:1,
       borderColor:"black",
       borderRadius:10,
       height:50,
       width:340,
       alignItems:"center",
       justifyContent:"center",
       backgroundColor:"white",
    },

    credential_text:{
          
        fontSize:20,
    },

    credential_icon:{
        
    }

})


export default Signup;
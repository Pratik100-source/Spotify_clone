import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/components/splash';
import Home from "./src/components/home";
import { useEffect, useState } from 'react';
import Signup from "./src/components/signup";



export default function App() {
 

  const[showSplitScreen, setShowSplitScreen] = useState(true)
  
    useEffect(()=>{
         
      setTimeout(()=>{  
              
        setShowSplitScreen(false)
      },1000);
    },[])


  return (

    
      <View style={styles.container}>

       {/* {showSplitScreen?<Splash/>:<Home/>} */}

           <Signup/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

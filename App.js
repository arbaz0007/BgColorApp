import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import react, { useState } from 'react';
export default function App() {
  
  const[randomBackground,setRandomBackground] =useState("#ffffff");
  const generateColor=()=>{
    const hexRange="0123456789ABCDEF"
    let color="#"
    for(let i =0 ;i<6; i++){
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground(color)
  }
  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container,{backgroundColor :randomBackground}]}>
    
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>
            press me
          </Text>
        </View>
        </TouchableOpacity>
    </View>
    </>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:"#6A1B4D",
    paddingVertical:10,
    paddingHorizontal:40
  },
  actionBtnTxt:{
    fontSize:24,
    color:"#FFF"
    ,textTransform:'uppercase'
  }
});

import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import {useEffect, useState} from "react"

function App() {

  const [count, setCount] = useState(0)

  useEffect(()=>{
    const id = setInterval(()=>setCount((count)=> count+=1),1000)
    return ()=> clearInterval(id)
  }, []);

  return (
    <View  style={styles.contentWrapper}>
      <Text style={
        {
          color:'red',
          fontSize:32,
          marginTop:'25%',

        }
        }>Time counter: {count}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  contentWrapper:{
    width:500,
    flex:1,
    height:800,
    backgroundColor:'#f7f7f7',
    justifyContent:'center',
  }
})
export default App;
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import PComponent from './components/PComponent';
import { useState } from 'react';

export default function App() {
  const [state, setState] = useState('Trang thai ung dung');
  
  updateState = () =>{
    if(state == 'Trang thai ung dung') {
      setState('Trang thai update')
    }
    else {
      setState('Trang thai ung dung')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <PComponent 
          myState={state}
          press={updateState} 
          />
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.redBox}></View>
          <View style={styles.blueBox}></View>
          <View style={styles.blackBox}></View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top:{
    marginTop: 35,
    flex: 1,
  },
  boxContainer:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  redBox:{
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
  blueBox:{
    backgroundColor: "blue",
    width: 100,
    height: 100,
  },
  blackBox:{
    backgroundColor: "black",
    width: 100,
    height: 100,
  },
});

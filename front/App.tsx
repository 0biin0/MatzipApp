import React from 'react';
import { Text, TextInput } from 'react-native';
import {StyleSheet, View, Button, SafeAreaView} from 'react-native';


function App(): React.ReactNode {
  return <SafeAreaView style={styles.container}>
    <View style={styles.inputContainer}> 
    <TextInput  style={styles.input}/>
    <Text>텍스트</Text>
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'yellow',
  },
  input: {
    flex: 1,
    borderWidth:2,
    borderColor: 'black',
    height:100,
    width:100,
  },
  inputContainer: {
    flex: 1,
    backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center'
  }
});

export default App;
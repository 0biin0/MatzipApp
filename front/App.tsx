import React from 'react';
import { Text, TextInput } from 'react-native';
import {StyleSheet, View, Button, SafeAreaView} from 'react-native';


function App(): React.ReactNode {
  return <SafeAreaView>
    <View style={styles.container}>
    <Text>텍스트</Text>
    <Button title="버튼이름"  onPress={() => console.log('클림됨!')}/>
      <Text>하이</Text>
      <TextInput />
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'red',
    // margin: '10%',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default App;
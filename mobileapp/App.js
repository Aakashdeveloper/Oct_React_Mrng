import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ListItem from './Component/ProductList';
import ModalComponent from './Component/Modal'


export default function App() {
  const [MyText,setText] = useState("My Mobile App")
  return (
    <View style={styles.container}>
      <Text>My React Native</Text>
      <ListItem/>
      <Text>{MyText}</Text>
      <ModalComponent/>
      <Button title="Clickme" onPress={() => {setText('Button Clicked')}}/>
      <Button title="Revert" onPress={() => {setText('My Mobile App')}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

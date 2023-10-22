import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  Modal,
  Pressable,
} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const onChangeText = () => {

  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! aaaa</Text>
      <Text>Open up App.js to start working on your app! Tes22t</Text>
      <TextInput
        // style={styles.input}
        onChangeText={onChangeText}
      // value={'text'}
      />
      <Image
        source='./assets/favicon.png'
      />
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
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

import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Pressable,ScrollView } from 'react-native';

import Task from './components/Task';

export default function App() {

  const [todo,setTodo] = useState()
  const [todos,setTodos] = useState([])

  const handleSaveTodo = () => {
    setTodos(todos => [...todos,todo])
  }

  return (
    <View style={styles.container}>
      <Text>Todo List</Text>
      <TextInput style={[styles.textInput]} placeholder='Coloque sua tarefa aqui.' onChangeText={(text)=>{setTodo(text)}}/>
      <Pressable style={[styles.pressable]} onPress={handleSaveTodo}><Text style={[styles.text]}>Salvar tarefa</Text></Pressable>
      <ScrollView>
        {todos.map((index,key)=>{
         return (
          <View key={key}>
            <Task text={index} />
          </View>
         )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  textInput : {
    backgroundColor:"#c1c1c1",
    fontSize:20,
    borderRadius:10,
    width: "80%",
    padding: 5,
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 40
  },
  pressable:{
    backgroundColor: "#ff0058",
    padding: 5,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  }
});

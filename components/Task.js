import { View,Text,Pressable,TextInput,StyleSheet } from 'react-native'
import { useState } from 'react'

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Task(props) {

    const [isEdited,setIsEdited] = useState(false)
    const [todo,setTodo] = useState(props.text)
    const [textTodo,setTextTodo] = useState()
    const [isDeleted,setIsDeleted] = useState(false)

    const handleChangeTodo = ()=>{
        setTodo(textTodo)
        setIsEdited(false)
    }

    return isEdited === false? (
        <View style={[styles.container,isDeleted === true?{display:"none"}:{display:"flex"}]}>
            <Text style={[styles.containerText]}>{todo}</Text>
            <View style={[styles.containerActions]}>
                <Pressable>
                    <AntDesign onPress={()=>{setIsDeleted(true)}} name="close" size={24} color="black" />
                </Pressable>
                <Pressable>
                    <Feather onPress={()=>{setIsEdited(!isEdited)}} name="edit-3" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    ):
    (
        <View  style={[styles.container,styles.containerActions]}>
            <TextInput style={[styles.TextInput]}  placeholder={props.text} onChangeText={(text)=>{setTextTodo(text)}} />
            <Pressable>
                <MaterialIcons name="done" size={24} color="black" onPress={handleChangeTodo}/>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      width: "90%",
      backgroundColor: "#c1c1c1",
      borderRadius:10,
      marginHorizontal:20,
      display: "flex",
      flexDirection:"row",
      justifyContent: "space-around",
      padding: 8,
      marginTop:15
    },
    containerText: {
        fontSize:20,
        textAlign: 'center',
        display: "flex",
        fontWeight: "700",
        justifyContent: "center",
        color: "#fff"
    },
    containerActions : {
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    TextInput : {
        borderBottomColor: "#c1c1c1",
        borderBottomWidth: 2,
        backgroundColor: "#fff",
        width: "80%",
        borderRadius: 10,
        padding: 10
    }
  });
  
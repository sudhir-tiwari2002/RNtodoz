import React, { useState } from "react";

import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,FlatList,Platform
} from "react-native";
import {IconButton} from "react-native-paper";
import Fallback from "../components/Fallback";
// const dummyData = [
//   {
//     id: "0",
//     title: " wash car",
//   },
//   {
//     id: "1",
//     title: "Read a book",
//   },
// ];

const TodoScreen = () => {

    const [todo,setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [editedTodo, setEditedTodo] = useState(null)



    // handle add todo
    
    const handleAddTodo=()=>{
        // structure of a single todo item{
        //     id:
        //     title:
        // }
        setTodoList([...todoList , {id:Date.now().toString() , title:todo}] )
        setTodo('')

    }

    // handle Delete Todo 
   const handleDeleteTodo=(id)=>{
    const updatedTodoList = todoList.filter((todo)=>todo.id !== id)

    setTodoList(updatedTodoList )
    
    }

    // handle Edit todo 
    const handleEditTodo = (todo) =>{
        setEditedTodo(todo.id)
        setTodo(todo.title)

    }

    const handleUpadateTodo =()=>{
        const updatedTodos = todoList.map((item)=>{
            if(item.id === editedTodo){
                return{...item,title:todo
                }
            }
            return item

            
        })
        setTodoList(updatedTodos)
            setEditedTodo(null)
            setTodo("")
    }

    // renderTodos
  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#1e90ff",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 12,
          flexDirection:"row",
          alignItems:"center",
          ...Platform.select({
            ios:{
                shadowColor:"#000",
                shadowOffset:{width:0,height:2},
                shadowOpacity:0.8,
                shadowRadius: 3,
                
            },
            android:{
                elevation:6,
                borderRadius:6
                
            }
          })
          
        }}
      >
        
        
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800" ,flex:1 }}>
          {item.title}
        </Text>
        <IconButton icon="pencil" iconColor="#fff" onPress={()=>handleEditTodo(item)}/>
        <IconButton icon="trash-can" iconColor="#fff" onPress={()=> handleDeleteTodo(item.id)}/>
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 16 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          paddingVertical: 8,
          paddingHorizontal: 16,
          
        }}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText)=> setTodo(userText)}
      />

      {editedTodo?<TouchableOpacity
        style={{
          backgroundColor: "#000",
          borderRadius: 6,
          paddingVertical: 12,
          marginVertical: 34,
          alignItems: "center",
        }}
        onPress={()=>handleUpadateTodo()}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }} >
          save
        </Text>
      </TouchableOpacity>:
      <TouchableOpacity
      style={{
        backgroundColor: "#000",
        borderRadius: 6,
        paddingVertical: 12,
        marginVertical: 34,
        alignItems: "center",
      }}
      onPress={()=>handleAddTodo()}
      disabled={todo.length<=0}
    >
      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }} >
        Add
      </Text>
    </TouchableOpacity>
      }

      {/* Render Todo List  */}

      <FlatList data={todoList} renderItem={renderTodos} />

        {
            todoList.length <=0 &&  <Fallback/>
        }

    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});

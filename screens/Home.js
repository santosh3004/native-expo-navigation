import { View,StyleSheet, Text, Button, FlatList, TouchableOpacity,TextInput } from 'react-native'
import { globalStyle } from '../styles/Global'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {addTask,deleteTask,didTask} from '../store/taskAction'

const Home = ({ navigation }) => {
  const dispatch=useDispatch();
  const tasks=useSelector(state=>state.tasks)
  const [text,setText]=useState('');

  const changeHandler=(val)=>{
    setText(val);
  }

  const submitTask=(text)=>{
    dispatch(addTask(text))
  }

  const removeTask=(id)=>{
    dispatch(deleteTask(id))
  }

  const finishTask=id=>{dispatch(didTask(id))}

  return (
    <View style={globalStyle.container}>
      <TextInput style={styles.input}
      placeholder='Add New Task'
      onChangeText={changeHandler}
      />
      <Button title="Add Task" onPress={()=>{submitTask(text)}}/>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity style={globalStyle.item} onPress={()=>
            navigation.navigate('Task',item)
          }>
            <Text onPress={()=>finishTask(item.id)} style={item.done ? null : {fontWeight:'bold'}} >{item.task}</Text>
            <Button title='Delete' onPress={()=>removeTask(item.id)} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
const styles=StyleSheet.create({
  input:{
    padding:10,
    backgroundColor:'white',
    margin:10,
    paddingVertical:6,
    borderBottomWidth:1,
    borderBottomColor:'grey',
  },
})
export default Home;

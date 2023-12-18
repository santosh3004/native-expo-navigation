import { View, Text,FlatList,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import {globalStyle} from '../styles/Global'
import { useSelector,useDispatch} from 'react-redux';
import { deleteTask,didTask } from '../store/taskAction';


const About = () => {
  const dispatch=useDispatch()
  const tasks=useSelector(state=>state.tasks)
  const tasksDone=tasks.filter(item=>item.done===true)

  const removeTask=id=>{dispatch(deleteTask(id))}
  const finishTask=id=>{dispatch(didTask(id))}

  return (
    <View style={globalStyle.container}>
      <Text>Done Tasks</Text>
      <FlatList
        data={tasksDone}
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

export default About
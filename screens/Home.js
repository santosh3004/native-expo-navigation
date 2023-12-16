import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { globalStyle } from '../styles/Global'
const Home = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { "task": "HTML I", "done": true, "id": "1" },
    { "task": "CSS", "done": true, "id": "2" },
    { "task": "Responsive design", "done": true, "id": "3" },
    { "task": "Git", "done": true, "id": "4" },
    { "task": "JavaScript I", "done": true, "id": "5" },
    { "task": "JavaScript II", "done": false, "id": "6" }
  ]);


  return (
    <View style={globalStyle.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>
            navigation.navigate('Task',item)
          }>
            <Text>{item.task}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home

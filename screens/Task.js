import { View, Text,Button } from 'react-native'
import React from 'react'
import {globalStyle} from '../styles/Global'

const Task = ({navigation,route}) => {
  const gotoHome=()=>{
    navigation.pop();
  }
  return (
    <View style={globalStyle.container}>
      <Text>{route.params.task}</Text>
      <Button title='Go To Home' onPress={gotoHome}/>

    </View>
  )
}

export default Task
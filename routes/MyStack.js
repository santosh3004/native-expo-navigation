import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../screens/Home';
import Task from '../screens/Task';
import About from '../screens/About';



const Stack= createStackNavigator();

const screenOptionsStyle={
  headerStyle:{
    backgroundColor:'red'
  },
  headerTintColor:'white',
  headerTitleStyle:{
    fontWeight:'bold'
  }
}



const AboutStack=()=>{
return(
  <Stack.Navigator
  screenOptions={screenOptionsStyle}
  >
          <Stack.Screen name='Done' component={About}/>

  </Stack.Navigator>
)
}

const HomeStack = () => {
  return (
    <Stack.Navigator
    screenOptions={screenOptionsStyle}
    >
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Task' component={Task} options={({route})=>({
        title:route.params.task
      })} />
    </Stack.Navigator>
  )
}

export {HomeStack,AboutStack}
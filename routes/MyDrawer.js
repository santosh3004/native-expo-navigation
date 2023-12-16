
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { AboutStack, HomeStack } from './MyStack'
import MyTab from './MyTab'



const MyDrawer = () => {
  const Drawer=createDrawerNavigator()
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={MyTab}/>
      <Drawer.Screen name='About' component={AboutStack}/>
    </Drawer.Navigator>
  )
}

export default MyDrawer
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Maxfit from './Maxfit'
import Feed from './Feed'
import Perfil from './Perfil'
import Dieta from './Dieta'
import Chat from './Chat'
import Dieta1 from './Dieta1'

const Stack = createStackNavigator()

export default function App(){
  return <> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen name = 'Home' component = {Maxfit}
        options = {{
          headerShown: false,
        }}/>
        <Stack.Screen name = 'Feed' component = {Feed}
        options = {{
          headerShown: false,
        }}/>  
         <Stack.Screen name = 'Perfil' component = {Perfil}
        options = {{
          headerShown: false,
        }}/> 
        <Stack.Screen name = 'Dieta' component = {Dieta}
        options = {{
          headerShown: false,
        }}/>   
        <Stack.Screen name = 'Chat' component = {Chat}
        options = {{
          headerShown: false,
        }}/>   
        <Stack.Screen name = 'Dieta1' component = {Dieta1}
        options = {{
          headerShown: false,
        }}/>           
      </Stack.Navigator>
    </NavigationContainer>
  </>
}

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home'
import AddDeck from './AddDeck'
import Detail from './Detail'
import Quiz from './Quiz'
import AddQuestion from './AddQuestion'
import { darkGreen } from '../utils/colors'

const Stack = createStackNavigator()
export default function MyStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"
        component={Home}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: darkGreen
          }
        }}/>
      <Stack.Screen name="Detail"
        component={Detail}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: darkGreen
          }
        }}/>
      <Stack.Screen
        name="AddDeck"
        component={AddDeck}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: darkGreen
          }
        }}
        />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: darkGreen
          }
        }}
        />
      <Stack.Screen
        name="AddQuestion"
        component={AddQuestion}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: darkGreen
          }
        }}
        />
    </Stack.Navigator>
  )
}

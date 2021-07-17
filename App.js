import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, StatusBar } from 'react-native'
import Home from './Components/Home'
import Constants from 'expo-constants'
import { darkGreen, darkOrange } from './utils/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Detail from './Components/Detail'

function MyStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }} >
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

MyStatusBar.propTypes = {
  backgroundColor: PropTypes.string
}

const Stack = createStackNavigator();

function MyStack () {
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
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MyStatusBar backgroundColor={darkGreen} barStyle='light-content' />
        <MyStack />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

import 'expo-asset'
import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Constants from 'expo-constants'
import { darkGreen } from './utils/colors'
import { NavigationContainer } from '@react-navigation/native'
import { setLocalNotification } from './utils/helpers'
import MyStack from './Components/MyStack'
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

export default function App () {
  useEffect(() => {
    setLocalNotification()
  }, [])
  return (
    <NavigationContainer>
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <MyStatusBar backgroundColor={darkGreen} barStyle='light-content' />
          <MyStack />
        </View>
      </Provider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

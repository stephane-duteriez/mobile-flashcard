import React, { useRef, useEffect } from 'react'
import { Text, StyleSheet, Animated } from 'react-native'
import { connect, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Entypo } from '@expo/vector-icons'
import MyButton from './MyButton'
import { lightGreen, green } from '../utils/colors'
import FloatingButton from './FloatingButton'
function Detail ({ route, navigation }) {
  const { deskTitle } = route.params

  const deck = useSelector((decks) => {
    return decks[deskTitle]
  })

  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 800,
        useNativeDriver: true
      }
    ).start()
  }, [])

  return (
    <Animated.View style={[styles.container, {
      transform: [
        { scale: fadeAnim }
      ]
    }]}>
      <Text style={styles.title}>
        {deskTitle}
      </Text>
      <Text style={styles.info}>
        {`${deck.questions.length} cards`}
      </Text>
      <MyButton
        label= "Start Quiz"
        Icon={() => <Entypo name="documents" size={24} color="black" />}
        color={lightGreen}
        onPress={() => navigation.navigate('Quiz', {
          deskTitle: deskTitle
        })}
      />
      <FloatingButton
        onPress={() => navigation.navigate('AddQuestion', {
          deskTitle: deskTitle
        })} />
    </Animated.View>
  )
}

export default connect()(Detail)

Detail.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.object
  }),
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: green
  },
  title: {
    fontSize: 32
  },
  info: {
    fontSize: 24,
    color: 'grey'
  }
})

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import MyButton from './MyButton'
import { lightGreen, green } from '../utils/colors'
import FloatingButton from './FloatingButton'
function Detail ({ route, navigation }) {
  const { deskTitle } = route.params

  const deck = useSelector((decks) => {
    return decks[deskTitle]
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {deskTitle}
      </Text>
      <Text style={styles.info}>
        {deck.questions.length}
      </Text>
      <MyButton
        label= "Start Quiz"
        color={lightGreen}
        onPress={() => navigation.navigate('Quiz', {
          deskTitle: deskTitle
        })}
      />
      <FloatingButton
        onPress={() => navigation.navigate('AddQuestion', {
          deskTitle: deskTitle
        })} />
    </View>
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

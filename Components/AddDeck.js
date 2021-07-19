import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { green, ligthOrange } from '../utils/colors'
import MyButton from './MyButton'
import TextValidation from './TextValidation'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'
export default function AddDeck ({ navigation }) {
  const [deskName, setDeskName] = useState('')
  const [errorDeskName, setErrorDeskName] = useState('')
  const [alreadyValidate, setAlreadyValidate] = useState(false)

  const validateDeskName = (value) => {
    value === '' ? setErrorDeskName('You need to enter a name!') : setErrorDeskName('')
    // TODO check already exist
    return value !== ''
  }

  const onSubmit = () => {
    let valide = true
    valide = validateDeskName(deskName)
    setAlreadyValidate(true)
    if (valide) {
      saveDeckTitle(deskName)
        .then(() => addDeck(deskName))
      // we are optimist that it should work
      navigation.navigate('Home')
    }
  }

  const onChangeDeskName = (value) => {
    setDeskName(value)
    if (alreadyValidate) {
      validateDeskName(value)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        What is the tiltle of the new deck ?
      </Text>
      <TextValidation
        onChangeText={onChangeDeskName}
        value={deskName}
        placeholder="Enter the desk's name!"
        errorValidation={errorDeskName}
      />
      <MyButton
        label="Submit"
        onPress={onSubmit}
        color={green}
      />
    </View>
  )
}

AddDeck.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ligthOrange
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    width: '80%'
  }
})

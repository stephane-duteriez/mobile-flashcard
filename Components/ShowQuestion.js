import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default function ShowQuestion ({ questionText, answerText }) {
  const [recto, setRecto] = useState(true)
  return (
    <View>
      <Text>
        {recto ? questionText : answerText}
      </Text>
      <TouchableOpacity
         onPress={ () => setRecto(!recto)}
      >
        <Text>{recto ? 'Answer' : 'Question'}</Text>
      </TouchableOpacity>
    </View>
  )
}

ShowQuestion.propTypes = {
  questionText: PropTypes.string,
  answerText: PropTypes.string
}

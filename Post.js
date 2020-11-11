import React, { useState }from 'react'
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';
import {styles} from './styles'

function numLikes() {
	const [likes, setLikes] = useState(0)
}

export const Post = ({props}) => {
	return(
      <View style={styles.container}>
        <Text>{props.user}</Text>
        <Text>{props.text}</Text>
        <Text>
          <Button title='Like' onPress={() => setLikes(likes + 1)}/>
          Likes: {props.numLikes}   {props.date.toLocaleString()}
        </Text>
      </View>
     )
  }
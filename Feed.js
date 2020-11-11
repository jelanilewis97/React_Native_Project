import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { Button, FlatList, TextInput, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {Post} from './Post'
import {styles} from './styles'

export function Feed (){

	const [input, setInput] = useState('')
	const [posts, setPost] = useState([])
	const [postID, setPostID] = useState(0)

  	const postUpdate = () => {
	    if(input !== ''){
	      const date = new Date()
	      setPost([...posts, {text: input, postID: postID, user: 'Jelani Lewis', numLikes: 0, date: date}])
	      setPostID(postID + 1)
	      setInput('')
    	}
 	}

	return(
	<View style={styles.container}>
      <Text>FEED</Text>
      <TextInput 
        style={styles.textInput} 
        onChangeText={text => setInput(text)} 
        value={input} 
      />
      <Button style={styles.button} title='Post Status' onPress={postUpdate} />
      <View style={styles.feed}>
        <SafeAreaView style={styles.container}>
			<FlatList
				data={[...posts].reverse()}
				renderItem={({item}) => <Post props={item} />}
				keyExtractor={item => item.postID}
			/>	
		</SafeAreaView>
      </View>
      <StatusBar />
    </View>
		
	)
}
import React, {useState} from 'react';
import { Platform,
         SafeAreaView,
         ScrollView,
         Image,
         Text,
         View,
         TextInput,
         TouchableOpacity,
         Keyboard,
         KeyboardAvoidingView
} from 'react-native'
import { styles } from './Styles.js'

export default function App() {

  const [message, setMessageInInput] = useState()
  const [listOfMessages, setListOfMessages] = useState([])
  //var listOfMessages = ['`Hello my name is Anibot']

  const handleSendMessage = () => {
    Keyboard.dismiss()
    if(message && message.trim()){
        //setListOfMessages([...listOfMessages, message])
        listOfMessages.push(message)
        fetch_answer(message)
    }
    setMessageInInput(null)
  }

  async function fetch_answer(message) {
      try {
          let response = "`"
          do {
              let x = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
                  method: 'POST',
                  headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer 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`,
                  },
                  body: JSON.stringify({
                      "prompt": message,
                      "temperature": 0.7,
                      "max_tokens": 20,
                      "top_p": 0.6,
                      "frequency_penalty": 1,
                      "presence_penalty": 1,
                      "stop": ["."]
                  })
              });
              let json = await x.json()
              response += json.choices[0].text
          }while(response.trim() == "`")
          console.log(response)
          setListOfMessages([...listOfMessages, response])
          //listOfMessages.push(response)
      } catch (error) {
          console.error(error);
      }

  }

  return (

    <SafeAreaView style = {styles.container}>
      <View style = { styles.images_container }>
        <Image style = { styles.letters } source = { require('./letters/a.png') }/>
        <Image style = { styles.letters } source = { require('./letters/n.png') }/>
        <Image style = { styles.letters } source = { require('./letters/i.png') }/>
        <Image style = { styles.letters } source = { require('./letters/b.png') }/>
        <Image style = { styles.letters } source = { require('./letters/o.png') }/>
        <Image style = { styles.letters } source = { require('./letters/t.png') }/>
      </View>
      
      <ScrollView>
        <View>
          {
            listOfMessages.map((item, index) => {
                //console.log(item)
                if(item.charAt(0) == '`') {
                    return (
                        <TouchableOpacity key={index}>
                            <TextInput
                                value = {item.slice(1)}
                                style = {styles.bot_messages}
                                editable = {false}
                                multiline = {true}
                            >
                            </TextInput>
                        </TouchableOpacity>
                    )
                }
                else{
                    return (
                        <TouchableOpacity key = {index}>
                            <TextInput
                                value = { item.replace(/(\r\n|\n|\r)/gm, "").trim() }
                                style = { styles.user_messages }
                                editable = { false }
                                multiline = { true }
                            >
                            </TextInput>
                        </TouchableOpacity>
                    )
                }
            })
          }
        </View>
      </ScrollView>
    
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
       behavior = {Platform.OS === "ios" ? "padding" : "height"}
       style = {styles.sending_section}
      > 
        <TextInput 
          style = { styles.textInput }
          placeholder = "Start typing here..." 
          value = {message} 
          onChangeText = {message => setMessageInInput(message)} 
          multiline = {true}
          autoCapitalize = "sentences"
          autoCorrect = {true}
          keyboardType = "default"
          returnKeyType = "done"
        />
        <TouchableOpacity onPress = {() => handleSendMessage()}>
          <Image 
            source = { require('./telegram_plane.png') }
            style = { styles.telegram_plane }
          /> 
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

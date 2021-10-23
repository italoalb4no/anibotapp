import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    backgroundColor: '#C4C4C45C',
    borderRadius: 30,
    fontFamily: 'AmericanTypewriter',
    //paddingTop: 5,
    //paddingBottom: 5,
    width: '70%',
    textAlign: 'left',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5,
    textAlignVertical: 'center'
  },
  bot_messages: {
    textAlign: 'left',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 14,
    backgroundColor: 'rgba(207,23,54,0.63)',
    borderRadius: 30,
    width: '70%',
    fontFamily: 'AmericanTypewriter',
  },
  user_messages: {
    textAlign: 'right',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 14,
    backgroundColor: 'rgba(92,145,188,0.55)',
    borderRadius: 30,
    fontFamily: 'AmericanTypewriter',
  },
  images_container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25
  },
  text: {
    fontSize: 14
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  letters: {
    width: 50,
    height: 60
  },
  telegram_plane: {
    width: 50,
    height: 50,
  },
  sending_section: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
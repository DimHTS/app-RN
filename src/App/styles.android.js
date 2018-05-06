import {
  StyleSheet,
  Dimensions
} from 'react-native'


const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  boxCenter: {
    flex: 1,
    alignItems: 'center'
  },
  block: {
    marginTop: 20,
    backgroundColor: 'green',
    borderRadius: 20,
    height: height / 8,
    width: width / 1.5,
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  }
})
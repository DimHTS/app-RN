import React from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'

// Components
import Todo from './src/App/Todo'
// import Fancy from './src/App/Fancy'


export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo />
        {/* <Fancy /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6699FF'
  },
})


AppRegistry.registerComponent('Todo', () => Main);

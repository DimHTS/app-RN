import React from 'react'
import { AppRegistry, StyleSheet } from 'react-native'

// Components
import Todo from './src/App/Todo'

export default class Main extends React.Component {
  render() {
    return (
      <Todo />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


AppRegistry.registerComponent('Todo', () => Main);

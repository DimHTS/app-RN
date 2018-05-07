import React from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'

import ScrollableTabView from 'react-native-scrollable-tab-view'

// Components
import Todo from './src/App/Todo'
import Fancy from './src/App/Fancy'
import Reddit from './src/App/Reddit'


export default class Main extends React.Component {
  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#6699FF' }]}>
        <ScrollableTabView>
          <Reddit tabLabel="Reddit" />
          <Todo tabLabel="Todo" />
          <Fancy tabLabel="Fancy" />
          <View tabLabel="View" />
        </ScrollableTabView>
        {/* <Todo />
        <Fancy />
        <Reddit /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
    paddingTop: 28
  },
})


// AppRegistry.registerComponent('Todo', () => Main);

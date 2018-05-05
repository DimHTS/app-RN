import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      newTodo: ''
    }
  }


  handlePress = () => {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ''
    })
  }

  render() {
    return (
      <View style={styles.top}>

        <TextInput
          value={this.state.newTodo}
          onChangeText={(text) => this.setState({ newTodo: text })}
        />

        <TouchableOpacity onPress={this.handlePress}>
          <Text>КНОПКА</Text>
        </TouchableOpacity>

        {this.state.todos.map((item, num) => {
          return <Text key={num}>{item}</Text>
        })}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  top: {
    marginTop: 40
  }
});

export default Todo;
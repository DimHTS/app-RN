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
    if (this.state.newTodo) {
      this.setState({
        todos: [...this.state.todos, this.state.newTodo],
        newTodo: ''
      })
    } else {
      alert('Заполните поле!')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={this.state.newTodo}
            onChangeText={(text) => this.setState({ newTodo: text })} />

          <TouchableOpacity
            style={styles.button}
            onPress={this.handlePress}>
            <Text>Добавить</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.todos}>
          {this.state.todos.map((item, num) => {
            return <Text style={styles.todo} key={num}>{item}</Text>
          })}
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20
  },
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    color: 'white',
    fontSize: 16,
    lineHeight: 1.2,
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    backgroundColor: 'yellow',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  todos: {
    marginTop: 10
  },
  todo: {
    marginBottom: 4,
    fontSize: 18,
    color: 'white',
    borderBottomWidth: 1,

  }
});

export default Todo;
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Reddit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    fetch('https://www.reddit.com/.json', {
      Accept: 'application/json'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data.data.children })
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>reddit</Text>
        <View>
          {this.state.posts.map((post, num) => (
            <Text key={num}>{post.data.author}</Text>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10
  }
})

export default Reddit;

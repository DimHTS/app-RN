import React, { Component } from 'react'
import {
  View,
  Text,
  Platform
} from 'react-native'

import { styles } from './styles'


class Fancy extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: true
    }
  }

  handleInvisible = () => {
    this.setState({ visible: false })
  }

  render() {
    if (this.state.visible) {
      return (
        <View style={styles.boxCenter}>
          <View style={styles.block}>
            {Platform.OS === 'android' ?
              <Text
                onPress={this.handleInvisible}
                style={styles.text}>
                Fancy_And
              </Text>
              :
              <Text style={styles.text}>Fancy_Ios</Text>
            }
          </View>
        </View>
      )
    } else {
      return (
        <View />
      )
    }
  }
}


export default Fancy;
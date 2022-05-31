import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Windmill from './Src/Components/Windmill';
import Flower from './Src/Components/Flower';
import Motor from './Src/Components/Motor';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
				<Windmill
					style={{ left: 10, top: 15 }}
				/>
				<Windmill
					style={{ left: 40, top: 36 }}
				/>
        <Windmill
					style={{ left: 190, top:1 }}
				/>
      
        
				<Motor
					style={{ top: -50}}
				/>
				<Flower
        style={{ left: 10, top: 23 }}
          ></Flower>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94BBA9',
  },
});
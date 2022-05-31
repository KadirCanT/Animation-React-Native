import React, { Component } from 'react';
import { StyleSheet, Animated,Image, View } from 'react-native';

export default class Flower extends Component {
  render() {
    return (
		<View style={styles.container}>
		<Image
			source={require('../../assets/vector.png')}
			style={styles.flowers}
			resizeMode={"contain"}
		/>
	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		zIndex: 5
	},
	flowers: {
		width: '80%'
	}
});
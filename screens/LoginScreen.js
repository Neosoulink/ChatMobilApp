import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = (props) => {
	const [name, setName] = useState('');
	const next = () => {
		if (name && name.length >= 5) return props.navigation.navigate("ChatScreen", { name });
		ToastAndroid.show("Please, your name must be not empty and > 4 letters!", ToastAndroid.SHORT)
	}

	return (
		<View style={styles.container}>
			<View style={styles.circle}></View>
			<View style={{ marginTop: 64 }}>
				<Image source={require('../assets/chat.png')} style={{ width: 100, height: 100, alignSelf: "center" }} />
			</View>
			{/* /End icon */}

			<View style={{ marginHorizontal: 32 }}>
				<Text style={styles.header}>Username</Text>
				<TextInput
					style={styles.input}
					placeholder="Ex: Solaris"
					onChangeText={(name) => { setName(name) }}
					value={name} />
			</View>
			{/* /End header */}

			<View style={{ alignItems: "flex-end", marginTop: 64, marginRight: 32 }}>
				<TouchableOpacity style={styles.next} onPress={next}>
					<Ionicons name="md-arrow-round-forward" size={24} color="#fff" />
				</TouchableOpacity>
			</View>
			{/* /End btn Next */}

		</View>
		// End container
	)
}

export default LoginScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f4f5f7"
	},
	circle: {
		width: 500,
		height: 500,
		borderRadius: 500 / 2,
		backgroundColor: "#fff",
		position: "absolute",
		left: -120,
		top: -20,
	},
	header: {
		fontWeight: "800",
		fontSize: 30,
		color: "#524E5A",
		marginTop: 32
	},
	input: {
		marginTop: 32,
		height: 50,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#8A87C3',
		borderRadius: 20,
		paddingHorizontal: 10,
		color: '#514E5A',
		fontWeight: '500'
	},
	next: {
		width: 70,
		height: 70,
		borderRadius: 70 / 2,
		backgroundColor: '#9075E3',
		alignItems: "center",
		justifyContent: "center"
	}
})

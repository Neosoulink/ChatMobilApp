import React, { useState, useEffect } from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../Fire';

const ChatScreen = ({ route }) => {
	const [messages, setMessages] = useState([]);
	const [user, setUser] = useState({
		_id: Fire.uid,
		name: route.params.name
	});


	useEffect(() => {
		Fire.get(message => {
			setMessages(previousMessages => GiftedChat.append(previousMessages, message));
		});
		return function cleanup() {
			Fire.off();
		}
	}, [Fire]);

	const chat = (<GiftedChat messages={messages} onSend={Fire.send} user={user} />);

	if (Platform.OS === 'android') {
		return (
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={30} enabled >
				{chat}
			</KeyboardAvoidingView>
		)
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			{chat}
		</SafeAreaView>
	);
}

export default ChatScreen;

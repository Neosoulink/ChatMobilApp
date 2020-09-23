import firebase from 'firebase';

class Fire {
	constructor() {
		this.init();
		this.checkAuth();
	}

	init = () => {
		if (!firebase.apps.length) {
			firebase.initializeApp({
				apiKey: "AIzaSyC19m1OjqVaIVZAFhJ2z19ht2zijPh-o1M",
				authDomain: "chatapp-6ad02.firebaseapp.com",
				databaseURL: "https://chatapp-6ad02.firebaseio.com",
				projectId: "chatapp-6ad02",
				storageBucket: "chatapp-6ad02.appspot.com",
				messagingSenderId: "431636397006",
				appId: "1:431636397006:web:d9465bbbb4ac24821a899f"
			});
		}
	}

	checkAuth = () => {
		firebase.auth().onAuthStateChanged(user => {

			if (!user) {
				firebase.auth().signInAnonymously();
			}
		});
	}

	send = messages => {
		messages.forEach(item => {
			const message = {
				text: item.text,
				timestamp: firebase.database.ServerValue.TIMESTAMP,
				user: item.user
			};
			this.db.push(message);
		});
	}

	get db() {
		return firebase.database().ref("messages");
	}

	parse = message => {
		const { user, text, timestamp } = message.val();
		const { key: _id } = message;
		const createdAt = new Date(timestamp);

		return {
			_id,
			createdAt,
			text,
			user
		};
	}

	get = callback => {
		this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
	}

	off() {
		this.db.off();
	}

	get uid() {
		return (firebase.auth().currentUser.uid);
	}
}

export default new Fire();

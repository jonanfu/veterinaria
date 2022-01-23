import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback
} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, database } from '../config/firebase';
import { AntDesign } from '@expo/vector-icons';
import color from '../color';
import { useNavigation } from '@react-navigation/native';


export default function Chat() {
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();

    const onSignOut = () => {
        signOut(auth).catch(error => console.log(error));
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{
                        marginRight: 10
                    }}
                    onPress={() => {
                        onSignOut();
                    }}
                >
                    <AntDesign name="logout" size={24} color={color.primary} style={{ marginRight: 10 }} />
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    useEffect(() => {
        const collectionRef = collection(database, 'chat');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, snapshot => {
            console.log(snapshot);
            setMessages(
                snapshot.docs.map(docs => ({
                    _id: docs.id,
                    createdAt: docs.data().createdAt.toDate(),
                    text: docs.data().text,
                    user: docs.data().user
                }))
            )
        });
        return unsubscribe;
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));

        const { _id, createdAt, text, user } = messages[0];

        addDoc(collection(database, 'chat'), {
            _id,
            createdAt,
            text,
            user
        });

    }, []);


    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth.currentUser?.email,
                avatar: 'https://placeimg.com/140/140/any'
            }}
            messagesContainerStyle={{
                backgroundColor: '#fff'
            }}

        />
    );
};
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import color from '../color'
import { Entypo } from '@expo/vector-icons';
const catImageUrl = "https://genrandom.com/blob:https://genrandom.com/f0533103-57cb-4c69-8532-3b183f395e3a/"

const Home = ({ navigation }) => {

    const Navigation = useNavigation();

    useEffect(() => {
        Navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={color.primary} style={{ paddingLeft: 10 }} />
            ),
            headerRight: () => (
                <Image
                    source={{ uri: catImageUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                    }}
                />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={color.lightGray} />
            </TouchableOpacity >
        </View>

    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
    },
    chatButton: {
        backgroundColor: color.primary,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: color.primary,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50,
    },

})
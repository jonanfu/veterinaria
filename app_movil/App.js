import React, { useState, createContext, useContext, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { auth } from './config/firebase'

import Chat from "./screens/Chat";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import { onAuthStateChanged } from "firebase/auth";

const stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={[user, setUser]}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function ChatStack() {
  return (
    <stack.Navigator defaultScreenOptions={Login}>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Chat" component={Chat} />
    </stack.Navigator>
  );
}

function AuthStack() {
  return (
    <stack.Navigator defaultScreenOptions={Login} screenOptions={{ headerShown: false }}>
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Signup" component={Signup} />
    </stack.Navigator>
  );
}

function RootNavigator() {
  const [user, setUser] = useContext(AuthenticatedUserContext);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,
      async authenticationUser => {
        setUser(authenticationUser);
        setIsLoading(false);
      }
    );
    return () => unsubscribe();
  }, [user]);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <NavigationContainer>
      {user ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider> 
  );
}



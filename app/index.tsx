import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const colorScheme = useColorScheme()
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <StatusBar  />
        <Image 
          source={require('@/assets/images/icon.png')}
          style={{
            height: 100,
            width: 100
          }}
        />
        <Text 
          style={{ 
            fontWeight: "bold", 
            fontSize: 24,
            padding: 8 
          }}
        >
          Sign In
        </Text>
        <Text
          style={{
            fontWeight: "300"
          }}
        >
          Let's experience the joy of telecare Al.
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
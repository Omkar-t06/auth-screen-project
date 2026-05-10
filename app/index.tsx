import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
      >
        <StatusBar />

        <Image source={require('@/assets/images/icon.png')} style={styles.logo} />

        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subTitle}>Let's experience the joy of telecare AI.</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
              <View style={[styles.inputContainer, styles.inputShadow]}>
                <MaterialCommunityIcons name="email-outline" size={20} color="#6B6B6B" style={styles.inputIcon} />
                <TextInput
                  placeholder="Enter your email..."
                  value={email}
                  onChangeText={setEmail}
                  style={styles.textInput}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholderTextColor="#9A9A9A"
                />
              </View>

          <Text style={[styles.label, { marginTop: 8 }]}>Password</Text>
              <View style={[styles.inputContainer, styles.inputShadow]}>
                <MaterialCommunityIcons name="lock-outline" size={20} color="#6B6B6B" style={styles.inputIcon} />
                <TextInput
                  placeholder="Enter your password..."
                  value={password}
                  onChangeText={setPassword}
                  style={styles.textInput}
                  secureTextEntry={secure}
                  placeholderTextColor="#9A9A9A"
                />
                <TouchableOpacity onPress={() => setSecure(!secure)} style={styles.eyeButton}>
                  <MaterialCommunityIcons name={secure ? 'eye-off-outline' : 'eye-outline'} size={20} color="#6B6B6B" />
                </TouchableOpacity>
              </View>

          <TouchableOpacity style={styles.signInButton} activeOpacity={0.85}>
            <Text style={styles.signInText}>Sign In</Text>
            <MaterialCommunityIcons name="arrow-right" size={20} color="#fff" />
          </TouchableOpacity>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <MaterialCommunityIcons name="facebook" size={20} color="#444" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <MaterialCommunityIcons name="google" size={20} color="#444" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <MaterialCommunityIcons name="instagram" size={20} color="#444" />
            </TouchableOpacity>
          </View>

          <View style={styles.linksRow}>
            <Text style={styles.smallText}>Don't have an account? </Text>
            <Text style={[styles.smallText, styles.linkText]}>Sign Up.</Text>
          </View>
          <TouchableOpacity>
            <Text style={[styles.smallText, styles.forgotText]}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FBF6',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  logo: {
    height: 80,
    width: 80,
    marginTop: 8,
    marginBottom: 12,
  },
  title: {
    fontWeight: '700',
    fontSize: 28,
    color: '#222',
    marginTop: 8,
  },
  subTitle: {
    color: '#8A8A8A',
    fontSize: 13,
    marginTop: 6,
    marginBottom: 18,
    textAlign: 'center',
    maxWidth: 300,
  },
  form: {
    width: '100%',
    marginTop: 8,
  },
  label: {
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    height: 52,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 52,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  inputShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  inputIcon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    color: '#222',
    paddingVertical: 0,
  },
  eyeButton: {
    padding: 6,
  },
  iconTouchable: {
    padding: 6,
  },
  signInButton: {
    flexDirection: 'row',
    backgroundColor: '#6FC22A',
    paddingVertical: 14,
    borderRadius: 28,
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginRight: 8,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
  },
  socialBtn: {
    width: 54,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    backgroundColor: '#fff',
  },
  linksRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 14,
    alignItems: 'center',
  },
  smallText: {
    color: '#777',
    fontSize: 13,
  },
  linkText: {
    color: '#6FC22A',
    fontWeight: '600',
  },
  forgotText: {
    color: '#6FC22A',
    alignSelf: 'center',
    marginTop: 8,
  },
});
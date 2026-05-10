import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInput } from 'react-native-paper';
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
          <TextInput
            mode="outlined"
            placeholder="elementary221b@gmail.com"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            outlineColor="#D7EBCF"
            activeOutlineColor="#6FC22A"
            left={<TextInput.Icon icon={() => <MaterialCommunityIcons name="email-outline" size={20} />} />}
            right={null}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Text style={[styles.label, { marginTop: 8 }]}>Password</Text>
          <TextInput
            mode="outlined"
            placeholder="Enter your password..."
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            outlineColor="#F1F1F1"
            activeOutlineColor="#6FC22A"
            secureTextEntry={secure}
            left={<TextInput.Icon icon={() => <MaterialCommunityIcons name="lock-outline" size={20} />} />}
            right={<TextInput.Icon icon={() => (
              <TouchableOpacity onPress={() => setSecure(!secure)} style={styles.iconTouchable}>
                <MaterialCommunityIcons name={secure ? 'eye-off-outline' : 'eye-outline'} size={20} />
              </TouchableOpacity>
            )} />}
          />

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
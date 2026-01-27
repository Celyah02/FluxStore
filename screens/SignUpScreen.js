import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log('Sign up pressed');
  };

  const handleSocialLogin = (provider) => {
    // Handle social login logic here
    console.log(`${provider} login pressed`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>Create</Text>
          <Text style={styles.headerTitle}>your account</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#000000"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#000000"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#000000"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              placeholderTextColor="#000000"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
            <View style={styles.inputUnderline} />
          </View>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleSignUp}
          activeOpacity={0.8}
        >
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>

        {/* Social Login Section */}
        <View style={styles.socialSection}>
          <Text style={styles.socialText}>or sign up with</Text>
          <View style={styles.socialIconsContainer}>
            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => handleSocialLogin('Apple')}
              activeOpacity={0.7}
            >
              <Text style={styles.appleIconText}>🍎</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => handleSocialLogin('Google')}
              activeOpacity={0.7}
            >
              <Text style={styles.googleIconText}>G</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.socialIcon, styles.facebookIcon]}
              onPress={() => handleSocialLogin('Facebook')}
              activeOpacity={0.7}
            >
              <Text style={styles.facebookIconText}>f</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Link */}
        <View style={styles.loginSection}>
          <Text style={styles.loginText}>
            Already have account?{' '}
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate('Login')}
            >
              Log In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  headerSection: {
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  formSection: {
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 30,
  },
  input: {
    fontSize: 16,
    color: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 0,
  },
  inputUnderline: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginTop: 8,
  },
  signUpButton: {
    backgroundColor: '#4A4A4A',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  signUpButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  socialSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  socialText: {
    fontSize: 14,
    color: '#9E9E9E',
    marginBottom: 20,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  socialIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIconText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '500',
  },
  appleIconText: {
    fontSize: 22,
    color: '#000000',
  },
  googleIconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4285F4',
  },
  facebookIcon: {
    backgroundColor: '#1877F2',
    borderColor: '#1877F2',
  },
  facebookIconText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  loginSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#000000',
  },
  loginLink: {
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useRouter } from 'expo-router';
import Spacing from '../../components/Spacing';
import { Ionicons } from '@expo/vector-icons';


const ResetPassword = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Password reset to:", newPassword);
    // Add actual reset logic here
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="purple" /> 
        </TouchableOpacity>
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.resetContainer}>
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.titleText}>
              Enter your new password to update your account.
            </Text>
          </View>

          <Spacing height={30} />

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              placeholderTextColor="darkgray"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="darkgray"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <TouchableOpacity
              style={styles.resetButton}
              onPress={handleReset}
            >
              <Text style={styles.resetButtonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  backButtonText: {
    fontSize: 18,
    color: 'purple',
  },
  resetContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
  titleText: {
    fontSize: 16,
    color: 'black',
    width: '90%',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 24,
  },
  form: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: 'rgb(236, 233, 251)',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: 'black',
  },
  resetButton: {
    width: '100%',
    height: 60,
    backgroundColor: 'purple',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React, { useState, useRef, useEffect } from 'react';
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
import { Ionicons } from '@expo/vector-icons';
import Spacing from '../../components/Spacing';

const VerifyOtp = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const inputsRef = useRef([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join('');
    if (code.length < 4) {
      alert('Please enter the full 4-digit OTP code.');
      return;
    }
    console.log('Submitted OTP:', code);
    router.push('/auth/rest-password');
  };

  const handleResend = () => {
    if (timer === 0) {
      console.log('Resending OTP...');
      setTimer(30);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* 🔙 Back Button */}
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="purple" /> 
          </TouchableOpacity>

          <Spacing height={30} />

          <Text style={styles.title}>Enter Verification Code</Text>
          <Text style={styles.description}>
            We sent a 4-digit code to your email. Enter it below to verify your account.
          </Text>

          <Spacing height={30} />

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputsRef.current[index] = ref)}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.verifyButton} onPress={handleSubmit}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>

          <Spacing height={20} />

          <TouchableOpacity disabled={timer !== 0} onPress={handleResend}>
            <Text style={[styles.resendText, { color: timer === 0 ? 'purple' : 'gray' }]}>
              Resend Code {timer > 0 ? `in ${timer}s` : ''}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 24,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 30,
  },
  otpInput: {
    width: 55,
    height: 60,
    backgroundColor: 'rgb(236, 233, 251)',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
  verifyButton: {
    width: '100%',
    height: 60,
    backgroundColor: 'purple',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

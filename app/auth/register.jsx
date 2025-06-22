import React, { useState } from 'react'
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
} from 'react-native'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Spacing from '../../components/Spacing'

const Register = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleRegister = () => {
    console.log('Register in with:', email, password)
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Fixed Back Button */}
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
          <View style={styles.RegisterContainer}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.titleText}>Create a account so you can explore all the existing jobs</Text>
          </View>

          <Spacing height={30}/>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="darkgray"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Password"
                placeholderTextColor="darkgray"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.iconWrapper}
              >
                <Ionicons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color="purple"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Confirm Password"
                placeholderTextColor="darkgray"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.iconWrapper}
              >
                <Ionicons
                  name={showConfirmPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color="purple"
                />
              </TouchableOpacity>
            </View>


            {/* <TouchableOpacity
              onPress={() => router.push('/auth/forgot-password')}
              style={styles.forgotPassword}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.RegisterButton} onPress={handleRegister}>
              <Text style={styles.RegisterButtonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/auth/login')}
              style={styles.createAccount}
            >
              <Text style={styles.createAccountText}>Already have an account</Text>
            </TouchableOpacity>
          </View>

          <Spacing height={60}/>
           
           <View style={styles.bottomNav}>
                <Text style = {styles.bottomNavText}>or contiue width</Text>
                <Spacing height={10} />
              <View style={styles.bottomNavIcons}>
                  <View style={styles.bottomNavIcon}>
                      <Ionicons name="logo-google" size={24} color="purple" />
                  </View>
                  <View style={styles.bottomNavIcon}>
                      <Ionicons name="logo-apple" size={24} color="purple" />
                  </View>
                  <View style={styles.bottomNavIcon}>
                      <Ionicons name="logo-facebook" size={24} color="purple" />
                  </View>
              </View>
           </View>

        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Register

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
//   backButtonText: {
//     fontSize: 18,
//     color: 'purple',
//   },
  RegisterContainer: {
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
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    width: '90%',
    textAlign: 'center',
    lineHeight: 28,
    marginTop: 8,
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
    marginBottom: 15,
    fontSize: 16,
    color: 'black',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(236, 233, 251)',
    borderRadius: 5,
    height: 60,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  passwordInput: {
    borderWidth: 0,
    marginBottom: 0,
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 5,
  },
  iconWrapper: {
    padding: 8,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
//   forgotPasswordText: {
//     color: 'purple',
//     fontSize: 14,
//     fontWeight: '600',
//   },
  RegisterButton: {
    width: '100%',
    height: 60,
    backgroundColor: 'purple',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  RegisterButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  createAccount: {
    marginTop: 25,
    alignSelf: 'center',
  },
  createAccountText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },

  bottomNav: {
    height: 100,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  bottomNavIcons: {
    width: "70%",
    height: "65%",
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  },

  bottomNavText: {
    fontSize: 18,
    color: "purple"
  },

  bottomNavIcon: {
    width: "25%",
    height: "70%",
    backgroundColor:"rgb(236, 233, 251)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3
  }
})

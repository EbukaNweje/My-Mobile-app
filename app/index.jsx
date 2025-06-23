import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import StartedImage from '../assets/img/undraw_interview_yz52.png';

const Index = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Image source={StartedImage} style={styles.imageStyle} resizeMode="contain" />

        <View style={styles.textContainer}>
          <Text style={styles.header}>Discover Your Dream Job</Text>
          <Text style={styles.subText}>
            Explore all the existing job roles based on your interest and study major
          </Text>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/auth/login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton} onPress={() => router.push('/auth/register')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  imageStyle: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    marginBottom: 12,
  },
  subText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginButton: {
    flex: 1,
    backgroundColor: 'purple',
    height: 60,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    flex: 1,
    backgroundColor: 'white',
    height: 60,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'purple',
  },
  registerText: {
    color: 'purple',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

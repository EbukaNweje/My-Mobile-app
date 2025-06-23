import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


const RootLayout = () => {
  return (

    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name='index'  options={{ headerShown: false }} />
        <Stack.Screen name='auth/login'  options={{ headerShown: false }} />
        <Stack.Screen name='auth/register'  options={{ headerShown: false }} />
        <Stack.Screen name='auth/forgotpassword'  options={{ headerShown: false }} />
        <Stack.Screen name='auth/otp'  options={{ headerShown: false }} />
        <Stack.Screen name='auth/rest-password'  options={{ headerShown: false }} />
        <Stack.Screen name='screen/user'  options={{ headerShown: false }} />
      </Stack>
    </>

    // <>
    //     <StatusBar value= "auto" />
    //     <Stack screenOptions={{
    //       headerShadowVisible: false,
    // }}>
    //     <Stack.Screen name='index' options={{ headerShown: false }} />
    //     <Stack.Screen name='about' options={{ title: 'About Eflex E-Book'}} />
    // </Stack>
    // </>

  )
}

export default RootLayout

const styles = StyleSheet.create({})
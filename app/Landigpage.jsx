import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import StartedImage from '../assets/img/undraw_interview_yz52.png'

const Landingpage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image source = {StartedImage} style={styles.imageStyle}/>
        <View style = {styles.HeaderText}>
            <Text style={styles.HeaderTextBig}>Discover Your Dream Job</Text>
            <Text style={styles.HeaderTextsmall}>
              Explore all the existing job roles based on your 
              interest and study major
            </Text>
        </View>
        <View style = {styles.ButtonContainer}>
            <TouchableOpacity style = {styles.ButtonLogin}
            onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.ButtonLoginText}>Login</Text>
            </TouchableOpacity> 

            <TouchableOpacity style = {styles.ButtonRegister}>
                <Text style={styles.ButtonRegisterText}>Register</Text>
            </TouchableOpacity> 
        </View>
    </View>
  )
}

export default Landingpage

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  imageStyle : {
    width: 300,
    height: 300,
  },

  HeaderText : {
    width: "100%",
    height: "25%",
    // backgroundColor: 'red',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20
  },
  HeaderTextBig : {
   fontSize: 40,
   width: "70%",
   textAlign: 'center',
   fontFamily: "sans-serif",
   fontWeight: 'bold',
   color: 'purple',
  },

  HeaderTextsmall : {
    fontSize: 20,
    width: "90%",
    textAlign: 'center',
    fontFamily: "sans-serif",
    fontWeight: 300,
    color: 'gray',
  },

  ButtonContainer: {
    width: "80%",
    height: "10%",
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  ButtonLogin : {
    width: "60%",
    height: 60,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
   shadowColor: "#000",
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.2,
   shadowRadius: 2,
  },

  ButtonLoginText: {
  color: "white",
  fontSize: 20,
  fontWeight: "bold"
},

ButtonRegister : {
    width: "40%",
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },

  ButtonRegisterText: {
  color: "black",
  fontSize: 20,
  fontWeight: "bold"
},

})
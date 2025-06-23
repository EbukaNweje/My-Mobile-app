import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign';
import profile from "../../assets/img/profile.jpeg"
import Spacing from '../../components/Spacing';

const User = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inner}>
            <View style={styles.TopNav}>
                <TouchableOpacity>
                    <AntDesign name="menuunfold" size={24} color="purple" />
                </TouchableOpacity>

                <View style={styles.ProfilePix}>
                    <Image source={profile} 
                    style={styles.ProfilePixImg}
                    resizeMode="cover" 
                 />
                </View>
            </View>
            <Spacing height={20}/>
             {/* <View style={}>

             </View> */}
        </View>
    </SafeAreaView>
  )
}

export default User

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    inner: {
      flex: 1,
      paddingHorizontal: 24,
    },

    TopNav: {
      width: '100%',
      height: 60,
      paddingHorizontal: 20,
    //   backgroundColor: 'red',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },

    ProfilePix: {
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: 'green',
      objectFit: 'cover',
    },

    ProfilePixImg: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
    },
})
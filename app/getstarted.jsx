import { StyleSheet, Text, View, Image  } from 'react-native'
import Logo from "../assets/img/ee.png"
import { Link } from 'expo-router'
import Spacing from '../components/Spacing'

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source= {Logo} style={styles.image} />
      <Text style={styles.herderTetx}>Eflex E-Book</Text>
        <Spacing height={5}/>
      <Text style={styles.smallText}>The number 1 coding book</Text>
        <Spacing height={20}/>
        <Link href="/about" style={styles.button}>
           <Text style={styles.buttonText}>Get Started</Text>
        </Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    herderTetx: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    smallText: {
        fontSize: 18,
        // marginTop: 5,
        color: 'gray',
    },

    button: {
        // marginTop: 20,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    image: {
        width: 450,
        height: 450,
        marginBottom: 20,
    }
})
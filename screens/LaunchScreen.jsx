// rnfs
// IMPORTS & DEPS
import { 
    View, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    ImageBackground, 
} from 'react-native';
import React from 'react';
import { CustomButton } from '../components';
import AppStyles from '../styles/AppStyles';
import { LinearGradient } from 'expo-linear-gradient';


export default function LaunchScreen({navigation}) {


const openLogin = ()=> {
    console.log("Login button pressed")
}
const openSignup = ()=> {
    console.log("Signup button pressed")
}

// Rendu
return (
    

    // <ImageBackground
    // source={require('../assets/images/launch1.jpeg')}
    // style={styles.imgBG} >
    <View style={styles.bg}>
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['rgba(81,81,81,1)', 'rgba(38,38,38,1)']} >
                <Text style={styles.title}>Welcome to ScoreTube</Text>

                <View style={styles.groupeBtns}>
                    <CustomButton label={"Login"}
                    onPress={()=>navigation.navigate('LoginScreen')} />

                    <View style={styles.divider} />

                    <CustomButton outline label="Sign up" 
                    onPress={()=>navigation.navigate('SignupScreen')} />
                </View>
            </LinearGradient>
            
        </SafeAreaView>
    </View>
    
    
)}



// Styles
const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
    },
    groupeBtns: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 120,
    },
    divider: {
        marginHorizontal: 20,

    },
})
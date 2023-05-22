
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LaunchScreen({navigation}) {
        
    return (
        <ImageBackground
        source={require('../assets/images/launch.png')}
        style={LaunchStyles.imgBG}
        >
            <Text>LaunchScreennavigation</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({})
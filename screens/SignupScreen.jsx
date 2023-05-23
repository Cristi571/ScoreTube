import { ImageBackground, 
    Keyboard, 
    KeyboardAvoidingView, 
    StyleSheet, 
    TextInput, 
    View } from 'react-native'
import React, { useState } from 'react'
import { CustomButton } from '../components'
import { TouchableWithoutFeedback } from 'react-native'
import { auth } from '../lib';

export default function SignupScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');

    const onChangeHandler = (textInput, keyInput) => {
        switch (keyInput) {
            case 'mail':
                setEmail(textInput);
                break;
            case 'pwd':
                setPassword(textInput);
                break;
            case 'pwdC':
                setPwConfirm(textInput);
                break;
            default:
                return false;
        }
    }

    const signupHandler = async () => {
        if(email && password === pwConfirm) {
            const user = await createUserWithEmailAndPassword(
                auth, 
                email, 
                password);
            console.log(user);
        }
    }

    return (
        <ImageBackground
            source={require('../assets/images/launch2.png')}
            style={styles.imgBG} >
            <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <TextInput 
                            placeholder='E-Mail' 
                            style={styles.input}
                            keyboardType='email-address'
                            onChangeText={
                                (textInput)=>onChangeHandler(textInput, 'email')}>
                        </TextInput>
                        <TextInput 
                            secureTextEntry
                            placeholder='Password' 
                            style={styles.input} 
                            onChangeText={
                                (textInput)=>onChangeHandler(textInput, 'pwd')}>
                        </TextInput>
                        <TextInput
                            secureTextEntry
                            placeholder='Password confirm'
                            style={styles.input}
                            onChangeText={
                                (textInput)=>onChangeHandler(textInput, 'pwdC')}>
                        </TextInput>
                        <CustomButton label='Sign up' onPress={signupHandler} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgBG: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 160,
    },
    input: {
        fontSize: 20,
        padding: 8,
        marginBottom: 24,
        width: "70%",
        textAlign: 'center',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderBottomColor: '#bbbb00',
        borderRadius: 0,
        backgroundColor: '#fff6',
    },
})
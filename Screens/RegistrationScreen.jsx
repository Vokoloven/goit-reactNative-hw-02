import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
const image = require('../image/background.png')
const avatar = require('../image/avatarInput.png')
const avatarPhoto = require('../image/avatarPhoto.png')

const initialState = {
    login: '',
    email: '',
    password: '',
}

export const RegistrationScreen = () => {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false)
    const [borderChangeColor, setBorderChangeColor] = useState('')
    const [state, setState] = useState(initialState)

    const onFocusHandler = (data) => {
        setIsShowKeyboard(true)
        setBorderChangeColor(data)
    }

    const onBlurHandler = () => {
        setBorderChangeColor('')
    }

    const closeKeyboardToggler = () => {
        Keyboard.dismiss()
        setIsShowKeyboard(false)
    }

    const renderButton = () => {
        if (!isShowKeyboard) {
            return (
                <View>
                    <TouchableOpacity
                        style={styles.btn}
                        activeOpacity={0.5}
                        onPress={() => {
                            console.log(state)
                            setState(initialState)
                        }}
                    >
                        <Text style={styles.btnText}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text style={styles.linkText}>
                            Уже есть аккаунт? Войти
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={closeKeyboardToggler}>
                <ImageBackground source={image} style={styles.image}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                        <View
                            style={{
                                ...styles.form,
                                paddingBottom: isShowKeyboard ? 32 : 78,
                            }}
                            onSubmitEditing={() => {
                                setIsShowKeyboard(false)
                                console.log(state)
                                setState(initialState)
                            }}
                        >
                            <ImageBackground
                                source={isShowKeyboard ? avatarPhoto : avatar}
                                style={styles.avatarInput}
                            />
                            <View style={styles.header}>
                                <Text style={styles.headerTitle}>
                                    Регистрация
                                </Text>
                            </View>
                            <View>
                                <TextInput
                                    style={{
                                        ...styles.input,
                                        borderColor:
                                            borderChangeColor === 'login'
                                                ? '#FF6C00'
                                                : '#E8E8E8',
                                    }}
                                    textAlign={'left'}
                                    placeholder="Логин"
                                    placeholderTextColor="#BDBDBD"
                                    onFocus={() => {
                                        onFocusHandler('login')
                                    }}
                                    onBlur={onBlurHandler}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({
                                            ...prevState,
                                            login: value,
                                        }))
                                    }
                                    value={state.login}
                                />
                            </View>
                            <View style={{ marginTop: 16 }}>
                                <TextInput
                                    style={{
                                        ...styles.input,
                                        borderColor:
                                            borderChangeColor === 'email'
                                                ? '#FF6C00'
                                                : '#E8E8E8',
                                    }}
                                    textAlign={'left'}
                                    placeholder="Адрес электронной почты"
                                    placeholderTextColor="#BDBDBD"
                                    onFocus={() => {
                                        onFocusHandler('email')
                                    }}
                                    onBlur={onBlurHandler}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({
                                            ...prevState,
                                            email: value,
                                        }))
                                    }
                                    value={state.email}
                                />
                            </View>
                            <View style={{ marginTop: 16 }}>
                                <TextInput
                                    style={{
                                        ...styles.input,
                                        borderColor:
                                            borderChangeColor === 'password'
                                                ? '#FF6C00'
                                                : '#E8E8E8',
                                    }}
                                    textAlign={'left'}
                                    placeholder="Пароль"
                                    placeholderTextColor="#BDBDBD"
                                    secureTextEntry={true}
                                    autoCorrect={false}
                                    textContentType="password"
                                    onFocus={() => {
                                        onFocusHandler('password')
                                    }}
                                    onBlur={onBlurHandler}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({
                                            ...prevState,
                                            password: value,
                                        }))
                                    }
                                    value={state.password}
                                />
                                <Text style={styles.passwordShow}>
                                    Показать
                                </Text>
                            </View>
                            {renderButton()}
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    },
    regBox: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height: 549,
    },
    form: {
        backgroundColor: '#fff',
        paddingTop: 92,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    header: {
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 36,
        marginBottom: 32,
    },
    avatarInput: {
        position: 'absolute',
        width: 132,
        height: 120,
        top: 0,
        right: 0,
        transform: [{ translateX: -120 }, { translateY: -50 }],
    },
    input: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        height: 50,
        borderRadius: 8,
        color: '#212121',
        paddingLeft: 16,
        marginHorizontal: 16,
    },
    btn: {
        backgroundColor: '#FF6C00',
        height: 51,
        borderRadius: 100,
        marginTop: 43,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
    },
    btnText: {
        fontSize: 16,
        color: '#fff',
    },
    linkText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#1B4371',
        marginTop: 16,
        fontSize: 16,
    },
    passwordShow: {
        position: 'absolute',
        top: 16,
        right: 32,
        fontSize: 16,
        color: '#1B4371',
    },
})

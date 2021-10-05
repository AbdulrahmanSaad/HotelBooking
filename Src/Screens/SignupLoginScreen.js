import React, { Component } from 'react';
import {
    View,
    Image,
    Platform,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import {
    ButtonComponent,
    TextInputComponent,
    TabBarComponent,
    TextComponent
} from '../Components/Index';
import { calculateWidthAndHeightPrecentage } from '../Helpers/Helpers';

class SignupLoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginTabPressed: false,
            signUpTabPressed: !this.signUpTabPressed,
            renderusernameField: !this.loginTabPressed
        }
    }
    renderTabBarContent = (tabPressed) => {
        switch (tabPressed) {
            case 'signup':
                this.setState({
                    loginTabPressed: false,
                    signUpTabPressed: true,
                    renderusernameField: true
                });
                return
            case 'login':
                this.setState({
                    loginTabPressed: true,
                    signUpTabPressed: false,
                    renderusernameField: false
                })
                return
            default:
                break;
        }
    }
    render() {

        const {
            signUpTabPressed,
            loginTabPressed,
            renderusernameField
        } = this.state;

        const {
            logoImage,
            textStyle,
            selectedButtonStyle,
            container,
            emailLabelStyle,
            userNameLabelStyle,
            dualTabBarContainer,
            forgetPasswordText,
            forgetPasswordTextWrapper,
            signupButtonStyle,
            loginbuttonStyle
        } = styles;

        const {
            navigate
        } = this.props.navigation;

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : 'position'}
                style={container}
                keyboardVerticalOffset={-300}
            >
                <ScrollView>
                    <Image
                        source={require('../assets/logohopin.png')}
                        style={logoImage}
                        resizeMode='contain'
                    />
                    <View style={dualTabBarContainer}>
                        <TabBarComponent
                            title={'Log In'}
                            textStyle={loginTabPressed ? textStyle : null}
                            buttonStyle={loginTabPressed ? selectedButtonStyle : null}
                            onPress={() => this.renderTabBarContent('login')}
                        />
                        <TabBarComponent
                            title={'Sign Up'}
                            textStyle={signUpTabPressed ? textStyle : null}
                            buttonStyle={signUpTabPressed ? selectedButtonStyle : null}
                            onPress={() => this.renderTabBarContent('signup')}
                        />
                    </View>
                    {renderusernameField ? <TextInputComponent
                        label={'Username'}
                        labelStyle={userNameLabelStyle}
                        placeholder={'Create your username'}
                    /> : null}

                    <TextInputComponent
                        label={'E-mail'}
                        labelStyle={emailLabelStyle}
                        placeholder={'Create your e-mail'}
                    />
                    <TextInputComponent
                        label={'Password'}
                        labelStyle={emailLabelStyle}
                        placeholder={'Create your password'}
                        secureTextEntry
                    />
                    {renderusernameField ? null : 
                    <TouchableWithoutFeedback
                        onPress={() => { alert() }}
                    >
                        <View style={forgetPasswordTextWrapper}>
                            <TextComponent
                                text={'Forget Password?'}
                                style={forgetPasswordText}
                            />
                        </View>
                    </TouchableWithoutFeedback>}
                    <ButtonComponent
                        title={renderusernameField ? 'Sign up' : 'Log In'}
                        onPress={() => navigate('HomeScreen')}
                        buttonStyle={renderusernameField ? signupButtonStyle : loginbuttonStyle}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const {
    width,
} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    logoImage: {
        width: calculateWidthAndHeightPrecentage('width', 60),
        height: calculateWidthAndHeightPrecentage('width', 60),
        minWidth: 60,
        minHeight: 60,
        alignSelf: 'center',
        marginTop: calculateWidthAndHeightPrecentage('height', 65)
    },
    dualTabBarContainer: {
        flexDirection: 'row'
    },
    textStyle: {
        fontWeight: '700',
        color: '#3e3e3e',
    },
    selectedButtonStyle: {
        borderBottomWidth: 3,
        borderBottomColor: '#00a76e'
    },
    userNameLabelStyle: {
        marginTop: calculateWidthAndHeightPrecentage('height', 45)
    },
    emailLabelStyle: {
        marginTop: calculateWidthAndHeightPrecentage('height', 35)
    },
    forgetPasswordTextWrapper: {
        width: calculateWidthAndHeightPrecentage('width', 120),
        height: calculateWidthAndHeightPrecentage('height', 25),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: calculateWidthAndHeightPrecentage('height', 30),
        marginLeft: calculateWidthAndHeightPrecentage('width', width - 140),
    },
    forgetPasswordText: {
        fontSize: 14,
        fontWeight: 'normal',
        marginTop: 0,
        marginLeft: 0,
    },
    signupButtonStyle: {
        marginTop: calculateWidthAndHeightPrecentage('height', 40),
        marginBottom: calculateWidthAndHeightPrecentage('height', 210),
    },
    loginbuttonStyle: {
        marginBottom: calculateWidthAndHeightPrecentage('height', 415),
    }
})

export { SignupLoginScreen };
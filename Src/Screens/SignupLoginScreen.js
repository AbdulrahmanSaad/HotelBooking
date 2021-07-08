import React, { Component } from 'react';
import {
    View,
    Image,
    Platform,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import {
    ButtonComponent,
    TextInputComponent,
    DualTabBarComponent,
} from '../Components/Index';

class SignupLoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { renderusernameField: true }
    }
    renderTabBarContent = () => {
        this.setState({ renderusernameField: !this.state.renderusernameField })
    }
    render() {

        const {
            renderusernameField
        } = this.state;
        const {
            logoImage,
            container,
            passwordInput,
            emailLabelStyle,
            userNameLabelStyle,
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
                    />
                    <DualTabBarComponent
                        onPress={() => this.renderTabBarContent()}
                    />
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
                    <View>
                        <TextInputComponent
                            label={'Password'}
                            labelStyle={emailLabelStyle}
                            placeholder={'Create your password'}
                            secureTextEntry
                            textinputStyle={passwordInput}
                        />
                    </View>
                    <ButtonComponent
                        title={renderusernameField ? 'Sign up' : 'Log In'}
                        onPress={() => navigate('HomeScreen')}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    logoImage: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        marginTop: 65
    },
    userNameLabelStyle: {
        marginTop: 45
    },
    emailLabelStyle: {
        marginTop: 35
    },
    passwordInput: {
        paddingRight: 40
    }
})

export { SignupLoginScreen };
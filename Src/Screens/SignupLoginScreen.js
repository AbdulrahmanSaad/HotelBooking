import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import { DualTabBarComponent } from '../Components/Index';

class SignupLoginScreen extends Component {

    onPress = () => { }
    render() {

        const {
            logoImage,
            container
        } = styles;

        return (
            <View style={container} >
                <Image
                    source={require('../assets/logohopin.png')}
                    style={logoImage}
                />
                <DualTabBarComponent
                    onPress={() => this.onPress()}
                />
            </View>
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
})

export { SignupLoginScreen };
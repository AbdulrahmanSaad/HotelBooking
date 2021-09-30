import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

import {
    TextComponent,
    ButtonComponent
} from '../Components/Index';

import { Helpers } from '../Helpers/Helpers';

class OnboardingScreen extends Component {

    render (){

        const {
            image,
            firstTextStyle,
            secondTextStyle,
            buttonStyle
        } = styles;

        const {
            navigate
        } = this.props.navigation;

        return (
            <View>
                <Image
                    source={require('../assets/vector.png')}
                    style={image}
                />
                <TextComponent
                    text={'Travel with no worry'}
                    style={firstTextStyle}
                />
                <TextComponent
                    text={'You can now experience the next level travel experience for hotel bookings.'}
                    style={secondTextStyle}
                />
                <ButtonComponent
                    title={'Next'}
                    buttonStyle={buttonStyle}
                    onPress={this.onPress = () => navigate('SignupLoginScreen')}
                />
            </View>
        );
    }
}

const measuresHelper = new Helpers();
const { calculateWidthAndHeightPrecentage } = measuresHelper;

let imgDimensions = {
    width: calculateWidthAndHeightPrecentage('width', 326),
    height: 402,
    marginTop: calculateWidthAndHeightPrecentage('height', 61),
}

const styles = StyleSheet.create({
    image:imgDimensions,
    firstTextStyle: {
        fontSize: 24,
        lineHeight: 33,
        color: '#3E3E3E',
        marginLeft: calculateWidthAndHeightPrecentage('width', 25),
        marginTop: calculateWidthAndHeightPrecentage('height', 66),
    },
    secondTextStyle: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 28,
        color: '#3E3E3E',
        marginHorizontal: calculateWidthAndHeightPrecentage('width', 25),
        marginTop: calculateWidthAndHeightPrecentage('height', 20),
    },
    buttonStyle: {
        width: calculateWidthAndHeightPrecentage('width', 165),
        height: calculateWidthAndHeightPrecentage('height', 57),
        marginTop: calculateWidthAndHeightPrecentage('height', 66),
    }
})

export { OnboardingScreen };
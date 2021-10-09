import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import {
    ButtonComponent
} from './Index'
import { calculateWidthAndHeightPrecentage } from '../Helpers/Helpers';

class HomeScreenTextbutton extends Component {
    renderSelectedView = () => {
        const {
            selectedView
        } = styles;
        return (
            <View
                style={selectedView}
            />
        )
    }
    onPress = () => {
        const {
            onPress
        } = this.props;
        if (onPress) {
            onPress()
        }
    }
    render() {
        const {
            button,
            selectedButtonView,
            buttonText
        } = styles;
        const {
            isSelected,
            title
        } = this.props;
        return (
            <View
                style={selectedButtonView}
            >
                <ButtonComponent
                    buttonStyle={button}
                    title={title}
                    textStyle={isSelected ? { ...buttonText, color: '#3e3e3e' } : buttonText}
                    underlayColor={'#fafafa'}
                    onPress={this.onPress}
                />
                {isSelected ? this.renderSelectedView() : null}
            </View>
        );
    }
}

const {
    width
} = Dimensions.get('window')

const styles = StyleSheet.create({
    selectedButtonView: {
        alignItems: 'center',
        height: calculateWidthAndHeightPrecentage('height', 600),
    },
    button: {
        height: calculateWidthAndHeightPrecentage('height', 170),
        backgroundColor: '#fafafa',
        borderRadius: 0,
        width: (width-50)/3,
        marginTop: 0
    },
    selectedView: {
        width: 10,
        height: 10,
        backgroundColor: '#00a76e',
        borderRadius: 10,
        top: 5
    },
    buttonText: {
        fontSize: 20,
        color: '#b3b3b3',
        fontWeight: '700',
        lineHeight: 24.55
    }
})

export { HomeScreenTextbutton };
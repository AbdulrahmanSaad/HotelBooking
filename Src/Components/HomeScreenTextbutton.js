import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {
    ButtonComponent
} from './Index'
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

const styles = StyleSheet.create({
    selectedButtonView: {
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        height: 30
    },
    selectedView: {
        width: 10,
        height: 10,
        backgroundColor: '#00a76e',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 20,
        color: '#b3b3b3',
        fontWeight: 'bold'
    }
})

export { HomeScreenTextbutton };
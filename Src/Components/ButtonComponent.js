import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
} from 'react-native';

class ButtonComponent extends Component {

    onPress = () => {
        const {
            onPress
        } = this.props;

        if (onPress) {
            onPress();
        }
    }

    render() {
        const {
            text,
            button
        } = styles;
        const {
            title,
            buttonStyle,
            textStyle,
            underlayColor
        } = this.props;
        return (
            <TouchableHighlight
                style={buttonStyle ? { ...button, ...buttonStyle } : button }
                onPress={this.onPress}
                underlayColor={underlayColor}
            >
                <Text style={textStyle ? textStyle : text}>
                    {title}
                </Text>
            </TouchableHighlight>
        );
    }
}

const {
    width,
} = Dimensions.get('window');

const styles = StyleSheet.create({
    button: {
        width: width - 50,
        height: 57,
        marginTop: 40,
        backgroundColor: '#00a76e',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export { ButtonComponent };
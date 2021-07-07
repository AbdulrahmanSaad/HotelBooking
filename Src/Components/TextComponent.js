import React, { Component } from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

class TextComponent extends Component {

    render() {
        const {
            textStyle
        } = styles;
        const {
            text,
            labelStyle
        } = this.props;
        return (
            <Text style={labelStyle ? { ...textStyle, ...labelStyle } : textStyle}>
                {text}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: '#555555',
        fontSize: 20,
        marginTop: 45,
        marginLeft: 25,
        fontWeight: 'bold',
    }
})

export { TextComponent };
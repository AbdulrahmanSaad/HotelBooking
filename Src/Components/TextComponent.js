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
            style
        } = this.props;

        return (
            <Text style={
                style ? { ...textStyle, ...style } : textStyle }>
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
        fontStyle: 'normal',
        fontFamily: 'Nunito Sans',
    }
})

export { TextComponent };
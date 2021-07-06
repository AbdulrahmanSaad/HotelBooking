import React, { Component } from 'react';
import {
    View,
    TextInput,
    Dimensions,
    StyleSheet,
} from 'react-native';
import {
    TextComponent
} from './Index';

class TextInputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onChangeText = (value) => {
        this.setState({ text: value })
    }

    render() {
        const {
            text
        } = this.state;
        const {
            textinput
        } = styles;
        const {
            label,
            labelStyle,
            placeholder,
            textinputStyle,
        } = this.props;
        return (
            <View styles>
                <TextComponent
                    text={label}
                    labelStyle={labelStyle}
                />
                <TextInput
                    style={textinputStyle ? textinputStyle : textinput}
                    placeholder={placeholder}
                    value={text}
                    onChangeText={(value) => this.onChangeText(value)}
                />
            </View>
        );
    }
}

const {
    width
} = Dimensions.get('window');

const styles = StyleSheet.create({
    textinput: {
        width: width - 50,
        height: 55,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff'
    }
})

export { TextInputComponent };
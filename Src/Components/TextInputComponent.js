import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    TextInput as BareRNTextInput
} from 'react-native';
import { TextInput } from 'react-native-paper';
import {
    TextComponent
} from './Index';

class TextInputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            showText: false
        }
    }

    onChangeText = (value) => {
        this.setState({ text: value })
    }

    handleInputVisibility = () => {
        this.setState({ showText: !this.state.showText })
    }

    render() {
        const {
            text,
            showText
        } = this.state;
        const {
            textinput,
            textinputContainer
        } = styles;
        const {
            label,
            labelStyle,
            placeholder,
            textinputStyle,
            secureTextEntry,
            textinputContainerStyle,
        } = this.props;
        return (
            <View>
                <TextComponent
                    text={label}
                    labelStyle={labelStyle}
                />
                <TextInput
                    render={() =>
                        <BareRNTextInput
                            style={textinputStyle ? textinputStyle : textinput}
                            placeholder={placeholder}
                            value={text}
                            onChangeText={(value) => this.onChangeText(value)}
                            secureTextEntry={secureTextEntry && !showText}
                        />
                    }
                    style={textinputContainerStyle ? textinputContainerStyle : textinputContainer}
                    underlineColor={'#f7f7f7'}
                    right={secureTextEntry ?
                        <TextInput.Icon
                            name={showText ? "eye-outline" : "eye-off-outline"}
                            onPress={this.handleInputVisibility} /> : null}
                />
            </View>
        );
    }
}

const {
    width
} = Dimensions.get('window');

const styles = StyleSheet.create({
    textinputContainer: {
        height: 55,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 50,
        borderTopEndRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: 'red'
    },
    textinput: {
        width: width - 50,
        height: 55,
        alignSelf: 'center',
        borderRadius: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff'
    }
})

export { TextInputComponent };
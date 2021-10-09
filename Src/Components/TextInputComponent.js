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
import { calculateWidthAndHeightPrecentage } from '../Helpers/Helpers';

class TextInputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showText: false
        }
    }

    onChangeText = (value) => {
        const {
            onChangeText
        } = this.props;

        if (onChangeText){
            onChangeText(value);
        }
    }

    handleInputVisibility = () => {
        this.setState({ showText: !this.state.showText })
    }
    
    render() {
        const {
            showText
        } = this.state;
        const {
            textinput,
            textinputContainer
        } = styles;
        const {
            value,
            label,
            onBlur,
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
                            style={textinputStyle ? {...textinputStyle, ...textinput} : textinput}
                            placeholder={placeholder}
                            value={value}
                            onChangeText={(value) => this.onChangeText(value)}
                            secureTextEntry={secureTextEntry && !showText}
                            onBlur={onBlur}
                        />
                    }
                    style={textinputContainerStyle ? {...textinputContainerStyle, ...textinputContainer} : textinputContainer}
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
        marginTop: calculateWidthAndHeightPrecentage('height', 20),
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
        paddingHorizontal: calculateWidthAndHeightPrecentage('width', 20),
        backgroundColor: '#ffffff'
    }
})

export { TextInputComponent };
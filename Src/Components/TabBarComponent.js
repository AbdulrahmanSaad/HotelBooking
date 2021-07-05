import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
} from 'react-native';

class TabBarComponent extends Component {

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
            touchableView
        } = styles;

        const {
            title,
            textStyle,
            buttonStyle
        } = this.props;

        return (
            <TouchableHighlight
                style={{ ...touchableView, ...buttonStyle }}
                onPress={() => this.onPress()}
                underlayColor={'#ffffff'}
            >
                <Text style={{ ...text, ...textStyle }} >
                    {title}
                </Text>
            </TouchableHighlight>
        )
    }
}

const {
    width
} = Dimensions.get('window');

const styles = StyleSheet.create({
    touchableView: {
        width: width / 2,
        height: 66,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'

    },
    text: {
        color: '#a9a9a9',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export { TabBarComponent };
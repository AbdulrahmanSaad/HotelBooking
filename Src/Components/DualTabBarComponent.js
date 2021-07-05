import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { TabBarComponent } from './Index';

class DualTabBarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leftTabPressed: false,
            rightTabPressed: !this.leftTabPressed
        }
    }

    onPress = (tabToBePressed) => {
        const {
            onPress
        } = this.props;
        if (onPress) {
            if (tabToBePressed === 'left') {
                this.setState({
                    leftTabPressed: true,
                    rightTabPressed: false
                })
            }
            if (tabToBePressed === 'right') {
                this.setState({
                    rightTabPressed: true,
                    leftTabPressed: false
                })
            }
            onPress();
        }
    }

    render() {
        const {
            container,
            textStyle,
            buttonStyle
        } = styles;
        const {
            leftTabPressed,
            rightTabPressed
        } = this.state;

        return (
            <View style={container}>
                <TabBarComponent
                    title={'Log In'}
                    onPress={() => this.onPress('left')}
                    textStyle={leftTabPressed ? textStyle : null}
                    buttonStyle={leftTabPressed ? buttonStyle : null}
                />
                <TabBarComponent
                    title={'Sign Up'}
                    textStyle={rightTabPressed ? textStyle : null}
                    buttonStyle={rightTabPressed ? buttonStyle : null}
                    onPress={() => this.onPress('right')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    textStyle: {
        fontWeight: 'bold',
        color: '#3e3e3e',
    },
    buttonStyle: {
        borderBottomWidth: 3,
        borderBottomColor: '#00a76e'
    }
})

export { DualTabBarComponent };
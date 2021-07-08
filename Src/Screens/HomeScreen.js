import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import {
    HomeScreenTextbutton
} from '../Components/Index'
class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab1Selected: true,
            tab2Selected: false,
            tab3Selected: false
        }
    }

    tabSelected = (index) => {
        switch (index) {
            case 1:
                this.setState({
                    tab1Selected: true,
                    tab2Selected: false,
                    tab3Selected: false
                })
                break;
            case 2:
                this.setState({
                    tab1Selected: false,
                    tab2Selected: true,
                    tab3Selected: false
                })
                break;
            case 3:
                this.setState({
                    tab1Selected: false,
                    tab2Selected: false,
                    tab3Selected: true
                })
            default:
                return;
        }
    }

    render() {
        const {
            tab1Selected,
            tab2Selected,
            tab3Selected
        } = this.state;
        const {
            image,
            container,
            text,
            buttonsContainer,
        } = styles;
        return (
            <View
                style={container}
            >
                <Image
                    source={require('../assets/award.png')}
                    style={image}
                />
                <Text
                    style={text}
                    numberOfLines={2}
                >
                    Good Morning,{'\n'}Abdelrahman!
                </Text>
                <View style={buttonsContainer}>
                    <HomeScreenTextbutton
                        title={'Reccomend'}
                        isSelected={tab1Selected}
                        onPress={() => this.tabSelected(1)}
                    />
                    <HomeScreenTextbutton
                        title={'Popular'}
                        isSelected={tab2Selected}
                        onPress={() => this.tabSelected(2)}
                    />
                    <HomeScreenTextbutton
                        title={'Trending'}
                        isSelected={tab3Selected}
                        onPress={() => this.tabSelected(3)}
                    />
                </View>
            </View>
        );
    }
}

const {
    width
} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingHorizontal: 25
    },
    image: {
        width: 24,
        height: 24,
        top: 37.33,
        alignSelf: 'flex-end',
        right: 27
    },
    text: {
        fontSize: 30,
        color: '#3e3e3e',
        marginTop: 124,
        fontWeight: 'bold'
    },
    button: {
        justifyContent: 'center',
        height: 30
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50
    },
    selectedView: {
        width: 10,
        height: 10,
        backgroundColor: '#00a76e',
        borderRadius: 10
    },
    selectedButtonView: {
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#b3b3b3',
        fontWeight: 'bold'
    }
})

export { HomeScreen };
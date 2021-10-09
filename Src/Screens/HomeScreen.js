import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    FlatList,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import {
    HomeScreenTextbutton,
    TextComponent
} from '../Components/Index';
import { calculateWidthAndHeightPrecentage } from '../Helpers/Helpers';
import auth from '@react-native-firebase/auth';

let reccomendData = [1, 2, 3, 4, 5, 6]
let popularData = [1, 2, 3, 4, 5]
let trendingData = [1, 2, 3, 4]
class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab1Selected: true,
            tab2Selected: false,
            tab3Selected: false,
            data: reccomendData
        }
    }

    tabSelected = (index) => {
        switch (index) {
            case 1:
                this.setState({
                    tab1Selected: true,
                    tab2Selected: false,
                    tab3Selected: false,
                    data: reccomendData
                })
                break;
            case 2:
                this.setState({
                    tab1Selected: false,
                    tab2Selected: true,
                    tab3Selected: false,
                    data: popularData
                })
                break;
            case 3:
                this.setState({
                    tab1Selected: false,
                    tab2Selected: false,
                    tab3Selected: true,
                    data: trendingData
                })
            default:
                return;
        }
    }

    onPress = () => {
        alert()
    }

    renderUsername = () => {
        return `Good Morning,\n${auth().currentUser.displayName}!`
    }

    render() {
        const {
            tab1Selected,
            tab2Selected,
            tab3Selected,
            data
        } = this.state;
        const {
            image,
            container,
            text,
            buttonsContainer,
            imgItem,
        } = styles;
        return (
            <View
                style={container}
            >
                <Image
                    source={require('../assets/award.png')}
                    style={image}
                />
                <TextComponent
                text={this.renderUsername()}
                style={text}
                />
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
                <FlatList
                    data={data}
                    renderItem={() => (
                        <TouchableWithoutFeedback
                            onPress={() => this.onPress()}
                        >
                            <Image
                                source={require('../assets/img.png')}
                                style={imgItem}
                            />
                        </TouchableWithoutFeedback>
                    )}
                    horizontal
                    keyExtractor={item => item}
                />
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
        paddingHorizontal: calculateWidthAndHeightPrecentage('height', 25),
    },
    image: {
        width: calculateWidthAndHeightPrecentage('width', 24),
        height: calculateWidthAndHeightPrecentage('height', 24),
        top: calculateWidthAndHeightPrecentage('height', 37.33),
        left: calculateWidthAndHeightPrecentage('width', 329),
    },
    text: {
        fontSize: 30,
        color: '#3e3e3e',
        top: calculateWidthAndHeightPrecentage('height', 37),
        fontWeight: '700',
        lineHeight: 38.19,
        marginLeft: 0
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: calculateWidthAndHeightPrecentage('height', 110),
    },
    imgItem: {
        width: 256,
        height: 424,
    }
})

export { HomeScreen };
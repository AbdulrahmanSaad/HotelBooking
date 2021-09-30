import {
    Dimensions
} from 'react-native';

const {
    width,
    height
} = Dimensions.get('window');

class Helpers {

    calculateWidthAndHeightPrecentage(dimension, number){
        switch (dimension) {
            case 'width':
                return `${number * 100 / width}%`;
            case 'height':
                return `${number * 100 / height}%`;
            default:
                break;
        }
    }
}

export { Helpers };
import React, {useState, useRef} from 'react';
import{
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

const {width, height}=Dimensions.get('window');
const CARD_WIDTH= width - 100;
const CARD_SPACING = 16;

export default function ExploreScreen({navigation}){
    const [activeIndex, setActiveIndex] = useState(0);
    const ScrollViewRef= useRef(null);

    const hanndleScroll

}

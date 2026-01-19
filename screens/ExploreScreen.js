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

    const handleScroll =(event)=>{
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index= Math.round(scrollPosition/(CARD_WIDTH+CARD_SPACING));
        setActiveIndex(index);
    };

    const handleShoppingNow =()=>{
        console.log('Shopping now pressed');
    };

    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <View style = {styles.topSection}>
                <view style={styles.header}>
                    <Text style={styles.title}>Update Trendy Outfit</Text>

                </view>

        </View>
        </View>

    );

}

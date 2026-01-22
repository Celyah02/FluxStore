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
                <View style={styles.header}>
                    <Text style={styles.title}>Explore your true style</Text>
                    <Text style={ styles.subtitle}>Relax and let us bring style to you</Text>

                </View>
                
            </View>

            <View style= {styles.bottomSection}>
                <View style ={styles.indicators}>
                    {[0,1,2].map ((i)=>(
                        <View
                        key={i}
                        style= {[
                            styles.indicator,
                            activeIndex===i && styles.indicatorActive,
                        ]}
                        />
                    ))}

                </View>

                <TouchableOpacity
          style={styles.shoppingButton}
          onPress={handleShoppingNow}
          activeOpacity={0.8}
        >
          <Text style={styles.shoppingButtonText}>Shopping now</Text>
        </TouchableOpacity>

            </View>
                        
            <View style={styles.carouselWrapper}>
        <View style={styles.singleImageContainer}>
          <Image
            source={require('../assets/pic4.png')}
            style={styles.carouselImage}
            resizeMode="contain"
          />
        </View>
      </View> 

        </View>

    );

}

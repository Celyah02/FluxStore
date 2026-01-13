import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width - 100;
const CARD_SPACING = 16;

export default function DiscoveryScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / (CARD_WIDTH + CARD_SPACING));
    setActiveIndex(index);
  };

  const handleShoppingNow = () => {
    console.log('Shopping now pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* TOP SECTION - White Background */}
      <View style={styles.topSection}>
        <View style={styles.header}>
          <Text style={styles.title}>Discover something new</Text>
          <Text style={styles.subtitle}>Special new arrivals just for you</Text>
        </View>
      </View>

      {/* BOTTOM SECTION - Dark Gray with Rounded Top Corners */}
      <View style={styles.bottomSection}>
        {/* Carousel Indicators */}
        <View style={styles.indicators}>
          {[0, 1, 2].map((i) => (
            <View
              key={i}
              style={[
                styles.indicator,
                activeIndex === i && styles.indicatorActive,
              ]}
            />
          ))}
        </View>

        {/* Shopping Now Button */}
        <TouchableOpacity
          style={styles.shoppingButton}
          onPress={handleShoppingNow}
          activeOpacity={0.8}
        >
          <Text style={styles.shoppingButtonText}>Shopping now</Text>
        </TouchableOpacity>
      </View>

      {/* IMAGE CAROUSEL - Overlapping both sections, showing partial side cards */}
      <View style={styles.carouselWrapper}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.carouselContent}
          snapToInterval={CARD_WIDTH + CARD_SPACING}
          decelerationRate="fast"
        >
          {[1, 2, 3].map((_, index) => (
            <View key={index} style={styles.carouselItem}>
              <Image
                source={require('../assets/pic2.png')}
                style={styles.carouselImage}
                resizeMode="cover"
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  /* TOP SECTION */
  topSection: {
    backgroundColor: '#ffffff',
    paddingTop: 50,
    paddingBottom: 0,
    zIndex: 1,
  },

  header: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    fontWeight: '400',
  },

  /* BOTTOM SECTION - Dark Gray with Rounded Top */
  bottomSection: {
    flex: 1,
    marginTop: 250,
    backgroundColor: '#2a2a2a',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 24,
    paddingTop: 32,
  },

  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    gap: 8,
  },

  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: 'transparent',
  },

  indicatorActive: {
    backgroundColor: '#ffffff',
  },

  shoppingButton: {
    width: width - 60,
    paddingVertical: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },

  shoppingButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },

  /* CAROUSEL WRAPPER - Positioned to overlap sections */
  carouselWrapper: {
    position: 'absolute',
    top: height * 0.32,
    left: 0,
    right: 0,
    height: 350,
    zIndex: 10,
  },

  carouselContent: {
    paddingLeft: (width - CARD_WIDTH) / 2,
    paddingRight: (width - CARD_WIDTH) / 2,
  },

  carousel: {
    height: 350,
  },

  carouselItem: {
    width: CARD_WIDTH,
    marginRight: CARD_SPACING,
    alignItems: 'center',
    justifyContent: 'center',
  },

  carouselImage: {
    width: CARD_WIDTH,
    height: 350,
    borderRadius: 20,
    backgroundColor: '#eaeaea',
  },
});

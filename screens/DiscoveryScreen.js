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

// Get device screen dimensions (used for responsive sizing)
const { width, height } = Dimensions.get('window');

// Width of the image card relative to screen width
const CARD_WIDTH = width - 100;

// Space between cards (kept for future carousel support)
const CARD_SPACING = 16;

export default function DiscoveryScreen({ navigation }) {

  // Tracks which carousel item is currently active
  const [activeIndex, setActiveIndex] = useState(0);

  // Reference to ScrollView (useful for programmatic scrolling)
  const scrollViewRef = useRef(null);

  // Calculates active carousel index based on horizontal scroll position
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / (CARD_WIDTH + CARD_SPACING));
    setActiveIndex(index);
  };

  // Handles Shopping button press
  const handleShoppingNow = () => {
    console.log('Shopping now pressed');
    // navigation.navigate('Shop'); // example navigation
  };

  return (
    <View style={styles.container}>
      {/* Controls status bar text color */}
      <StatusBar barStyle="dark-content" />

      {/* ================= TOP SECTION ================= */}
      {/* White background section containing title & subtitle */}
      <View style={styles.topSection}>
        <View style={styles.header}>
          <Text style={styles.title}>Discover something new</Text>
          <Text style={styles.subtitle}>
            Special new arrivals just for you
          </Text>
        </View>
      </View>

      {/* ================= BOTTOM SECTION ================= */}
      {/* Dark gray section with rounded top corners */}
      <View style={styles.bottomSection}>

        {/* Pagination indicators (static for now, dynamic-ready) */}
        <View style={styles.indicators}>
          {[0, 1, 2].map((i) => (
            <View
              key={i}
              style={[
                styles.indicator,
                // Highlights indicator based on activeIndex
                activeIndex === i && styles.indicatorActive,
              ]}
            />
          ))}
        </View>

        {/* Call-to-action button */}
        <TouchableOpacity
          style={styles.shoppingButton}
          onPress={handleShoppingNow}
          activeOpacity={0.8}
        >
          <Text style={styles.shoppingButtonText}>Shopping now</Text>
        </TouchableOpacity>
      </View>

      {/* ================= CENTER IMAGE ================= */}
      {/* Absolutely positioned to overlap top & bottom sections */}
      <View style={styles.carouselWrapper}>
        <View style={styles.singleImageContainer}>
          <Image
            source={require('../assets/pic2.png')}
            style={styles.carouselImage}
            resizeMode="cover"
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  /* MAIN SCREEN CONTAINER */
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  /* ================= TOP SECTION ================= */
  topSection: {
    backgroundColor: '#ffffff',
    paddingTop: 50,
    zIndex: 1, // Keeps text below the overlapping image
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

  /* ================= IMAGE CONTAINER ================= */
  singleImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ================= BOTTOM SECTION ================= */
  bottomSection: {
    flex: 1,
    marginTop: 320, // Pushes section down to make space for image
    backgroundColor: '#2a2a2a',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 24,
    paddingTop: 32,
  },

  /* Indicator dots */
  indicators: {
    flexDirection: 'row',
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

  /* Shopping button */
  shoppingButton: {
    width: width - 60,
    paddingVertical: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ffffff',
    alignItems: 'center',
  },

  shoppingButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },

  /* ================= IMAGE POSITIONING ================= */
  /* Positioned absolutely to float between sections */
  carouselWrapper: {
    position: 'absolute',
    top: height * 0.32,
    left: 0,
    right: 0,
    height: 350,
    zIndex: 10,
  },

  /* Image styling */
  carouselImage: {
    width: CARD_WIDTH,
    height: 350,
    borderRadius: 20,
    backgroundColor: '#eaeaea',
  },
});

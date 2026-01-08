// import React, { useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   Dimensions,
//   TouchableOpacity,
//   StatusBar,
// } from 'react-native';

// const { width } = Dimensions.get('window');

// export default function DiscoveryScreen({ navigation }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const scrollViewRef = useRef(null);

//   const handleScroll = (event) => {
//     const scrollPosition = event.nativeEvent.contentOffset.x;
//     const index = Math.round(scrollPosition / width);
//     setActiveIndex(index);
//   };

//   const handleShoppingNow = () => {
//     // TODO: Navigate to shopping screen
//     console.log('Shopping now pressed');
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" />
      
//       {/* Top Section - White Background */}
//       <View style={styles.topSection}>
//         <View style={styles.header}>
//           <Text style={styles.title}>Discover something new</Text>
//           <Text style={styles.subtitle}>Special new arrivals just for you</Text>
//         </View>

//         {/* Image Carousel */}
//         <ScrollView
//           ref={scrollViewRef}
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           onScroll={handleScroll}
//           scrollEventThrottle={16}
//           style={styles.carousel}
//         >
//           <View style={styles.carouselItem}>
//             <Image
//               source={require('../assets/pic2.png')}
//               style={styles.carouselImage}
//               resizeMode="cover"
//             />
//           </View>
//           <View style={styles.carouselItem}>
//             <Image
//               source={require('../assets/pic2.png')}
//               style={styles.carouselImage}
//               resizeMode="cover"
//             />
//           </View>
//           <View style={styles.carouselItem}>
//             <Image
//               source={require('../assets/pic2.png')}
//               style={styles.carouselImage}
//               resizeMode="cover"
//             />
//           </View>
//         </ScrollView>
//       </View>

//       {/* Bottom Section - Dark Gray Background */}
//       <View style={styles.bottomSection}>
//         {/* Carousel Indicators */}
//         <View style={styles.indicators}>
//           <View
//             style={[
//               styles.indicator,
//               activeIndex === 0 && styles.indicatorActive,
//             ]}
//           />
//           <View
//             style={[
//               styles.indicator,
//               activeIndex === 1 && styles.indicatorActive,
//             ]}
//           />
//           <View
//             style={[
//               styles.indicator,
//               activeIndex === 2 && styles.indicatorActive,
//             ]}
//           />
//         </View>

//         {/* Shopping Now Button */}
//         <TouchableOpacity
//           style={styles.shoppingButton}
//           onPress={handleShoppingNow}
//           activeOpacity={0.8}
//         >
//           <Text style={styles.shoppingButtonText}>Shopping now</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   topSection: {
//     flex: 0.6,
//     backgroundColor: '#ffffff',
//     paddingTop: 50,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 30,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#000000',
//     textAlign: 'center',
//   },
//   carousel: {
//     flex: 1,
//   },
//   carouselItem: {
//     width: width,
//     paddingHorizontal: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   carouselImage: {
//     width: width - 40,
//     height: '220',
   
//   },
//   bottomSection: {
//     flex: 0.4,
//     backgroundColor: '#2a2a2a',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom: 40,
//   },
//   indicators: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 40,
//     gap: 8,
//   },
//   indicator: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: 'transparent',
//     borderWidth: 1,
//     borderColor: '#ffffff',
//   },
//   indicatorActive: {
//     backgroundColor: '#ffffff',
//   },
//   shoppingButton: {
//     width: width - 60,
//     paddingVertical: 16,
//     borderRadius: 25,
//     borderWidth: 1,
//     borderColor: '#ffffff',
//     backgroundColor: '#2a2a2a',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   shoppingButtonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });



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

const { width } = Dimensions.get('window');

export default function DiscoveryScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  const handleShoppingNow = () => {
    console.log('Shopping now pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* TOP SECTION */}
      <View style={styles.topSection}>
        <View style={styles.header}>
          <Text style={styles.title}>Discover something new</Text>
          <Text style={styles.subtitle}>
            Special new arrivals just for you
          </Text>
        </View>
      </View>

      {/* IMAGE CAROUSEL - Positioned to overlap sections */}
      <View style={styles.carouselContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.carousel}
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

      {/* BOTTOM SECTION */}
      <View style={styles.bottomSection}>
        {/* INDICATORS */}
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

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.shoppingButton}
          onPress={handleShoppingNow}
          activeOpacity={0.8}
        >
          <Text style={styles.shoppingButtonText}>Shopping now</Text>
        </TouchableOpacity>
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
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
  },

  header: {
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },

  /* CAROUSEL CONTAINER - Positioned absolutely to overlap sections */
  carouselContainer: {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    zIndex: 10,
    height: 280,
  },

  /* CAROUSEL */
  carousel: {
    height: 280,
  },

  carouselItem: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  carouselImage: {
    width: width - 40,
    height: 280,
    borderRadius: 16,
    backgroundColor: '#eaeaea',
  },

  /* BOTTOM SECTION */
  bottomSection: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 160,
    paddingBottom: 40,
  },

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

  shoppingButton: {
    width: width - 60,
    paddingVertical: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  shoppingButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

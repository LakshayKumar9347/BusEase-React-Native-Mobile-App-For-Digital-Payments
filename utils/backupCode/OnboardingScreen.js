import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// onboarding lib
import Onboarding from 'react-native-onboarding-swiper';
// Using Lottie Animation
import LottieView from 'lottie-react-native';
import { setItem } from '../utils/asyncStorage';

const { width, height } = Dimensions.get('window');
const OnboardingScreen = ({ navigation }) => {
  const handleOnDoneAndSkip = () => {
    navigation.navigate('AuthScreen');
    setItem('onboarded', '1');
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleOnDoneAndSkip}
        onSkip={handleOnDoneAndSkip}
        containerStyles={{ padding: 70 }}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View>
                <LottieView
                  style={styles.lottie}
                  source={require('../assets/animations/mainOnboarding.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Digital Payment',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#a78bfa',
            image: (
              <View>
                <LottieView
                  style={styles.lottie}
                  source={require('../assets/animations/id-scanning.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Smart Pass Facility',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View>
                <LottieView
                  style={styles.lottie}
                  source={require('../assets/animations/location-animation.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Real Time Location',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
});

import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getItem} from '../utils/asyncStorage';
import SignIn from '../screens/SignIn';
import HomeDashboard from '../screens/HomeDashboard';
import QRScannerPage from '../screens/QRScannerPage';
import DashboardTransactionHistory from '../screens/DashboardTransactionHistory';
import RideBookingChooseDestinat from '../screens/RideBookingChooseDestinat';
import RideBookingChooseVehicle from '../screens/RideBookingChooseVehicle';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [showOnboarding, setshowOnboarding] = useState(null);

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem('onboarded');
    if (onboarded == 1) {
      // hide onboarding
      setshowOnboarding(false);
      // console.log('Hide Onboarding');
    } else {
      // console.log('Showing Onboarding');
      // show onboarding
      setshowOnboarding(true);
    }
  };
  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  if (showOnboarding === null) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          options={{headerShown: false}}
          component={SignIn}
        />
        <Stack.Screen
          name="HomeDashboard"
          options={{headerShown: false}}
          component={HomeDashboard}
        />
        <Stack.Screen
          name="QRScannerPage"
          options={{headerShown: false}}
          component={QRScannerPage}
        />
        <Stack.Screen
          name="DashboardTransactionHistory"
          options={{headerShown: false}}
          component={DashboardTransactionHistory}
        />
        <Stack.Screen
          name="RideBookingChooseDestinat"
          options={{headerShown: false}}
          component={RideBookingChooseDestinat}
        />
        <Stack.Screen
          name="RideBookingChooseVehicle"
          options={{headerShown: false}}
          component={RideBookingChooseVehicle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});

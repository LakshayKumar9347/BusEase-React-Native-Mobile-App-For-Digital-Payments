import React, {useEffect} from 'react';
// Logic To Show/Hide The SpashScreen When App load
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './navigation/appNavigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <AppNavigation />
    </>
  );
};

export default App;

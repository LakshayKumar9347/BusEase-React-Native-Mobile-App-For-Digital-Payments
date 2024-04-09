import React from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
import { setItem } from '../utils/asyncStorage';
import config from '../auth0-configuration';

const AuthScreen = ({ navigation }) => {
  const { authorize, clearSession, user, error, isLoading } = useAuth0();

  const onLogin = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  // if (isLoading) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Loading</Text>
  //     </View>
  //   );
  // }

  const loggedIn = user !== undefined && user !== null;
  console.log(loggedIn);

  return (
    <>
      <Auth0Provider domain={config.domain} clientId={config.clientId}>
        <View style={styles.container}>
          {loggedIn && <Text>You are logged in as {user.name}</Text>}
          {/* <Image
            style={{ height: 100, width: 100, borderRadius: 50 }}
            src={`${user.picture}`}
          /> */}
          {!loggedIn && <Text>You are not logged in</Text>}
          {error && <Text>{error.message}</Text>}

          <View style={{ marginTop: 20 }}>
            <Button
              onPress={loggedIn ? onLogout : onLogin}
              title={loggedIn ? 'Log Out' : 'Log In'}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Button
              onPress={() => navigation.navigate('HomeScreen')}
              title="Home"
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Button
              onPress={() => {
                navigation.navigate('Onboarding');
                setItem('onboarded', '0');
              }}
              title="Reset"
            />
          </View>
        </View>
      </Auth0Provider>
      {/* <Auth0Provider domain={config.domain} clientId={config.clientId}>
        <HomeScreen />
      </Auth0Provider> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default AuthScreen;

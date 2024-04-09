import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import {useCameraPermission} from 'react-native-vision-camera';

const QRScannerPage = () => {
  // const {hasPermission, requestPermission} = useCameraPermission();
  const [cameraPermission, setCameraPermission] = useState(null);

  // useEffect(() => {
  //   const checkCameraPermission = () => {
  //     // const hasPermission = false;
  //     // setCameraPermission(hasPermission);
  //   };

  //   // checkCameraPermission();
  //   // console.log(hasPermission);
  //   // requestPermission();
  //   // console.log(hasPermission);
  // }, []);

  const requestCameraPermission = () => {
    setCameraPermission(true);
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: cameraPermission ? 'rgba(0, 0, 0, 0.5)' : '#fff'},
      ]}>
      {cameraPermission === null ? (
        <Text style={styles.message}>Checking camera permission...</Text>
      ) : !cameraPermission ? (
        <View style={styles.permissionContainer}>
          <Text style={styles.message}>Camera permission not allowed!</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={requestCameraPermission}>
            <Text style={styles.buttonText}>Request Permission</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.Qrcontainer}>
          <View style={styles.cameraContainer}>
            {/* Your camera UI */}
            <View style={styles.cameraView}>
              <Image
                style={{width: 200, height: 200, borderRadius: 11}}
                source={require('../assets/black-logo.png')}
              />
            </View>
            <TouchableOpacity style={styles.captureButton}>
              <Text style={styles.captureButtonText}>Take Picture</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Qrcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#454545',
  },
  permissionContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#c9efc7',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#454545',
    fontSize: 18,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraView: {
    width: 200,
    height: 200,
    backgroundColor: '#ddd',
    marginBottom: 20,
    borderRadius: 11,
  },
  captureButton: {
    backgroundColor: '#c9efc7',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  captureButtonText: {
    color: '#454545',
    fontSize: 18,
  },
});

export default QRScannerPage;

// **********Camera Code vision Camera***********
// import React, {useEffect} from 'react';
// import {Text, StyleSheet} from 'react-native';
// import {
//   Camera,
//   useCameraPermission,
//   useCameraDevice,
//   useCodeScanner,
// } from 'react-native-vision-camera';

// const QRScannerPage = () => {
//   const {hasPermission, requestPermission} = useCameraPermission();
//   const device = useCameraDevice('back');

//   const codeScanner = useCodeScanner({
//     codeTypes: ['qr', 'ean-13'],
//     onCodeScanned: codes => {
//       console.log(`Scanned ${codes.length} codes!`);
//     },
//   });

//   useEffect(() => {
//     requestPermission();
//   }, []);

//   if (device == null) return <Text>No Camera Devices Found</Text>;
//   return (
//     <Camera
//       style={StyleSheet.absoluteFill}
//       device={device}
//       isActive={true}
//       codeScanner={codeScanner}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   Qrcontainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   message: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#454545',
//   },
//   permissionContainer: {
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#c9efc7',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#454545',
//     fontSize: 18,
//   },
//   cameraContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cameraView: {
//     width: 200,
//     height: 200,
//     backgroundColor: '#ddd',
//     marginBottom: 20,
//   },
//   captureButton: {
//     backgroundColor: '#c9efc7',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//   },
//   captureButtonText: {
//     color: '#454545',
//     fontSize: 18,
//   },
// });

// export default QRScannerPage;

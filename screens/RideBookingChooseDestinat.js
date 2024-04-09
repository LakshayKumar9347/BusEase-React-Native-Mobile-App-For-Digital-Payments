import * as React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Border, Color, FontFamily, FontSize} from '../GlobalStylesMain';

const RideBookingChooseDestinat = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.rideBookingChooseDestinat}>
        <View style={[styles.textbox2, styles.textboxLayout]}>
          <Text style={[styles.currentLocation, styles.whereToTypo]}>
            Current Location
          </Text>
          <Image
            style={[styles.gpsIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require('../assets/gps.png')}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeDashboard');
          }}>
          <Image
            style={styles.arrowLeft1}
            resizeMode="cover"
            source={require('../assets/arrow-left-1.png')}
          />
        </TouchableOpacity>
        <Image
          style={[styles.image22Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/image-20.png')}
        />
        <Image
          style={[styles.image23Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require('../assets/image-21.png')}
        />
        <View style={[styles.textbox3, styles.textboxLayout]}>
          <Text style={[styles.whereTo, styles.whereToTypo]}>Where to?</Text>
          <Image
            style={[styles.pin3Icon, styles.iconPosition1]}
            resizeMode="cover"
            source={require('../assets/pin-3.png')}
          />
        </View>
        <Text style={[styles.savedPlaces, styles.savedPlacesTypo]}>
          Saved places
        </Text>
        <Text style={[styles.viewAll, styles.workTypo]}>View All</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RideBookingChooseVehicle');
          }}>
          <View style={[styles.container12, styles.containerPosition]}>
            <Image
              style={styles.work1Icon}
              resizeMode="cover"
              source={require('../assets/work-1.png')}
            />
            <Text style={[styles.northAvenueTucson, styles.tucsonPosition]}>
              178, Industrial Area, Phase 1
            </Text>
            <Text style={[styles.work, styles.tucsonPosition]}>
              Elante Mall
            </Text>
            <Text style={[styles.km, styles.kmTypo]}>2.3km</Text>
            <Image
              style={[styles.nEdit1, styles.nEdit1Position]}
              resizeMode="cover"
              source={require('../assets/n-edit-1.png')}
            />
            <Image
              style={[styles.container12Child, styles.childLayout]}
              resizeMode="cover"
              source={require('../assets/line-1.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RideBookingChooseVehicle');
          }}>
          <View style={[styles.container13, styles.containerPosition]}>
            <Image
              style={styles.work1Icon}
              resizeMode="cover"
              source={require('../assets/home-1.png')}
            />
            <Text style={[styles.desertRoadTucson, styles.tucsonPosition]}>
              Sahibzada Ajit Singh Nagar
            </Text>
            <Text style={[styles.work, styles.tucsonPosition]}>Mohali</Text>
            <Text style={[styles.km1, styles.kmTypo]}>4.3km</Text>
            <Image
              style={[styles.nEdit1, styles.nEdit1Position]}
              resizeMode="cover"
              source={require('../assets/n-edit-1.png')}
            />
          </View>
        </TouchableOpacity>

        <View style={[styles.container14, styles.containerPosition]}>
          <Image
            style={styles.work1Icon}
            resizeMode="cover"
            source={require('../assets/add-circle-1.png')}
          />
          <Text style={[styles.northAvenueTucson, styles.tucsonPosition]}>
            Save your favorite locations
          </Text>
          <Text style={[styles.work, styles.tucsonPosition]}>Add New</Text>
          <Image
            style={[styles.container14Child, styles.childLayout]}
            resizeMode="cover"
            source={require('../assets/line-1.png')}
          />
        </View>
        <Image
          style={styles.rideBookingChooseDestinatChild}
          resizeMode="cover"
          source={require('../assets/line-6.png')}
        />
        {/* <Text style={[styles.frequentDestinations, styles.savedPlacesTypo]}>
          Frequent destinations
        </Text>
        <View style={[styles.container15, styles.containerPosition]}>
          <Image
            style={styles.work1Icon}
            resizeMode="cover"
            source={require('../assets/pin-3-4.png')}
          />
          <Text style={[styles.northAvenueTucson, styles.tucsonPosition]}>
            639 South Street, Apt. 7A
          </Text>
          <Text style={[styles.work, styles.tucsonPosition]}>Long Beach</Text>
          <Text style={[styles.km2, styles.kmTypo]}>1.3km</Text>
          <Image
            style={[styles.container12Child, styles.childLayout]}
            resizeMode="cover"
            source={require('../assets/line-1.png')}
          />
        </View>
        <View style={[styles.container16, styles.containerPosition]}>
          <Image
            style={styles.work1Icon}
            resizeMode="cover"
            source={require('../assets/pin-3-4.png')}
          />
          <Text style={[styles.northAvenueTucson, styles.tucsonPosition]}>
            639 South Street, Apt. 7A
          </Text>
          <Text style={[styles.work, styles.tucsonPosition]}>Long Beach</Text>
          <Text style={[styles.km2, styles.kmTypo]}>1.3km</Text>
          <Image
            style={[styles.container12Child, styles.childLayout]}
            resizeMode="cover"
            source={require('../assets/line-1.png')}
          />
        </View>
        <View style={[styles.container17, styles.containerPosition]}>
          <Image
            style={styles.work1Icon}
            resizeMode="cover"
            source={require('../assets/pin-3-4.png')}
          />
          <Text style={[styles.northAvenueTucson, styles.tucsonPosition]}>
            639 South Street, Apt. 7A
          </Text>
          <Text style={[styles.work, styles.tucsonPosition]}>Long Beach</Text>
          <Text style={[styles.km2, styles.kmTypo]}>1.3km</Text>
          <Image
            style={[styles.container14Child, styles.childLayout]}
            resizeMode="cover"
            source={require('../assets/line-1.png')}
          />
        </View>
        <View style={[styles.container18, styles.containerPosition]}>
          <Image
            style={styles.work1Icon}
            resizeMode="cover"
            source={require('../assets/pin-3-4.png')}
          />
          <Text style={[styles.northAvenueTucson, styles.tucsonPosition]}>
            639 South Street, Apt. 7A
          </Text>
          <Text style={[styles.work, styles.tucsonPosition]}>Long Beach</Text>
          <Text style={[styles.km2, styles.kmTypo]}>1.3km</Text>
        </View>
        <Image
          style={[styles.image24Icon, styles.nEdit1Position]}
          resizeMode="cover"
          source={require('../assets/image-24.png')}
        /> */}
        {/* <Image
          style={[styles.image25Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require('../assets/image-25.png')}
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textboxLayout: {
    borderRadius: Border.br_9xs,
    position: 'absolute',
  },
  whereToTypo: {
    textAlign: 'left',
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    left: 34,
    top: '50%',
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: 'absolute',
  },
  iconPosition1: {
    height: 16,
    width: 16,
    left: 12,
    top: '50%',
    position: 'absolute',
    overflow: 'hidden',
  },
  iconLayout: {
    height: 40,
    top: 0,
  },
  iconPosition: {
    right: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  savedPlacesTypo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: '600',
    lineHeight: 26,
    fontSize: FontSize.size_base,
    left: 20,
    textAlign: 'left',
    color: Color.colorGray_100,
    position: 'absolute',
  },
  workTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: '700',
  },
  containerPosition: {
    height: 74,
    right: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: Color.colorWhite,
  },
  tucsonPosition: {
    left: 56,
    textAlign: 'left',
    color: Color.colorGray_100,
    position: 'absolute',
  },
  kmTypo: {
    top: 18,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    position: 'absolute',
  },
  nEdit1Position: {
    right: 20,
    position: 'absolute',
  },
  childLayout: {
    width: 350,
    maxHeight: '100%',
    left: 20,
    position: 'absolute',
  },
  currentLocation: {
    marginTop: -11.5,
  },
  gpsIcon: {
    marginTop: -8.5,
  },
  textbox2: {
    top: 52,
    right: 67,
    left: 65,
    backgroundColor: Color.colorGray_200,
    borderStyle: 'solid',
    borderColor: '#9095a1',
    borderWidth: 1,
    height: 37,
  },
  arrowLeft1: {
    top: 56,
    left: 27,
    height: 24,
    width: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  image22Icon: {
    width: 72,
    left: 0,
    position: 'absolute',
    height: 40,
    overflow: 'hidden',
  },
  image23Icon: {
    width: 96,
    height: 40,
    top: 0,
  },
  whereTo: {
    marginTop: -10.5,
  },
  pin3Icon: {
    marginTop: -7.5,
  },
  textbox3: {
    top: 102,
    right: 68,
    left: 66,
    backgroundColor: Color.colorWhitesmoke,
    height: 35,
  },
  savedPlaces: {
    top: 162,
  },
  viewAll: {
    top: 166,
    right: 19,
    color: '#379ae6',
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontWeight: '700',
    textAlign: 'left',
    position: 'absolute',
  },
  work1Icon: {
    top: 16,
    left: 20,
    height: 24,
    width: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  northAvenueTucson: {
    top: 38,
    left: 56,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.nunitoRegular,
  },
  work: {
    top: 16,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: '700',
    left: 56,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  km: {
    left: 150,
  },
  nEdit1: {
    width: 12,
    height: 12,
    top: 16,
    overflow: 'hidden',
  },
  container12Child: {
    top: 74,
  },
  container12: {
    top: 188,
  },
  desertRoadTucson: {
    width: 211,
    top: 38,
    left: 56,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.nunitoRegular,
  },
  km1: {
    left: 120,
  },
  container13: {
    top: 262,
  },
  container14Child: {
    top: 0,
    width: 350,
  },
  container14: {
    top: 336,
  },
  rideBookingChooseDestinatChild: {
    top: 434,
    width: 390,
    maxHeight: '100%',
    left: 0,
    position: 'absolute',
  },
  frequentDestinations: {
    top: 458,
  },
  km2: {
    left: 143,
  },
  container15: {
    top: 484,
  },
  container16: {
    top: 558,
  },
  container17: {
    top: 706,
  },
  container18: {
    top: 632,
  },
  image24Icon: {
    top: 77,
    borderRadius: 19,
    width: 37,
    height: 37,
  },
  image25Icon: {
    bottom: 0,
    maxWidth: '100%',
    height: 293,
    left: 0,
  },
  rideBookingChooseDestinat: {
    shadowColor: 'rgba(18, 15, 40, 0.12)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    flex: 1,
    width: '100%',
    height: 928,
    overflow: 'hidden',
    backgroundColor: Color.colorWhite,
  },
});

export default RideBookingChooseDestinat;

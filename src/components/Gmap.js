import React, {useEffect, useState} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  PermissionsAndroid,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import dot from '../../assets/images/dot.png';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Gmaps = () => {
  const [markers, setMarkers] = useState([
    {
      location: {latitude: 12.988896, longitude: 77.629822},
      title: 'Location',
      description: 'current location',
    },
  ]);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'Road Ease App needs access to your Location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
        getLocation();
      } else {
        console.log('Location permission denied');
        setError('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
      setError('Error requesting location permission');
    }
  };

  const getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log(location);
        setLocation(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
        setError(`Error getting location: ${message}`);
      });
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const CustomCalloutContent = () => {
    return (
      <View>
        <Text style={styles.text}>You are Here</Text>
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        {location ? (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}>
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}>
              <View style={styles.dotContainer}>
                <Image style={styles.dot} source={dot} />
              </View>
              <Callout style={styles.callout}>
                <CustomCalloutContent />
              </Callout>
            </Marker>
            {markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={marker.location}
                title={marker.title}
                description={marker.description}
              />
            ))}
          </MapView>
        ) : (
          <Text style={styles.loader}>{error || 'Loading...'}</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Gmaps;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Archivo-Black',
    color: 'black',
    fontSize: 10,
    textAlign: 'center',
  },
  scrollView: {
    flexGrow: 1,
  },
  callout: {
    width: 50,
    height: 30,
  },
  container: {
    height: 400, // Adjust this value as needed
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  dotContainer: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
  },
  loader: {
    color: 'black',
    textAlign: 'center',
  },
});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Camera,
  useCameraPermission,
  useCameraDevice,
} from 'react-native-vision-camera';

const VisionCamera = ({route , navigation}) => {
  const {FromScreen} = route.params;
  //   console.log('FromScreen', FromScreen);

  //USE STATE
  const [rotateCamera, setrotateCamera] = useState('back');
  const cameraRef = useRef(null);
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice(rotateCamera);
  useEffect(() => {
    cameraPerm();
  }, []);
  // CHECKING PREMISSION OF CAMERA
  const cameraPerm = async () => {
    if (!hasPermission) {
      console.log('PREMMSION nhi hai user ka', hasPermission);
      await requestPermission();
    }
    // console.log('hasPermission', hasPermission);
    if (!device) {
      console.log('DEVICES me kuch nhi aa raha hai', device);
    } else if (device === undefined) {
      console.log('device undefined aaya hai ', device);
    } else if (device === null) {
      console.log('device null aaya hai');
    }
  };
  {
    /* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  }
  //   console.log(' kay mili  routes me -->> ', route);
  //   console.log(' kay mili  route params me -->> ', route.params);

  useEffect(() => {
    if (!device) {
      console.log('No camera devices available', device);
    } else {
      //   console.log('Device available:', device);
    //   console.log('Device available:');
    }
  }, [device]);

  const buttonPress = async () => {
    console.log('photo btn');

    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto(); // Capture photo asynchronously
        console.log('Captured photo:', photo);
        // setSelectedImage(photo);
        navigation.navigate(FromScreen, {photo});
      } catch (error) {
        console.error('Failed to take photo:', error);
      }
    }
  };

  const funRotate = () => {
    setrotateCamera(prevPosition =>
      prevPosition === 'front' ? 'back' : 'front',
    );
  };

  return (
    <View style={{backgroundColor: '#000', height: '100%'}}>
      {device != null && hasPermission && (
        <Camera
          style={{height: '80%', width: '100%'}}
          ref={cameraRef}
          device={device}
          isActive={true}
          photo={true}
        />
      )}

      <View style={styles.bottomCont}>
        <TouchableOpacity style={styles.photoCont}>
          <MaterialIcons
            name="insert-photo"
            size={40}
            color="#fff"
            style={{right: 5}}
          />
        </TouchableOpacity>
        <View style={styles.bottombtn}>
          <TouchableOpacity
            style={styles.bottombtn2}
            onPress={buttonPress}></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.photoCont} onPress={funRotate}>
          <MaterialIcons
            name="flip-camera-android"
            size={30}
            color="#fff"
            style={{right: 5}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VisionCamera;
const styles = StyleSheet.create({
  bottombtn: {
    backgroundColor: '#000',
    height: '80%',
    width: '17%',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottombtn2: {
    backgroundColor: '#fff',
    height: '90%',
    width: '90%',
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomCont: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    // backgroundColor:"red",
    height: '10%',
    width: '100%',
    justifyContent: 'space-around',
  },
  photoCont: {
    // backgroundColor: 'green',
    height: '80%',
    width: '17%',
    // borderRadius: 100,
    // borderWidth: 5,
    borderColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
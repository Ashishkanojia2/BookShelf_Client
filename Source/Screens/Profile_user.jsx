import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {Button, TextInput} from 'react-native-paper';
import {ScrollView} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useUpdateUserMutation} from '../RTKquery/Slices/ApiSclices';
import {useDispatch, useSelector} from 'react-redux';
import mime from 'mime';
import {getUserData} from '../Redux/Reducer/AuthReducer';
import styles from './CssStyles/ProfileUser';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Profile_user = ({navigation, route}) => {
  const [emailId, setemailId] = useState('');
  const [gender, setgender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');
  const [name, setname] = useState('');
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const occupationRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const nameRef = useRef(null);
  const [buttonLoading, setbuttonLoading] = useState(false);
  const [userProfilePic, setuserProfilePic] = useState(null);
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const [UpdateUserData] = useUpdateUserMutation();
  const dispatch = useDispatch();

  const clearMessage = () => {};

  const userData = useSelector(state => state.user);

  // console.log('*************************profile_user*************************');
  // console.log('userData.data', userData.data);

  const [initialData, setInitialData] = useState({
    address: '',
    name: '',
    occupation: '',
    gender: '',
    phone: '',
    avatar: '',
  });
  useEffect(() => {
    if (userData.data) {
      setaddress(userData.data.address || '');
      setemailId(userData.data.email || '');
      setname(userData.data.name || '');
      setOccupation(userData.data.occupation || '');
      setgender(userData.data.gender || '');
      setphone(userData.data.phone ? userData.data.phone.toString() : '');
      setuserProfilePic(userData.data.avatar?.url || '');
    }
    setInitialData({
      address: userData.data.address || '',
      name: userData.data.name || '',
      occupation: userData.data.occupation || '',
      gender: userData.data.gender || '',
      phone: userData.data.phone ? userData.data.phone.toString() : '',
      avatar: userData.data.avatar ? userData.data.avatar.url : '',
    });
  }, [userData.data]);

  const setProfilFun = () => {
    navigation.navigate('camera', {FromScreen: 'profileUser'});
  };
  useEffect(() => {
    if (route.params) {
      if (route.params?.photo?.path) {
        return setuserProfilePic(`file://${route.params.photo.path}`);
      } else if (route.params?.path) {
        return setuserProfilePic(route.params.path);
      }
    }
  }, [route]);
  useEffect(() => {
    if (
      name !== initialData.name ||
      address !== initialData.address ||
      occupation !== initialData.occupation ||
      gender !== initialData.gender ||
      phone !== initialData.phone ||
      userProfilePic !== initialData.avatar
    ) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }, [name, address, occupation, gender, phone, initialData, userProfilePic]);

  const UpdateUserBtn = async () => {
    try {
      setbuttonLoading(true);

      const myform = new FormData();
      myform.append('name', name);
      myform.append('gender', gender);
      myform.append('phone', phone);
      myform.append('address', address);
      myform.append('occupation', occupation);
      if (userProfilePic) {
        myform.append('avatar', {
          uri: userProfilePic,
          type: mime.getType(userProfilePic),
          name: userProfilePic.split('/').pop(),
        });
      }

      const response = await UpdateUserData(myform).unwrap();
      if (response?.success) {
        setbuttonLoading(false);
        dispatch(getUserData(response));
        Alert.alert(
          'Success',
          'Profile Successfully Updated',
          [
            {
              text: 'Go to profile page',
              onPress: () => navigation.navigate('profile'),
            },
          ],
          {cancelable: false},
        );
      }
      console.log('user profile update krne ke baad RESPONSE', response);
    } catch (error) {
      setbuttonLoading(false);
      console.error(error);
      Alert.alert('Error', 'Failed to update profile. Please try again.');
    }
  };

  const goScreen = () => {
    if (route.params == 'Product_Books') {
      navigation.navigate('home');
    } else if (navigation.navigate('profile')) {
      navigation.navigate('profile');
    }
  };

  return (
    <ScrollView>
      <View style={styles.ParentContainer}>
        <ImageBackground
          source={require('../Assets/images/bg2.png')}
          style={styles.topimg}></ImageBackground>
        <TouchableOpacity
          style={{position: 'absolute', left: 20, top: 20}}
          onPress={() => {
            goScreen();
          }}>
          <Ionicons name="arrow-back-sharp" size={30} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headingCont}></View>

        <View style={styles.profilepicCont}>
          {userProfilePic !== undefined &&
          userProfilePic !== null &&
          userProfilePic !== '' ? (
            <Image
              source={{uri: userProfilePic}}
              style={{height: '100%', width: '100%'}}
            />
          ) : (
            <MaterialIcons
              name="add-a-photo"
              size={35}
              color={global.bgColor}
            />
          )}
        </View>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => {
            setProfilFun();
          }}>
          <Text style={styles.uploadPhtText}>Upload Photo</Text>
        </TouchableOpacity>
        <View style={styles.inputboxcont}>
          <TextInput
            ref={nameRef}
            value={name}
            onChangeText={value => setname(value)}
            label={'Full Name'}
            style={styles.inputfield}
            outlineColor={global.thirdColor}
            cursorColor={global.sandColor}
            activeOutlineColor={global.sandColor}
            mode="outlined"
            textColor={global.sandColor}
            onFocus={clearMessage}
          />
          <TextInput
            ref={emailRef}
            value={emailId}
            onChangeText={value => setemailId(value)}
            label={'Email'}
            style={styles.inputfield}
            outlineColor={global.thirdColor}
            cursorColor={global.sandColor}
            activeOutlineColor={global.sandColor}
            mode="outlined"
            textColor={global.sandColor}
            onFocus={clearMessage}
            editable={false}
          />
          <TextInput
            ref={genderRef}
            value={gender}
            onChangeText={value => setgender(value)}
            label={'gender'}
            color
            style={styles.inputfield}
            outlineColor={global.thirdColor}
            cursorColor={global.sandColor}
            activeOutlineColor={global.sandColor}
            mode="outlined"
            textColor={global.sandColor}
            onFocus={clearMessage}
          />
          <TextInput
            ref={occupationRef}
            value={occupation}
            onChangeText={value => setOccupation(value)}
            label={'occupation'}
            style={styles.inputfield}
            outlineColor={global.thirdColor}
            cursorColor={global.sandColor}
            activeOutlineColor={global.sandColor}
            mode="outlined"
            textColor={global.sandColor}
            onFocus={clearMessage}
          />
          <TextInput
            ref={phoneRef}
            value={phone}
            onChangeText={value => setphone(value)}
            label={'Phone no.'}
            style={styles.inputfield}
            outlineColor={global.thirdColor}
            cursorColor={global.sandColor}
            activeOutlineColor={global.sandColor}
            mode="outlined"
            textColor={global.sandColor}
            onFocus={clearMessage}
            keyboardType="phone-pad"
          />
          <TextInput
            ref={addressRef}
            value={address}
            onChangeText={value => setaddress(value)}
            label={'Address'}
            style={styles.inputfield}
            outlineColor={global.thirdColor}
            cursorColor={global.sandColor}
            activeOutlineColor={global.sandColor}
            mode="outlined"
            textColor={global.sandColor}
            onFocus={clearMessage}
          />

          <Button
            mode="contained"
            rippleColor="#c9c9c9"
            buttonColor={
              buttonEnabled == false
                ? global.disablebtn_Gray
                : global.thirdColor
            }
            onPress={() => buttonEnabled && UpdateUserBtn()}
            // disabled={!buttonEnabled}
            loading={buttonLoading}
            style={{
              marginTop: '20%',
              height: height / 20,
              width: width - 30,
              justifyContent: 'center',
            }}>
            Update Your Profile
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile_user;

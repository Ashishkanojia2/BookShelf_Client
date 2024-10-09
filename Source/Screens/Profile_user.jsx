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
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from '../RTKquery/Slices/ApiSclices';
import {useDispatch, useSelector} from 'react-redux';
import mime from 'mime';
import {getUserData} from '../Redux/Reducer/AuthReducer';

const font = 'Calistoga-Regular';

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
  const [Message, setMessage] = useState('');
  const [userProfilePic, setuserProfilePic] = useState(null);
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const [UpdateUserData] = useUpdateUserMutation();
  const dispatch = useDispatch();
  const {data: getuserdatafromStore} = useGetUserQuery();

  const clearMessage = () => {};

  const userData = useSelector(state => state.user.data);
  console.log('*************************profile_user*************************');
  const [initialData, setInitialData] = useState({
    address: '',
    name: '',
    occupation: '',
    gender: '',
    phone: '',
    avatar: '',
  });
  useEffect(() => {
    if (userData) {
      setaddress(userData.address || '');
      setemailId(userData.email || '');
      setname(userData.name || '');
      setOccupation(userData.occupation || '');
      setgender(userData.gender || '');
      setphone(userData.phone ? userData.phone.toString() : '');
      setuserProfilePic(userData.avatar?.url || '');
    }
    setInitialData({
      address: userData.address || '',
      name: userData.name || '',
      occupation: userData.occupation || '',
      gender: userData.gender || '',
      phone: userData.phone ? userData.phone.toString() : '',
      avatar: userData.avatar ? userData.avatar.url : '',
    });
  }, [userData]);

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
    setbuttonLoading(true);
    const myform = new FormData();
    myform.append('name', name);
    myform.append('gender', gender);
    myform.append('phone', phone);
    myform.append('address', address);
    myform.append('occupation', occupation);
    console.log('***************************************');

    console.log('userProfilePic', userProfilePic);

    myform.append('avatar', {
      uri: userProfilePic,
      type: mime.getType(userProfilePic),
      name: userProfilePic.split('/').pop(),
    });

    const response = await UpdateUserData(myform).unwrap();
    if (response?.data?.success) {
      setbuttonLoading(false);
      dispatch(getUserData(response.data));
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

        {/* <View style={styles.profilepicCont}>
          {userProfilePic !== undefined && userProfilePic !== null ? && userProfilePic !== '' (
            <Image
              source={{uri: userProfilePic }}
              style={{height: '100%', width: '100%'}}
            />
          ) : (
            <MaterialIcons
              name="add-a-photo"
              size={35}
              color={global.bgColor}
            />
          )}
        </View> */}
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

const styles = StyleSheet.create({
  uploadPhtText: {
    color: global.sandColor,
    marginTop: '2%',
    textDecorationLine: 'underline',
  },
  profilepicCont: {
    height: height / 10,
    width: width / 4.5,
    borderRadius: 50,
    backgroundColor: global.thirdColor,
    borderWidth: 1,
    borderColor: global.sandColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  ParentContainer: {
    backgroundColor: global.bgColor,
    height: height - 32,
  },
  topCont: {
    width,
    height: height / 13,
    backgroundColor: global.bgColor,
    borderBottomColor: global.thirdColor,
    borderWidth: 1,
    elevation: 20,
    shadowColor: global.sandColor,
  },
  topContText: {
    fontSize: 20,
    color: global.sandColor,
  },
  topimg: {width, height: height, position: 'absolute'},
  headingCont: {
    alignSelf: 'center',
    marginTop: '20%',
  },
  headtxt: {
    fontSize: 25,
    fontFamily: font,
  },
  Errortxt: {
    fontSize: 15,
    // fontFamily: font,
    color: 'red',
    alignSelf: 'center',
  },
  SkipCont: {
    alignSelf: 'flex-end',
    backgroundColor: global.sandColor,
    height: '4%',
    width: '15%',
    borderRadius: 40,
    justifyContent: 'center',
    marginEnd: '2%',
    marginTop: '2%',
  },
  Skiptxt: {
    fontSize: 17,
    color: global.bgColor,
    alignSelf: 'center',
  },
  headtxt2: {
    fontSize: 35,
    fontFamily: font,
    alignSelf: 'center',
    marginTop: '3%',
  },
  btmText: {
    fontSize: 13,
    // fontFamily: font,
    alignSelf: 'center',
    // marginTop: '3%',
  },
  inputfield: {
    // marginBottom: '10%',
    width: width - 50,
    backgroundColor: global.bgColor,
    marginVertical: height / 70,
  },
  inputboxcont: {
    alignItems: 'center',
    // marginTop: "0.5%",
  },
});

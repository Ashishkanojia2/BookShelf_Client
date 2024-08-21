import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {Button, TextInput} from 'react-native-paper';
import {ScrollView} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRegisterUserMutation} from '../RTKquery/Slices/ApiSclices';
import {useSelector} from 'react-redux';
// import {} from "../../assets/fonts"
const font = 'Calistoga-Regular';
const font1 = 'Pacifico-Regular';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Profile_user = ({navigation}) => {
  const [Registeruser] = useRegisterUserMutation();

  const [emailId, setemailId] = useState('');
  const [Gender, setGender] = useState('');
  const [Occupation, setOccupation] = useState('');
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

  const registerUserBtn = async () => {};
  const clearMessage = () => {};

  const userData = useSelector(state => state.user.data);

  return (
    <ScrollView>
      <View style={styles.ParentContainer}>
        <ImageBackground
          source={require('../Assets/images/bg2.png')}
          style={styles.topimg}></ImageBackground>
        <TouchableOpacity style={{position: 'absolute', left: 20, top: 20}}>
          <Ionicons name="arrow-back-sharp" size={30} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headingCont}></View>

        <TouchableOpacity style={styles.profilepicCont}>
          <MaterialIcons name="add-a-photo" size={35} color={global.bgColor} />
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
          />
          <TextInput
            ref={genderRef}
            value={Gender}
            onChangeText={value => setGender(value)}
            label={'Gender'}
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
            value={Occupation}
            onChangeText={value => setOccupation(value)}
            label={'Occupation'}
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
            buttonColor={global.thirdColor}
            onPress={() => registerUserBtn()}
            // loading={buttonLoading}
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

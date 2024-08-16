import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {ScrollView} from 'native-base';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {TextInput} from 'react-native-paper';
import {Button, TextInput} from 'react-native-paper';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const font = 'Calistoga-Regular';
const font1 = 'Pacifico-Regular';

const Profile = ({navigation}) => {
  //   const [Registeruser] = useRegisterUserMutation();
  const [emailId, setemailId] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');
  const [name, setname] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const nameRef = useRef(null);
  //   const [buttonLoading, setbuttonLoading] = useState(false);

  return (
    <View style={styles.ParentContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(140,154,154,1)"
        translucent={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* <View style={styles.inputboxcont}>
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
            // onFocus={clearMessage}
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
            // onFocus={clearMessage}
          />
          <TextInput
            ref={passwordRef}
            value={Password}
            onChangeText={value => setPassword(value)}
            label={'Password'}
            style={styles.inputfield}
            outlineColor={global.thirdColor}
            cursorColor={global.sandColor}
            activeOutlineColor={global.sandColor}
            mode="outlined"
            textColor={global.sandColor}
            // onFocus={clearMessage}
            secureTextEntry={true} // Hide text input
            autoComplete="off" // Disable autocomplete
            autoCorrect={false} // Disable autocorrect
            spellCheck={false} // Disable spell check
            textContentType="password"
          />
          <TextInput
            ref={confirmPasswordRef}
            value={confirmPassword}
            onChangeText={value => setconfirmPassword(value)}
            label={'Confirm Password'}
            style={styles.inputfield}
            outlineColor={global.thirdColor}
            cursorColor={global.sandColor}
            activeOutlineColor={global.sandColor}
            mode="outlined"
            textColor={global.sandColor}
            // onFocus={clearMessage}
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
            // onFocus={clearMessage}
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
            // onFocus={clearMessage}
          />

          <Button
            mode="contained"
            rippleColor="#c9c9c9"
            buttonColor={global.thirdColor}
            // onPress={() => registerUserBtn()}
            // loading={buttonLoading}
            style={{
              marginTop: '20%',
              height: height / 20,
              width: width - 30,
              justifyContent: 'center',
            }}>
            Log In
          </Button>
        </View> */}
        <View style={styles.Profileheader}>
          <View style={styles.profileHerderChild1}>
            <TouchableOpacity style={styles.profilepicCont}>
              <MaterialIcons
                name="add-a-photo"
                size={35}
                color={global.bgColor}
              />
            </TouchableOpacity>
            <Text style={styles.profileTxt}>Ashish Kanojia</Text>
          </View>
          <View style={styles.profileHerderChild2}></View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileTxt: {fontSize:width/18},
  profilepicCont: {
    height: height / 10,
    width: width / 4.5,
    borderRadius: 50,
    backgroundColor: global.thirdColor,
    borderWidth: 1,
    borderColor: global.sandColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHerderChild1: {
    flex: 4,
    backgroundColor: 'yelow',
    width: '100%',
    overflow: 'hidden',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '3%',
    flexDirection: 'row',
  },
  profileHerderChild2: {
    flex: 2,
    backgroundColor: global.sandColor,
    width: '100%',
    overflow: 'hidden',
  },
  Profileheader: {
    height: height / 5,
    width: width - 20,
    borderRadius: 10,
    backgroundColor: global.bgColor,
    alignSelf: 'center',
    marginTop: '2%',
    overflow: 'hidden',
    elevation: 20,
  },
  ParentContainer: {
    flex: 1, // Ensure the parent container takes up the full screen
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: 'rgba(26,54,54,0.1)',
  },
  headerCont: {
    backgroundColor: 'rgba(26,54,54,0.5)',
    height: 70, // Set a specific height for the header
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  newArival: {
    color: '#fff',
    fontSize: 30,
    marginHorizontal: 10,
    fontFamily: font,
    // backgroundColor: global.thirdColor,
    borderRadius: 6,
    paddingHorizontal: 10,
    // elevation: 10,
  },
  inputfield: {
    // marginBottom: '10%',
    width: width - 50,
    backgroundColor: global.bgColor,
    marginVertical: height / 70,
  },
});

export default Profile;

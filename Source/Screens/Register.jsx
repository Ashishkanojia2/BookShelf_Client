import {
  Alert,
  Dimensions,
  ImageBackground,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {Button, TextInput} from 'react-native-paper';
import {ScrollView} from 'native-base';
import {useRegisterUserMutation} from '../RTKquery/Slices/ApiSclices';
import {useDispatch} from 'react-redux';
import {loginUserData} from '../Redux/Reducer/AuthReducer';
import styles from './CssStyles/Register';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Login = ({navigation}) => {
  const [Registeruser] = useRegisterUserMutation();
  const dispatch = useDispatch();

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
  const [buttonLoading, setbuttonLoading] = useState(false);
  const [Message, setMessage] = useState('');

  const signupBtn = () => {
    navigation.navigate('login');
  };

  const registerUserBtn = async () => {
    try {
      emailRef.current?.blur();
      nameRef.current?.blur();
      phoneRef.current?.blur();
      addressRef.current?.blur();
      emailRef.current?.blur();
      passwordRef.current?.blur();
      confirmPasswordRef.current?.blur();
      Keyboard.dismiss();
      if (
        emailId == '' ||
        Password == '' ||
        confirmPassword == '' ||
        name == '' ||
        phone == '' ||
        address == ''
      ) {
        return setMessage('please fill all the fields');
      }
      setbuttonLoading(true);
      const user = {email: emailId, password: Password, name, phone, address};
      const result = await Registeruser(user).unwrap();
      console.log('result', result);

      if (result?.success) {
        dispatch(loginUserData(result.user));
        Alert.alert(
          'Successful',
          'Your Account is Registered in Our BooksOfAccount',
          [
            {
              text: 'verify Your Account',
              onPress: () => navigation.navigate('verifyAccount'),
            },
          ],
          {cancelable: false},
        );

        setname('');
        setemailId('');
        setPassword('');
        setconfirmPassword('');
        setaddress('');
        setphone('');
        setbuttonLoading(false);
      } else {
        setMessage('Login failed. Please try again.');
        setbuttonLoading(false);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  const clearMessage = () => {
    setMessage('');
  };

  return (
    <ScrollView>
      <View style={styles.ParentContainer}>
        <ImageBackground
          source={require('../Assets/images/bg2.png')}
          style={styles.topimg}></ImageBackground>
        <View style={styles.headingCont}>
          <Text style={styles.headtxt}>#Create Your Book Account</Text>
          <Text style={styles.Errortxt}>{Message}</Text>
        </View>
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
            onFocus={clearMessage}
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
            loading={buttonLoading}
            style={{
              marginTop: '20%',
              height: height / 20,
              width: width - 30,
              justifyContent: 'center',
            }}>
            Log In
          </Button>
          <View style={{flexDirection: 'row', marginTop: '10%'}}>
            <Text style={styles.btmText}>Already have an Account </Text>
            <TouchableOpacity
              onPress={signupBtn}
              styles={{
                backgroundColor: 'pink',
              }}>
              <Text
                style={[
                  styles.btmText,
                  {
                    color: global.sandColor,
                    textDecorationLine: 'underline',
                  },
                ]}>
                LogIn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

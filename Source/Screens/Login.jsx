import {
  Dimensions,
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {Button, TextInput} from 'react-native-paper';
import {ScrollView} from 'native-base';
import {useLoginUserMutation} from '../RTKquery/Slices/ApiSclices';
import {useDispatch} from 'react-redux';
import {loginUserData} from '../Redux/Reducer/AuthReducer';
const font = 'Calistoga-Regular';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();

  const [emailId, setemailId] = useState('');
  const [Password, setPassword] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [buttonLoading, setbuttonLoading] = useState(false);
  const [Message, setMessage] = useState('');
  const [showPassword, setshowPassword] = useState(true);
  const [passIcon, setpassIcon] = useState('eye');

  const signupBtn = () => {
    navigation.navigate('register');
  };
  const registerUserBtn = async () => {
    try {
      if (emailId == '' || Password == '') {
        return setMessage('please fill all the fields');
      }
      setbuttonLoading(true);
      const user = {email: emailId, password: Password};
      const result = await loginUser(user).unwrap();

      emailRef.current?.blur();
      passwordRef.current?.blur();
      Keyboard.dismiss();

      if (result.success) {
        dispatch(loginUserData(result.user));
        navigation.navigate('home');
        setbuttonLoading(false);
        setPassword('');
      } else {
        setMessage('Login failed. Please try again.');
        setbuttonLoading(false);
      }
    } catch (error) {
      setbuttonLoading(false);
      console.log('from login.jsx line 62 : ', error);

      // setMessage(error.data.message);
    } finally {
      setbuttonLoading(false); // Ensure the loading state is reset
    }
  };
  const clearMessage = () => {
    setMessage('');
  };
  const skipBtn = () => {
    navigation.navigate('home');
  };
  return (
    <ScrollView>
      <View style={styles.ParentContainer}>
        <ImageBackground
          source={require('../Assets/images/bg01.png')}
          style={styles.topimg}>
          <TouchableOpacity style={styles.SkipCont} onPress={skipBtn}>
            <Text style={styles.Skiptxt}>Skip</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.headingCont}>
          <Text style={styles.headtxt}>#Books Ki Basti – Sabse Sasti!</Text>
          <Text style={styles.headtxt2}>Login Your Account</Text>
          <Text style={styles.Errortxt}>{Message}</Text>
        </View>
        <View style={styles.inputboxcont}>
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
            secureTextEntry={showPassword}
            autoComplete="off"
            autoCorrect={false}
            spellCheck={false}
            textContentType="password"
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye-off' : 'eye'}
                onPress={() => setshowPassword(!showPassword)}
                color={global.sandColor}
              />
            }
          />

          <Button
            mode="contained"
            rippleColor="#c9c9c9"
            buttonColor={global.thirdColor}
            onPress={() => registerUserBtn()}
            loading={buttonLoading}
            style={{
              height: height / 20,
              width: width - 30,
              justifyContent: 'center',
            }}>
            Log In
          </Button>
          <View style={{flexDirection: 'row', marginTop: '3%'}}>
            <Text style={styles.btmText}>Don't have an Account </Text>
            <TouchableOpacity
              onPress={signupBtn}
              styles={
                {
                  // backgroundColor: 'pink',
                }
              }>
              <Text
                style={[
                  styles.btmText,
                  {
                    color: global.sandColor,
                    textDecorationLine: 'underline',
                  },
                ]}>
                SignIn
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('verifyAccount')}
            styles={
              {
                // backgroundColor: 'pink',
              }
            }>
            <Text
              style={[
                styles.btmText,
                {
                  color: global.sandColor,
                  textDecorationLine: 'underline',
                  marginTop: '2%',
                },
              ]}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
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
  topimg: {width, height: height / 2},
  headingCont: {
    alignSelf: 'center',
  },
  headtxt: {
    fontSize: 25,
    fontFamily: font,
  },
  Errortxt: {
    fontSize: 15,
    color: 'red',
    alignSelf: 'center',
  },
  SkipCont: {
    alignSelf: 'flex-end',
    backgroundColor: global.bgColor,
    height: '8%',
    width: '18%',
    borderRadius: 40,
    justifyContent: 'center',
    marginEnd: '2%',
    marginTop: '2%',
  },
  Skiptxt: {
    fontSize: 17,
    color: global.sandColor,
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
    alignSelf: 'center',
  },
  inputfield: {
    width: width - 50,
    backgroundColor: global.bgColor,
    marginVertical: height / 70,
  },
  inputboxcont: {
    alignItems: 'center',
  },
});

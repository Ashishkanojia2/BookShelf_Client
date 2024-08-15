import {
  Dimensions,
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {Button, TextInput} from 'react-native-paper';
import {ScrollView} from 'native-base';
import {
  useGetUserQuery,
  useLoginUserMutation,
} from '../RTKquery/Slices/ApiSclices';

const font = 'Calistoga-Regular';
const font1 = 'Pacifico-Regular';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Login = ({navigation}) => {
  const [loginUser, {isLoading, isError, isSuccess, error}] =
    useLoginUserMutation();
  const a = useGetUserQuery();

  const [emailId, setemailId] = useState('');
  const [Password, setPassword] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [buttonLoading, setbuttonLoading] = useState(false);
  const [Message, setMessage] = useState('');

  //
  //
  //
  //
  //

  const registerUserBtn = async () => {
    try {
      if (emailId == '' || Password == '') {
        return setMessage('please fill all the fields');
      }
      setbuttonLoading(true);
      const user = {email: emailId, password: Password};
      const result = await loginUser(user).unwrap();
      // console.log('Login successful:', result);
      // console.log('AA', a);
      emailRef.current?.blur();
      passwordRef.current?.blur();
      Keyboard.dismiss();

      if (result.success) {
        navigation.navigate('home'); // Navigate to the Home screen
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
          source={require('../Assets/images/bg01.png')}
          style={styles.topimg}
        />
        <View style={styles.headingCont}>
          <Text style={styles.headtxt}>#Books Ki Basti – Sabse Sasti!</Text>
          <Text style={styles.headtxt}>{Message}</Text>
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
            secureTextEntry={true} // Hide text input
            autoComplete="off" // Disable autocomplete
            autoCorrect={false} // Disable autocorrect
            spellCheck={false} // Disable spell check
            textContentType="password"
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
    fontSize: 20,
    fontFamily: font1,
  },
  inputfield: {
    // marginBottom: '10%',
    width: width - 50,
    backgroundColor: global.bgColor,
    marginVertical: height / 70,
  },
  inputboxcont: {
    alignItems: 'center',
    marginTop: height / 13,
  },
});

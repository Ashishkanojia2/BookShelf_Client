import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
import {Button, TextInput} from 'react-native-paper';
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from '../RTKquery/Slices/ApiSclices';

const {height, width} = Dimensions.get('screen');

const ForgotPassword = ({navigation}) => {
  const [newPassword, setnewPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [verifyEmail, setverifyEmail] = useState(false);
  const [Emailid, setEmailid] = useState('');
  const [otp, setotp] = useState('');
  const [isloadingIndicator, setisloadingIndicator] = useState(false);

  const [emailVerifition, {isSuccess, isError}] = useForgotPasswordMutation();
  const [
    resetPassword,
    {isSuccess: PasswordChangeSucess, isError: PasswordChangeError},
  ] = useResetPasswordMutation();

  //   const navigation = useNavigation()

  const isValid = useMemo(() => {
    return newPassword.length > 0 && confirmPassword.length > 0;
  }, [newPassword, confirmPassword]);

  const CheckValid = useCallback(async () => {
    try {
      setisloadingIndicator(true);
      const result = await resetPassword({otp, newpassword: newPassword});
      console.log("reset password result ", result );

      setisloadingIndicator(false);
    } catch (error) {
      console.log('eror while reset password');
    }
  }, [isValid]);

  const isValidEmail = useMemo(() => {
    return Emailid.length > 10;
  }, [Emailid]);

  const checkEmail = async () => {
    setisloadingIndicator(true);
    try {
      const result = await emailVerifition({email: Emailid}).unwrap();
      console.log("forgot password result ", result );
      
      setisloadingIndicator(false);
    } catch (error) {
      console.log('Error while send the code', error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setverifyEmail(true);
    } else if (isError) {
      setverifyEmail(false);
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (PasswordChangeSucess) {
      navigation.navigate('login');
    } else if (PasswordChangeError) {
      
      setverifyEmail(false);
    }
  }, [PasswordChangeSucess, PasswordChangeError, navigation]);

  return (
    <View style={styles.mainCont}>
      <Text style={styles.headerTxt}>Forgot Password</Text>

      {!verifyEmail ? (
        <View style={styles.parentCont}>
          <Text
            style={{
              color: global.thirdColor,
              fontSize: 20,
              fontFamily: globalfonts.font,
            }}>
            Enter your valid Email-Id
          </Text>
          <TextInput
            value={Emailid}
            onChangeText={value => setEmailid(value)}
            label={'Email-Id'}
            style={styles.inputfield}
            outlineColor={global.thirdColor}
            cursorColor={global.sandColor}
            activeOutlineColor={global.sandColor}
            mode="outlined"
            textColor={global.sandColor}
            keyboardType="email-address"
          />

          <Button
            mode="contained"
            rippleColor="#c9c9c9"
            buttonColor={
              !isValidEmail ? global.disablebtn_Gray : global.thirdColor
            }
            onPress={() => checkEmail()}
            disabled={isValidEmail ? false : true}
            loading={isloadingIndicator}
            style={{
              marginTop: '20%',
              height: height / 20,
              width: width - 80,
              justifyContent: 'center',
            }}>
            Verify Email
          </Button>
        </View>
      ) : (
        <View style={styles.parentCont}>
          <TextInput
            value={otp}
            onChangeText={value => setotp(value)}
            label={'Enter OTP'}
            style={styles.inputfield}
            outlineColor={global.thirdColor}
            cursorColor={global.sandColor}
            activeOutlineColor={global.sandColor}
            mode="outlined"
            textColor={global.sandColor}
          />
          <TextInput
            value={newPassword}
            onChangeText={value => setnewPassword(value)}
            label={'New Password'}
            style={styles.inputfield}
            outlineColor={global.thirdColor}
            cursorColor={global.sandColor}
            activeOutlineColor={global.sandColor}
            mode="outlined"
            textColor={global.sandColor}
          />
          <TextInput
            value={confirmPassword}
            onChangeText={value => setconfirmPassword(value)}
            label={'Confirm New Password'}
            style={styles.inputfield}
            outlineColor={global.thirdColor}
            cursorColor={global.sandColor}
            activeOutlineColor={global.sandColor}
            mode="outlined"
            textColor={global.sandColor}
          />
          <Button
            mode="contained"
            rippleColor="#c9c9c9"
            buttonColor={!isValid ? global.disablebtn_Gray : global.thirdColor}
            onPress={() => CheckValid()}
            loading={isloadingIndicator}
            style={{
              marginTop: '20%',
              height: height / 20,
              width: width - 80,
              justifyContent: 'center',
            }}>
            Yes I Confirm
          </Button>
        </View>
      )}
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  parentCont: {alignItems: 'center', marginTop: '20%'},
  inputfield: {
    width: width - 50,
    backgroundColor: global.bgColor,
    marginVertical: height / 70,
  },
  headerTxt: {
    color: global.thirdColor,
    fontSize: width / 5,
    fontFamily: globalfonts.font,
    marginLeft: '2%',
  },

  mainCont: {flex: 1, backgroundColor: global.bgColor},
});

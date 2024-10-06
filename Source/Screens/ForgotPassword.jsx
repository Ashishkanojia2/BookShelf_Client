import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
import {Button, TextInput} from 'react-native-paper';

const {height, width} = Dimensions.get('screen');

const ForgotPassword = () => {
  const [state, setstate] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const isValid = useMemo(() => {
    return newPassword.length > 0 && confirmPassword.length > 0;
  }, [newPassword, confirmPassword]);

  const CheckValid = useCallback(() => {
    isValid ? console.warn('ok procceed..') : console.warn('field is empty');
  }, [isValid]);

  useEffect(() => {
    // Trigger side-effect based on form validation
    if (!isValid) {
      console.warn('field is empty');
    } else {
      console.warn('Form is valid');
    }
  }, [isValid]);

  return (
    <View style={styles.mainCont}>
      <Text style={styles.headerTxt}>Forgot Password</Text>

      <View style={styles.parentCont}>
        <TextInput
          //   ref={genderRef}
          value={newPassword}
          onChangeText={value => setnewPassword(value)}
          label={'New Password'}
          color
          style={styles.inputfield}
          outlineColor={global.thirdColor}
          cursorColor={global.sandColor}
          activeOutlineColor={global.sandColor}
          mode="outlined"
          textColor={global.sandColor}
          //   onFocus={clearMessage}
        />
        <TextInput
          //   ref={genderRef}
          value={confirmPassword}
          onChangeText={value => setconfirmPassword(value)}
          label={'Confirm New Password'}
          color
          style={styles.inputfield}
          outlineColor={global.thirdColor}
          cursorColor={global.sandColor}
          activeOutlineColor={global.sandColor}
          mode="outlined"
          textColor={global.sandColor}
          //   onFocus={clearMessage}
        />

        <Button
          mode="contained"
          rippleColor="#c9c9c9"
          buttonColor={
             !isValid ? global.disablebtn_Gray : global.thirdColor
            // global.sandColor
          }
          onPress={() => CheckValid()}
        //   disabled={true}
          //   loading={buttonLoading}

          style={{
            marginTop: '20%',
            height: height / 20,
            width: width - 80,
            justifyContent: 'center',
          }}>
          Yes I Confirm
        </Button>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  parentCont: {alignItems: 'center', marginTop: '20%'},
  inputfield: {
    // marginBottom: '10%',
    width: width - 50,
    backgroundColor: global.bgColor,
    marginVertical: height / 70,
  },
  headerTxt: {
    color: global.thirdColor,
    fontSize: width / 5,
    fontFamily: globalfonts.font,
    marginLeft:"2%"
  },

  mainCont: {flex: 1, backgroundColor: global.bgColor},
});

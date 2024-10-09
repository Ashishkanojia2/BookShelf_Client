import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
import {Button} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useVerifyUserMutation} from '../RTKquery/Slices/ApiSclices';
const {width, height} = Dimensions.get('screen');

const VerifyAccount = ({navigation}) => {
  const iTxt1 = useRef();
  const iTxt2 = useRef();
  const iTxt3 = useRef();
  const iTxt4 = useRef();
  const iTxt5 = useRef();
  const iTxt6 = useRef();

  const [field_1, setfield_1] = useState('');
  const [field_2, setfield_2] = useState('');
  const [field_3, setfield_3] = useState('');
  const [field_4, setfield_4] = useState('');
  const [field_5, setfield_5] = useState('');
  const [field_6, setfield_6] = useState('');
  const [loadingIndicator, setloadingIndicator] = useState(false);
  const combinedValue = `${field_1}${field_2}${field_3}${field_4}${field_5}${field_6}`;

  const [verifyUser, {isSuccess, isError}] = useVerifyUserMutation();

  const isValid = useMemo(() => {
    return (
      field_1.length > 0 &&
      field_2.length > 0 &&
      field_3.length > 0 &&
      field_4.length > 0 &&
      field_5.length > 0 &&
      field_6.length > 0
    );
  }, [field_1, field_2, field_3, field_4, field_5, field_6]);

  const CheckValid = useCallback(async () => {
    if (isValid) {
      setloadingIndicator(true);

      try {
        const result = await verifyUser({otp: combinedValue}).unwrap();
        console.log('Verification result:', result);
      } catch (error) {
        console.error('Error while verifying user:', error);
      } finally {
        setloadingIndicator(false);
      }
    } else {
      setloadingIndicator(false);
    }
  }, [isValid, combinedValue, verifyUser]);
  useEffect(() => {
    if (isSuccess) {
      console.log('Email verification success!');
      navigation.navigate('home');
    } else if (isError) {
      console.log('Email verification failed.');
      setloadingIndicator(false);
    }
  }, [isSuccess, isError]);

  return (
    <View style={styles.mainCont}>
      <Text style={styles.headerTxt}>Verify Account</Text>

      <View style={styles.parentCont}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            ref={iTxt1}
            style={[
              styles.inputfield,
              {
                borderColor:
                  field_1.length > 0
                    ? global.sandColor
                    : global.disablebtn_Gray,
              },
            ]}
            maxLength={1}
            textAlign="center"
            keyboardType="number-pad"
            value={field_1}
            onChangeText={txt => {
              setfield_1(txt);
              if (txt.length > 0) {
                iTxt2.current.focus();
              }
            }}
          />
          <TextInput
            ref={iTxt2}
            style={[
              styles.inputfield,
              {
                borderColor:
                  field_2.length > 0
                    ? global.sandColor
                    : global.disablebtn_Gray,
              },
            ]}
            maxLength={1}
            textAlign="center"
            keyboardType="number-pad"
            value={field_2}
            onChangeText={txt => {
              setfield_2(txt);
              if (txt.length > 0) {
                iTxt3.current.focus();
              } else if (txt.length < 1) {
                iTxt1.current.focus();
              }
            }}
          />
          <TextInput
            ref={iTxt3}
            style={[
              styles.inputfield,
              {
                borderColor:
                  field_3.length > 0
                    ? global.sandColor
                    : global.disablebtn_Gray,
              },
            ]}
            maxLength={1}
            textAlign="center"
            keyboardType="number-pad"
            value={field_3}
            onChangeText={txt => {
              setfield_3(txt);
              if (txt.length > 0) {
                iTxt4.current.focus();
              } else if (txt.length < 1) {
                iTxt2.current.focus();
              }
            }}
          />
          <TextInput
            ref={iTxt4}
            style={[
              styles.inputfield,
              {
                borderColor:
                  field_4.length > 0
                    ? global.sandColor
                    : global.disablebtn_Gray,
              },
            ]}
            maxLength={1}
            textAlign="center"
            keyboardType="number-pad"
            value={field_4}
            onChangeText={txt => {
              setfield_4(txt);
              if (txt.length > 0) {
                iTxt5.current.focus();
              } else if (txt.length < 1) {
                iTxt3.current.focus();
              }
            }}
          />
          <TextInput
            ref={iTxt5}
            style={[
              styles.inputfield,
              {
                borderColor:
                  field_5.length > 0
                    ? global.sandColor
                    : global.disablebtn_Gray,
              },
            ]}
            maxLength={1}
            keyboardType="number-pad"
            textAlign="center"
            value={field_5}
            onChangeText={txt => {
              setfield_5(txt);
              if (txt.length > 0) {
                iTxt6.current.focus();
              } else if (txt.length < 1) {
                iTxt4.current.focus();
              }
            }}
          />
          <TextInput
            ref={iTxt6}
            style={[
              styles.inputfield,
              {
                borderColor:
                  field_6.length > 0
                    ? global.sandColor
                    : global.disablebtn_Gray,
              },
            ]}
            maxLength={1}
            textAlign="center"
            keyboardType="number-pad"
            value={field_6}
            onChangeText={txt => {
              setfield_6(txt);
              if (txt.length < 1) {
                iTxt5.current.focus();
              }
            }}
          />
        </View>
        <TouchableOpacity>
          <Text style={{color: '#fff'}}> Resend OTP</Text>
        </TouchableOpacity>
        <Button
          mode="contained"
          rippleColor={global.thirdColor}
          buttonColor={!isValid ? global.disablebtn_Gray : global.thirdColor}
          onPress={() => CheckValid()}
          loading={isValid && loadingIndicator ? true : false}
          style={{
            marginTop: '20%',
            height: height / 20,
            width: width - 80,
            justifyContent: 'center',
          }}>
          Verify
        </Button>
      </View>
    </View>
  );
};

export default VerifyAccount;

const styles = StyleSheet.create({
  parentCont: {alignItems: 'center', marginTop: '20%'},
  inputfield: {
    width: '10%',
    backgroundColor: global.bgColor,
    marginVertical: height / 70,
    borderColor: global.sandColor,
    borderWidth: 1,
    borderRadius: 5,
    color: global.sandColor,
    fontSize: 20,
    marginHorizontal: '2%',
    fontWeight: '700',
  },
  headerTxt: {
    color: global.thirdColor,
    fontSize: width / 5,
    fontFamily: globalfonts.font,
    marginLeft: '2%',
  },

  mainCont: {flex: 1, backgroundColor: global.bgColor},
});

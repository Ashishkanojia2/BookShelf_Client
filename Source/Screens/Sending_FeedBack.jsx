import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {Button, Text, TextInput} from 'react-native-paper';
import {ScrollView} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
const font = 'Calistoga-Regular';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Sending_Feedback = ({navigation, route}) => {
  const [Describe, setDescribe] = useState('');

  const [Topic, setTopic] = useState('');
  //
  const bookRef = useRef(null);
  const DescRef = useRef(null);

  const [buttonLoading, setbuttonLoading] = useState(false);
  const [Message, setMessage] = useState('');

  const clearMessage = () => {
    setMessage('');
  };
  const sendFeedBackBtn = () => {
    console.log('send feedback');
    setTopic('');
    setDescribe('');
  };

  return (
    <View style={{backgroundColor: global.bgColor, flex: 1}}>
      <ImageBackground
        source={require('../Assets/images/bg2.png')}
        style={styles.topimg}></ImageBackground>
      <TouchableOpacity
        style={{position: 'absolute', left: 20, top: 20}}
        onPress={() => navigation.navigate('profile')}>
        <Ionicons name="arrow-back-sharp" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.headingCont}>
        <Text style={styles.headingTxt}>FeedBack From</Text>
      </View>

      <ScrollView>
        <View style={styles.ParentContainer}>
          <View style={styles.inputboxcont}>
            <TextInput
              ref={bookRef}
              value={Topic}
              onChangeText={value => setTopic(value)}
              label={'Topic'}
              style={styles.inputfield}
              outlineColor={global.thirdColor}
              cursorColor={global.sandColor}
              activeOutlineColor={global.sandColor}
              mode="outlined"
              textColor={global.sandColor}
              onFocus={clearMessage}
              autoCorrect={true}
            />
            <TextInput
              ref={DescRef}
              value={Describe}
              numberOfLines={7}
              multiline={true}
              onChangeText={value => setDescribe(value)}
              label={'Describe'}
              style={styles.inputfield}
              outlineColor={global.thirdColor}
              cursorColor={global.sandColor}
              activeOutlineColor={global.sandColor}
              mode="outlined"
              textColor={global.sandColor}
              autoCorrect={true}
              onFocus={clearMessage}
            />

            {buttonLoading ? (
              <Button
                mode="contained"
                rippleColor="#c9c9c9"
                buttonColor={global.thirdColor}
                onPress={() => registerBookBtn()}
                loading={buttonLoading}
                style={{
                  marginTop: '5%',
                  height: height / 20,
                  width: width - 90,
                  justifyContent: 'center',
                }}></Button>
            ) : (
              <Button
                mode="contained"
                rippleColor="#c9c9c9"
                buttonColor={global.thirdColor}
                onPress={() => sendFeedBackBtn()}
                style={{
                  marginTop: '5%',
                  height: height / 20,
                  width: width - 90,
                  justifyContent: 'center',
                }}>
                Send FeedBack
              </Button>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Sending_Feedback;

const styles = StyleSheet.create({
  // noteText: {color: global.sandColor, fontSize: 15},
  // noteDetailsText: {color: global.thirdColor, fontSize: 13},
  // noteCont: {marginHorizontal: '5%'},
  headingTxt: {
    fontSize: width / 13,
    color: global.sandColor,
    fontFamily: globalfonts.font4,
  },
  // booksimageCont: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   // backgroundColor: 'green',
  // },
  // profilepicCont: {
  //   height: height / 4,
  //   width: width / 2.5,
  //   borderRadius: 10,
  //   backgroundColor: global.thirdColor,
  //   borderWidth: 1,
  //   borderColor: global.sandColor,
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   alignSelf: 'center',
  //   margin: '2%',
  //   elevation: 30,
  //   overflow: 'hidden',
  //   // alignSelf:"center"
  // },
  ParentContainer: {
    paddingBottom: '5%',
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
  // topContText: {
  //   fontSize: 20,
  //   color: global.sandColor,
  // },
  topimg: {width, height: height, position: 'absolute'},
  headingCont: {
    alignSelf: 'center',
    marginTop: '4%',
    marginBottom: '5%',
  },
  headtxt: {
    fontSize: 25,
    fontFamily: globalfonts.font,
  },
  // Errortxt: {
  //   fontSize: 15,
  //   color: 'red',
  //   alignSelf: 'center',
  //   marginTop: '5%',
  // },
  // SkipCont: {
  //   alignSelf: 'flex-end',
  //   backgroundColor: global.sandColor,
  //   height: '4%',
  //   width: '15%',
  //   borderRadius: 40,
  //   justifyContent: 'center',
  //   marginEnd: '2%',
  //   marginTop: '2%',
  // },
  // Skiptxt: {
  //   fontSize: 17,
  //   color: global.bgColor,
  //   alignSelf: 'center',
  // },
  // headtxt2: {
  //   fontSize: 35,
  //   fontFamily: font,
  //   alignSelf: 'center',
  //   marginTop: '3%',
  // },
  // btmText: {
  //   fontSize: 13,
  //   alignSelf: 'center',
  // },
  inputfield: {
    width: width - 50,
    backgroundColor: global.bgColor,
    marginVertical: height / 70,
  },
  inputboxcont: {
    alignItems: 'center',
  },
});

import {
  Alert,
  Dimensions,
  ImageBackground,
  Keyboard,
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
import {useSendFeedbackMutation} from '../RTKquery/Slices/Feedback';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Sending_Feedback = ({navigation, route}) => {
  const [Describe, setDescribe] = useState('');
  const [Topic, setTopic] = useState('');
  const [sendfeedBack, {isLoading, isSuccess, isError, error}] =
    useSendFeedbackMutation();
  const topicRef = useRef(null);
  const DescRef = useRef(null);

  const [buttonLoading, setbuttonLoading] = useState(false);
  const [Message, setMessage] = useState('');

  const clearMessage = () => {
    setMessage('');
  };
  const sendFeedBackBtn = async () => {
    try {
      if (Topic == '' || Describe == '') {
        return setMessage('Please fill Both the Feilds.');
      }
      setbuttonLoading(true);
      const feedbackData = {topic: Topic, describe: Describe};
      const data = await sendfeedBack(feedbackData);
      setTopic('');
      setDescribe('');
      topicRef.current?.blur();
      DescRef.current?.blur();
      Keyboard.dismiss();
      if (!isSuccess) {
        setTopic('');
        setDescribe('');
        setbuttonLoading(false);
        Alert.alert(
          'Successfull Send',
          'ThankYou for your feedBack. Your FeedBack is Important For Us.',
          [
            {
              text: 'Go to profile page',
              onPress: () => navigation.navigate('profile'),
            },
          ],
          {cancelable: false},
        );
      } else {
        setMessage('Failed. Please try again.');
        setbuttonLoading(false);
      }
    } catch (error) {
      setbuttonLoading(false);
    }
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
              ref={topicRef}
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
            <Text style={{color: 'red'}}>{Message}</Text>

            {buttonLoading ? (
              <Button
                mode="contained"
                rippleColor="#c9c9c9"
                buttonColor={global.thirdColor}
                onPress={() => sendFeedBackBtn()}
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
  headingTxt: {
    fontSize: width / 13,
    color: global.sandColor,
    fontFamily: globalfonts.font4,
  },

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

  inputfield: {
    width: width - 50,
    backgroundColor: global.bgColor,
    marginVertical: height / 70,
  },
  inputboxcont: {
    alignItems: 'center',
  },
});

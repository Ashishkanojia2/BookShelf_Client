import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {global} from '../GlobalComponent/GlobalStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {globalfonts} from '../../../assets/FrontExport/Frontexport';
import LottieView from 'lottie-react-native';
const {height, width} = Dimensions.get('screen');

const WaitingScren = () => {
  const [seeMsg, setseeMsg] = useState(true);
  return (
    <View style={styles.mainComp}>
      <View>
        <ImageBackground
          source={require('../../Assets/images/watingBg.png')}
          style={styles.topimg}></ImageBackground>
        <LottieView
          source={require('../Lotte_animation/book_animation.json')} // Path to your animation JSON file
          autoPlay // Automatically plays the animation
          loop // Loops the animation
          style={styles.animation}
        />
        <Text style={{alignSelf: 'center'}}>Loading...</Text>
      </View>
      {seeMsg ? (
        <View style={styles.msgCont}>
          <TouchableOpacity
            onPress={() => setseeMsg(false)}
            style={styles.closeBtn}>
            <AntDesign
              name="close"
              size={25}
              color="gray"
              // color={global.disablebtn_Gray}
              style={styles.closeBtn}
            />
          </TouchableOpacity>
          <Text style={styles.txtCont}>
            Hello, This message is for you from the development team.
          </Text>
          <Text style={styles.txtCont}>
          We appreciate your patience while the application loads to ensure smooth performance
          </Text>
          <Text style={styles.txtCont}>Thank you.</Text>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => setseeMsg(true)}
          style={{
            position: 'absolute',
            bottom: 20,
            alignItems: 'center',
            width,
          }}>
          <View>
            <Text
              style={{
                textDecorationLine: 'underline',
              }}>
              Show Message
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default WaitingScren;

const styles = StyleSheet.create({
  animation: {
    width: 150, // Adjust size as needed
    height: 150,
    alignSelf: 'center',
  },
  txtCont: {
    fontFamily: globalfonts.font8,
    lineHeight: 20,
    color: 'gray',
    marginBottom: '1%',
  },
  closeBtn: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
  msgCont: {
    borderRadius: 5,
    borderColor: global.sandColor,
    borderWidth: 0.3,
    width: width - 50,
    height: height / 7,
    position: 'absolute',
    bottom: '2%',
    alignSelf: 'center',
    paddingVertical: '8%',
    justifyContent: 'center',
    paddingHorizontal: '7%',
  },
  topimg: {
    height: height / 2,
    width: width / 1,
  },
  mainComp: {
    backgroundColor: global.bgColor,
    flex: 1,
  },
});

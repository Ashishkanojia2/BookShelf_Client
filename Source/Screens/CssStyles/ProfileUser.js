import {StyleSheet, Dimensions} from 'react-native';
import {global} from '../../Components/GlobalComponent/GlobalStyle';
import {globalfonts} from '../../../assets/FrontExport/Frontexport';
const {height, width} = Dimensions.get('window');
const font = 'Calistoga-Regular';


export default styles = StyleSheet.create({
  uploadPhtText: {
    color: global.sandColor,
    marginTop: '2%',
    textDecorationLine: 'underline',
  },
  profilepicCont: {
    height: height / 10,
    width: width / 4.5,
    borderRadius: 50,
    backgroundColor: global.thirdColor,
    borderWidth: 1,
    borderColor: global.sandColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  ParentContainer: {
    backgroundColor: global.bgColor,
    height: height - 20,
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
  topimg: {width, height: height, position: 'absolute'},
  headingCont: {
    alignSelf: 'center',
    marginTop: '20%',
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
    backgroundColor: global.sandColor,
    height: '4%',
    width: '15%',
    borderRadius: 40,
    justifyContent: 'center',
    marginEnd: '2%',
    marginTop: '2%',
  },
  Skiptxt: {
    fontSize: 17,
    color: global.bgColor,
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

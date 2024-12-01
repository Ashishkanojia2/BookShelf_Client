import {Dimensions, StyleSheet} from 'react-native';
import {global} from '../../Components/GlobalComponent/GlobalStyle';
import {globalfonts} from '../../../assets/FrontExport/Frontexport';
const {height, width} = Dimensions.get('window');
const font = 'Calistoga-Regular';

export default styles = StyleSheet.create({
  profileIconCont: {
    height: height / 27,
    width: width / 12,
    borderRadius: 20,
    backgroundColor: global.bgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileOptionText: {
    color: global.bgColor,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: '5%',
  },
  profileOptionView: {
    height: '100%',
    width: width - 100,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '2%',
  },
  profileOption: {
    height: height / 18,
    width: width - 20,
    borderRadius: 10,
    backgroundColor: global.lightgray,
    marginVertical: '3%',

    alignSelf: 'center',
    marginTop: '2%',
    overflow: 'hidden',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileTxt: {fontSize: width / 18, marginHorizontal: '5%', fontWeight: '600'},
  profilePhotoText: {
    fontSize: width / 6,
    marginHorizontal: '5%',
    fontFamily: globalfonts.font6,
  },
  profileDateTxt: {
    fontSize: width / 30,
    marginHorizontal: '5%',
    fontWeight: '600',
    position: 'absolute',
    right: -5,
    top: 5,
    color: '#777675',
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
    overflow: 'hidden',
    // resizeMode:"contain"
  },
  profileHerderChild1: {
    flex: 4,
    backgroundColor: 'yelow',
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    paddingHorizontal: '3%',
    flexDirection: 'row',
  },
  profileHerderChild2: {
    flex: 2,
    backgroundColor: global.sandColor,
    width: '100%',
    overflow: 'hidden',
  },
  Profileheader: {
    height: height / 5,
    width: width - 20,
    borderRadius: 10,
    backgroundColor: global.bgColor,
    alignSelf: 'center',
    marginTop: '2%',
    overflow: 'hidden',
    elevation: 20,
  },
  ParentContainer: {
    flex: 1,
    backgroundColor: 'rgba(26,54,54,0.1)',
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerCont: {
    backgroundColor: 'rgba(26,54,54,0.5)',
    height: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  newArival: {
    color: '#fff',
    fontSize: 30,
    marginHorizontal: 10,
    fontFamily: font,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  inputfield: {
    width: width - 50,
    backgroundColor: global.bgColor,
    marginVertical: height / 70,
  },
});

import {Dimensions, StyleSheet} from 'react-native';
import {globalfonts} from '../../../assets/FrontExport/Frontexport';
import {global} from '../../Components/GlobalComponent/GlobalStyle';

const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  booksName: {
    fontSize: 20,
    color: '#000',
    marginHorizontal: '2%',
    fontFamily: globalfonts.font5,
  },
  addBtn: {
    height: height / 25,
    width: width / 6,
    position: 'absolute',
    backgroundColor: global.sandColor,
    right: 10,
    bottom: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  editionCont: {flexDirection: 'row', marginTop: '1%', flexDirection: 'row'},
  booksHead: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
    marginHorizontal: '2%',
    fontFamily: globalfonts.font5,
  },
  bookstxt: {
    fontSize: 15,
    color: '#000',
    marginHorizontal: '2%',
    fontFamily: globalfonts.font5,
  },
  productInfo: {
    flex: 4,
    height: '100%',
    paddingVertical: '1%',
  },
  productPhoto: {
    flex: 2,
    // backgroundColor: global.bgColor,
    height: '95%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  allBookContainer: {
    height: height / 5.5,
    width: width - 20,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    marginVertical: '1.5%',
    flexDirection: 'row',
    elevation: 1,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  ParentContainer: {
    flex: 1,
    backgroundColor: global.thirdColor,
  },
  scrollContent: {
    flexGrow: 1,
  },
  headingTxt: {
    fontSize: width / 13,
    color: global.sandColor,
    fontFamily: globalfonts.font4,
  },
  headingCont: {
    alignSelf: 'center',
    marginTop: '4%',
    marginBottom: '5%',
    // backgroundColor: 'green',
  },
});

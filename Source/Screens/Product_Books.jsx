import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {ScrollView} from 'native-base';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {Badge} from 'react-native-paper';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useGetBookDataQuery} from '../RTKquery/Slices/BookApiSclice';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');
// const width = Dimensions.get('window').width;

const Product_Books = ({navigation}) => {
  //USE_STATE
  const [searchText, setsearchText] = useState('');
  const [ShowingBookData, setShowingBookData] = useState(false);

  //API CALLING
  // const {state_BookData} = useGetBookDataQuery();
  const [state_BookData, setstate_BookData] = useState('');
  const [favBook, setfavBook] = useState(false);
  const [isExpand, setisExpand] = useState(false);

  const {
    data: Book_data,
    isLoading: bookload,
    error,
    isSuccess,
  } = useGetBookDataQuery();
  useEffect(() => {
    if (Book_data && isSuccess) {
      setstate_BookData(Book_data);
    }
  }, [Book_data, isSuccess]);
  const userdata = useSelector(state => state.user);

  const name = userdata?.data?.name || '';
  const CapLetter = name.charAt(0).toUpperCase();
  const profileBtn = () => {
    navigation.navigate('home');
  };
  return (
    <View style={styles.ParentContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(140,154,154,1)"
        translucent={false}
      />
      <View style={styles.headerCont}>
        <TouchableOpacity onPress={profileBtn}>
          <Ionicons name="arrow-back-sharp" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.searchfield}>
          <Fontisto name="search" size={20} color="#000" />

          <TextInput
            style={{color: global.bgColor}}
            onChangeText={text => setsearchText(text)}
            placeholder="Search Books"
            placeholderTextColor={global.bgColor}
          />
        </View>
        <TouchableOpacity>
          <FontAwesome
            name="book"
            size={30}
            color={global.bgColor}
            style={{right: 5}}
          />
        </TouchableOpacity>

        <Badge size={20} style={styles.cartBadge}>
          3
        </Badge>
      </View>

      <ScrollView>
        <View style={styles.imageCont}></View>

        <View>
          <View style={styles.whitebox}>
            <Text style={[styles.prdName, {color: '#000'}]}>
              The War History : Indus and Muguls 58bc
            </Text>
            {/* <ImageBackground
            source={require('../Assets/images/watingBg.png')}
            style={styles.topimg}></ImageBackground> */}
            <Text style={[styles.prdDesc]} numberOfLines={isExpand ? null : 4}>
              Here Product name show book descriptionHere Product name show book
              descriptionHere Product name show book descriptionHere Product
              name show book descriptionHere Product name show book
              descriptionHere Product name show book descriptionHere Product
              name show book descriptionHere Product name show book
              descriptionHere Product name show book description
            </Text>
            {isExpand ? (
              <TouchableOpacity onPress={() => setisExpand(!isExpand)}>
                <Text style={styles.readMore}>Hide.</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setisExpand(!isExpand)}>
                <Text style={styles.readMore}>Read More...</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={[styles.whitebox, {flexDirection: 'row'}]}>
            <Text style={styles.prdDiscount}>-26%</Text>
            <Text
              style={[
                styles.prdName,
                {
                  fontSize: width / 15,
                  textDecorationLine: 'line-through',
                  marginHorizontal: '3%',
                },
              ]}>
              9000
            </Text>
            <Text style={[styles.prdName, {fontSize: width / 9}]}>
              1200 rs.
            </Text>
          </View>

          <View style={styles.whitebox}>
            <Text
              style={[
                styles.prdName,
                {fontSize: width / 23, color: '#565656', marginBottom: '3%'},
              ]}>
              Highlights
            </Text>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Book Name :</Text>
              <Text style={[styles.b_detail_child]} numberOfLines={2}>
                The War History : Indus and Muguls 58bcThe War History : Indus
                and Muguls 58bcThe War History :
              </Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Author :</Text>
              <Text style={[styles.b_detail_child]}>Dr.VeerBhagat Singh</Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Edition :</Text>
              <Text style={[styles.b_detail_child]}>12 th</Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Categories :</Text>
              <Text style={[styles.b_detail_child]}>History</Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>MRP :</Text>
              <Text style={[styles.b_detail_child]}>12000 Rs.</Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Best Price :</Text>
              <Text style={[styles.b_detail_child]}>1000</Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Best Price :</Text>
              <Text style={[styles.b_detail_child]}>1000</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  whitebox: {
    maxHeight: height / 3,
    width,
    backgroundColor: '#fff',
    // elevation: 10,
    alignSelf: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    marginVertical: '0.2%',
  },
  b_detail_child: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '1%',
    fontSize: width / 30,
    color: global.thirdColor,
  },
  b_detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '1%',
    // paddingHorizontal: '1%',
  },
  readMore: {
    color: '#b4b5b5',
    fontSize: width / 30,
    textDecorationLine: 'underline',
  },
  // topimg: {height: 10, width: 10},
  // textCont: {padding: '2%'},
  prdName: {
    fontFamily: globalfonts.font6,
    color: 'gray',
    fontSize: width / 22,
    marginTop: '5%',
  },
  prdDesc: {
    fontFamily: globalfonts.font6,
    color: '#565656',
    fontSize: width / 27,
    marginTop: '1%',
    fontFamily: globalfonts.font7,
  },
  prdDiscount: {
    fontFamily: globalfonts.font6,
    fontSize: width / 9,
    color: '#fe7e82',
    marginTop: '1%',
    alignSelf: 'center',
  },
  imageCont: {
    backgroundColor: '#000',
    height: height / 2,
  },
  ParentContainer: {
    flex: 1,
    backgroundColor: global.lightgray,
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
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  content: {
    flex: 1,
    color: '#000',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  topcontent: {
    color: '#000',
    flexDirection: 'row',
  },

  searchfield: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 100,
    backgroundColor: '#fff',
    height: height / 24,
    borderRadius: 10,
    color: global.bgColor,
    fontSize: 15,
    paddingHorizontal: 5,
    elevation: 20,
    right: 3,
  },
  bookContainer: {
    height: height / 3.5,
    width: width / 2.2,
    borderRadius: 10,
    borderWidth: 1,
    margin: '2%',
    overflow: 'hidden',
  },
  newBookContainer: {
    height: height / 4,
    width: width - 20,
    backgroundColor: global.sandColor,
    borderRadius: 10,
    borderColor: global.bgColor,
    borderWidth: 1,
    marginHorizontal: '1%',
    elevation: 10,
    marginVertical: 20,
  },
  topimg: {height: height / 5, width: '100%'},
  BookInfo: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: '5%',
  },
  BookDetails: {
    color: '#000',
    fontSize: 16,
    fontWeight: '300',
    paddingHorizontal: '5%',
  },
  BookDiscount: {
    color: '#000',
    fontSize: 19,
    fontWeight: '600',
    paddingHorizontal: '5%',
  },
  newArival: {
    color: '#fff',
    fontSize: 30,
    marginHorizontal: 10,
    fontFamily: globalfonts.font,
    backgroundColor: global.thirdColor,
    borderRadius: 6,
    paddingHorizontal: 10,
    elevation: 10,
  },
  // userProfile: {
  //   height: height / 23,
  //   width: width / 10.5,
  //   backgroundColor: global.bgColor,
  //   borderRadius: 50,
  //   borderColor: global.sandColor,
  //   borderWidth: 1,
  //   overflow: 'hidden',
  // },
  cartBadge: {
    color: '#fff',
    position: 'absolute',
    right: 5,
    top: 10,
    backgroundColor: global.sandColor,
    color: global.bgColor,
  },
});

export default Product_Books;

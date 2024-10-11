import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'native-base';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {ActivityIndicator, Badge} from 'react-native-paper';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useGetBookDataQuery} from '../RTKquery/Slices/BookApiSclice';
import {useDispatch, useSelector} from 'react-redux';
import {setCartData} from '../Redux/Reducer/CartReducer';
import {currentuserSelectore} from '../Redux/Reducer/AuthReducer';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  // State
  const [searchText, setsearchText] = useState('');
  const [ShowingBookData, setShowingBookData] = useState(false);
  const [state_BookData, setstate_BookData] = useState('');
  const [favBook, setfavBook] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  // Redux state
  const userdata = useSelector(currentuserSelectore);
  // const userdata = useSelector(state => state.user);
  const cartdata = useSelector(state => state.cart.cartData);

  const {
    data: Book_data,
    isLoading: bookload,
    isSuccess,
  } = useGetBookDataQuery();

  useEffect(() => {
    if (userdata) {
      setLoading(false);
    }
  }, [userdata]);

  useEffect(() => {
    if (Book_data && isSuccess) {
      setstate_BookData(Book_data);
    }
  }, [Book_data, isSuccess]);

  if (loading || !userdata) {
    return <Text style={{color: 'red'}}>Loading data...</Text>;
  }

  // console.log('*******************from home screen********************');

  const name = userdata?.name || '';
  const CapLetter = name.charAt(0).toUpperCase();

  const bookContainer = bookname => {
    navigation.navigate('books', {
      message: `${bookname}`,
    });
  };

  const gotoCart = () => {
    navigation.navigate('cart');
  };

  const profileBtn = () => {
    navigation.navigate('profile');
  };

  const addTocart = itemId => {
    if (cartdata.includes(itemId)) {
      Alert.alert('Book not added in cart', 'Book already added in cart', [
        {text: 'OK'},
      ]);
    } else {
      dispatch(setCartData(itemId));
    }
  };

  return (
    <View style={styles.ParentContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(140,154,154,1)"
        translucent={false}
      />
      <View style={styles.headerCont}>
        <TouchableOpacity onPress={profileBtn} style={styles.userProfile}>
          {userdata && userdata?.data?.avatar && userdata.data.avatar.url ? (
            <Image
              source={{uri: userdata.data.avatar.url}}
              style={{height: '100%', width: '100%'}}
            />
          ) : (
            <Text style={styles.profilePhotoText}>{CapLetter}</Text>
          )}
        </TouchableOpacity>
        <View style={styles.searchfield}>
          <Fontisto name="search" size={20} color="#000" />

          <TextInput
            // value={searchText}
            style={{color: global.bgColor}}
            onChangeText={text => setsearchText(text)}
            placeholder="Search Books"
            placeholderTextColor={global.bgColor}
          />
        </View>
        <TouchableOpacity onPress={gotoCart}>
          <FontAwesome
            name="book"
            size={30}
            color={global.bgColor}
            style={{right: 5}}
          />
        </TouchableOpacity>

        <Badge size={20} style={styles.cartBadge}>
          {cartdata.length}
        </Badge>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topcontent}>
          <ScrollView horizontal style={{flex: 1, marginBottom: '2%'}}>
            <View style={styles.newBookContainer}></View>
            <View style={styles.newBookContainer}></View>
          </ScrollView>
        </View>
        <Text style={styles.newArival}>New Added</Text>
        <View style={styles.bookChooseCatCont}>
          <TouchableOpacity
            style={{
              marginVertical: '1.5%',
              borderColor: global.bgColor,
              backgroundColor: ShowingBookData
                ? global.lightgray
                : global.sandColor,
              marginLeft: '2%',
              borderWidth: 1,
              paddingHorizontal: '2%',
              paddingVertical: '1%',
              borderRadius: 20,
              elevation: 50,
              shadowColor: '#000',
            }}
            onPress={() => setShowingBookData(false)}>
            <Text
              style={{
                fontSize: ShowingBookData ? 18 : 16,
                color: global.bgColor,
                fontFamily: globalfonts.font4,
              }}>
              All Books
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginVertical: '1.5%',
              backgroundColor: ShowingBookData
                ? global.sandColor
                : global.lightgray,
              marginLeft: '2%',
              borderWidth: 1,
              paddingHorizontal: '2%',
              paddingVertical: '1%',
              borderRadius: 20,
            }}
            onPress={() => setShowingBookData(true)}>
            <Text
              style={{
                fontSize: ShowingBookData ? 16 : 18,
                color: global.bgColor,
                fontFamily: globalfonts.font4,
              }}>
              Categories
            </Text>
          </TouchableOpacity>
        </View>
        {ShowingBookData ? (
          <View style={styles.content}>
            {/* 1*/}
            <TouchableOpacity
              style={styles.bookContainer}
              onPress={() => bookContainer('programming')}>
              <ImageBackground
                source={require('../Assets/images/programming.jpg')}
                style={styles.topimg}></ImageBackground>
              <View style={{}}>
                <Text style={styles.BookInfo}>PROGRAMMING</Text>
                <Text style={styles.BookDetails}>Second-Hand books</Text>
                <Text style={styles.BookDiscount}>50%- 60% Off</Text>
              </View>
            </TouchableOpacity>
            {/* 2*/}
            <TouchableOpacity
              style={styles.bookContainer}
              onPress={() => bookContainer('history')}>
              <ImageBackground
                source={require('../Assets/images/history.jpg')}
                style={styles.topimg}></ImageBackground>
              <View style={{}}>
                <Text style={styles.BookInfo}>HISTORY</Text>
                <Text style={styles.BookDetails}>War, Rules, Guns, Armor </Text>
                <Text style={styles.BookDiscount}>50%- 60% Off</Text>
              </View>
            </TouchableOpacity>
            {/* 3*/}
            <TouchableOpacity
              style={styles.bookContainer}
              onPress={() => bookContainer('coding')}>
              <ImageBackground
                source={require('../Assets/images/coding.jpg')}
                style={styles.topimg}></ImageBackground>
              <View style={{}}>
                <Text style={styles.BookInfo}>CODING</Text>
                <Text style={styles.BookDetails}>Best Pactises</Text>
                <Text style={styles.BookDiscount}>50%- 60% Off</Text>
              </View>
            </TouchableOpacity>
            {/* 4*/}
            <TouchableOpacity
              style={styles.bookContainer}
              onPress={() => bookContainer('chemistry')}>
              <ImageBackground
                source={require('../Assets/images/chemistry.png')}
                style={styles.topimg}></ImageBackground>
              <View style={{}}>
                <Text style={styles.BookInfo}>CHEMISTRY</Text>
                <Text style={styles.BookDetails}>
                  Bonds, Chemical, Lab-Test
                </Text>
                <Text style={styles.BookDiscount}>50%- 60% Off</Text>
              </View>
            </TouchableOpacity>
            {/* 5*/}
            <TouchableOpacity
              style={styles.bookContainer}
              onPress={() => bookContainer('english')}>
              <ImageBackground
                source={require('../Assets/images/english.jpg')}
                style={styles.topimg}></ImageBackground>
              <View style={{}}>
                <Text style={styles.BookInfo}>ENGLISH</Text>
                <Text style={styles.BookDetails}>Basics , verb, tenses</Text>
                <Text style={styles.BookDiscount}>50%- 60% Off</Text>
              </View>
            </TouchableOpacity>
            {/* 6*/}
            <TouchableOpacity
              style={styles.bookContainer}
              onPress={() => bookContainer('geology')}>
              <ImageBackground
                source={require('../Assets/images/geo.png')}
                style={styles.topimg}></ImageBackground>
              <View style={{}}>
                <Text style={styles.BookInfo}>GEOGRAPHY</Text>
                <Text style={styles.BookDetails}>Map, route, travel</Text>
                <Text style={styles.BookDiscount}>50%- 60% Off</Text>
              </View>
            </TouchableOpacity>
            {/* 7*/}
            <TouchableOpacity
              style={styles.bookContainer}
              onPress={() => bookContainer('cooking')}>
              <ImageBackground
                source={require('../Assets/images/cooking.jpg')}
                style={styles.topimg}></ImageBackground>
              <View style={{}}>
                <Text style={styles.BookInfo}>COOKING</Text>
                <Text style={styles.BookDetails}>Taste, Food, Recipes </Text>
                <Text style={styles.BookDiscount}>50%- 60% Off</Text>
              </View>
            </TouchableOpacity>
            {/* 8*/}
            <TouchableOpacity
              style={styles.bookContainer}
              onPress={() => bookContainer('politics')}>
              <ImageBackground
                source={require('../Assets/images/politics.png')}
                style={styles.topimg}></ImageBackground>
              <View style={{}}>
                <Text style={styles.BookInfo}>POLITICES</Text>
                <Text style={styles.BookDetails}>
                  Democracy, Leader, Rights
                </Text>
                <Text style={styles.BookDiscount}>50%- 60% Off</Text>
              </View>
            </TouchableOpacity>
            {/* 9*/}
            <TouchableOpacity
              style={styles.bookContainer}
              onPress={() => bookContainer('english')}>
              <ImageBackground
                source={require('../Assets/images/story_books.jpg')}
                style={styles.topimg}></ImageBackground>
              <View style={{}}>
                <Text style={styles.BookInfo}>STORY BOOK</Text>
                <Text style={styles.BookDetails}>
                  Motivational, funny, Moral
                </Text>
                <Text style={styles.BookDiscount}>50%- 60% Off</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : bookload ? (
          <ActivityIndicator size={'small'} />
        ) : state_BookData && state_BookData.allbooks.length > 0 ? (
          state_BookData.allbooks.map(item => (
            <TouchableOpacity
              style={styles.allBookContainer}
              key={item._id}
              onPress={() =>
                navigation.navigate('productbooks', {key: item._id})
              }>
              <View style={styles.productPhoto}>
                <View
                  style={{
                    height: '90%',
                    width: '90%',
                    justifyContent: 'center',
                  }}>
                  {item &&
                  item.images &&
                  item.images.length > 0 &&
                  item.images[0].url ? (
                    <Image
                      source={{uri: item.images[0].url}}
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'center',
                        borderRadius: 12,
                      }}
                    />
                  ) : (
                    <Text style={{color: '#000', alignSelf: 'center'}}>
                      No image available
                    </Text>
                  )}
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setfavBook(!favBook)}
                style={{position: 'absolute', right: 10, top: 7, zIndex: 1}}>
                {favBook ? (
                  <AntDesign name="heart" size={25} color="red" />
                ) : (
                  <FontAwesome name="heart-o" size={25} color="#000" />
                )}
              </TouchableOpacity>

              <View style={styles.productInfo}>
                <Text
                  style={[styles.booksName]}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.b_name}
                </Text>
                <Text
                  style={[styles.bookstxt]}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.b_desc}
                </Text>
                <View style={styles.editionCont}>
                  <Text style={styles.booksHead}>Edition</Text>
                  <Text style={styles.bookstxt}>{item.b_edition}th.</Text>
                </View>
                <View style={styles.editionCont}>
                  <Text style={styles.booksHead}>Author</Text>
                  <Text style={styles.bookstxt}>{item.b_author}</Text>
                </View>
                <View style={styles.editionCont}>
                  <Text style={styles.booksHead}>S.Price</Text>
                  <Text style={styles.bookstxt}>{item.b_sellingprice} rs.</Text>
                </View>
                <View style={styles.editionCont}>
                  <Text style={styles.booksHead}>MRP</Text>
                  <Text
                    style={[
                      styles.bookstxt,
                      {textDecorationLine: 'line-through', color: '#c9c9c9'},
                    ]}>
                    {item.b_MRP} rs.
                  </Text>
                </View>
                <View style={styles.addBtnCont}>
                  {cartdata.includes(item._id) ? (
                    <TouchableOpacity style={styles.removeBtn}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#000',
                          fontFamily: globalfonts.font5,
                        }}>
                        Added
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.addBtn}
                      onPress={() => addTocart(item._id)}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#000',
                          fontFamily: globalfonts.font5,
                        }}>
                        ADD
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text
            style={{
              color: global.sandColor,
              fontSize: 25,
              fontFamily: globalfonts.font,
              marginTop: '20%',
              textDecorationLine: 'underline',
              alignSelf: 'center',
            }}>
            No books available.
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  addBtnCont: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  profilePhotoText: {
    alignSelf: 'center',
    fontSize: width / 30,
    // justifyContent: 'center',
    // alignContent:"center"
  },
  booksName: {
    fontSize: 20,
    color: '#000',
    marginHorizontal: '2%',
    fontFamily: globalfonts.font5,
  },
  removeBtn: {
    height: height / 25,
    width: width / 6,
    // position: 'absolute',
    backgroundColor: global.lightgray,
    // right: 10,
    // bottom: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  addBtn: {
    height: height / 25,
    width: width / 7,
    // position: 'absolute',
    backgroundColor: global.sandColor,
    // right: 10,
    // bottom: 1,
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
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
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
  inputfield: {
    width: width - 100,
    backgroundColor: '#fff',
    height: height / 24,
    borderRadius: 10,
    color: global.bgColor,
    fontSize: 15,
    paddingHorizontal: 20,
    elevation: 20,
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
  userProfile: {
    height: height / 23,
    width: width / 10.5,
    backgroundColor: global.bgColor,
    borderRadius: 50,
    borderColor: global.sandColor,
    borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  cartBadge: {
    color: '#fff',
    position: 'absolute',
    right: 5,
    top: 10,
    backgroundColor: global.sandColor,
    color: global.bgColor,
  },
  bookChooseCatCont: {flexDirection: 'row'},
  catBtnCont: {
    marginVertical: '1.5%',
    borderColor: global.bgColor,
    marginLeft: '2%',
    borderWidth: 1,
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    borderRadius: 20,
  },
  allbookcatBtnCont: {
    marginVertical: '1.5%',
    borderColor: global.bgColor,
    marginLeft: '2%',
    borderWidth: 1,
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    borderRadius: 20,
  },
  all: {fontSize: 18, color: global.bgColor, fontFamily: globalfonts.font4},
});

export default Home;

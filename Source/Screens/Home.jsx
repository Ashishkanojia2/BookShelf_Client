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
import styles from './HomeScreen/HomeStyle';
import {RefreshControl} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  // State
  const [searchText, setsearchText] = useState('');
  const [ShowingBookData, setShowingBookData] = useState(false);
  const [state_BookData, setstate_BookData] = useState('');
  const [favBook, setfavBook] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  // const [refreshing, setrefreshing] = useState(false);

  const [refreshing, setRefreshing] = useState(false); // Refreshing state
  const {
    data: Book_data,
    isLoading: bookload,
    isSuccess,
    refetch,
  } = useGetBookDataQuery();
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await refetch();
      setstate_BookData(Book_data);
      setRefreshing(false);
      console.log('Data refreshed successfully');
    } catch (error) {
      Alert.alert(
        'Refresh Failed',
        "We couldn't update the data. Please check your internet connection and try again.",
        [
          {text: 'Retry', onPress: () => onRefresh()}, // Retry button
          {text: 'Cancel', style: 'cancel'}, // Cancel button
        ],
      );
      console.log(
        'This error came from home.jsx file while refreshing the data ',
        error,
      );
    } finally {
      setRefreshing(false); // Hide the spinner
    }
  };

  // Redux state
  const userdata = useSelector(currentuserSelectore);
  // const userdata = useSelector(state => state.user);
  const cartdata = useSelector(state => state.cart.cartData);

  // const {
  //   data: Book_data,
  //   isLoading: bookload,
  //   isSuccess,
  // } = useGetBookDataQuery();

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

  // if (loading || !userdata) {
  //   return <Text style={{color: 'red'}}>Loading data...</Text>;
  // }

  console.log('*******************from home screen********************');
  // console.log('userdata', userdata);

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
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
            //
            //
            /** HERE ALLBOOKS DATA SHOWING FROM HERE */
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
                  <Text style={styles.booksHead}>Edition :</Text>
                  <Text style={styles.bookstxt}>{item.b_edition}th.</Text>
                </View>
                <View style={styles.editionCont}>
                  <Text style={styles.booksHead}>Author :</Text>
                  <Text style={styles.bookstxt}>{item.b_author}</Text>
                </View>
                <View style={styles.editionCont}>
                  <Text style={styles.booksHead}>S.Price :</Text>
                  <Text style={styles.bookstxt}>{item.b_sellingprice} rs.</Text>
                </View>
                <View style={styles.editionCont}>
                  <Text style={styles.booksHead}>MRP :</Text>
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

export default Home;

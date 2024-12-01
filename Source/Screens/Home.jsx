import {
  Text,
  View,
  StatusBar,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
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
import styles from './HomeScreen/HomeStyle';
import {RefreshControl} from 'react-native-gesture-handler';
import {favBook} from '../Redux/Reducer/BookReducer';

console.log('*******************from home screen********************');

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  // State management
  const [state_BookData, setState_BookData] = useState(null);
  const [FavBook, setFavBook] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [ShowingBookData, setShowingBookData] = useState(false);
  // const [loading, setLoading] = useState(true); // Loading state

  // Redux selectors
  const userdata = useSelector(state => state.user.data);
  const cartdata = useSelector(state => state.cart.cartData);
  const likedBooks = useSelector(state => state.book.bookdata);

  const {
    data: Book_data,
    isLoading: bookload,
    isSuccess,
    refetch,
  } = useGetBookDataQuery();

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await refetch();
      console.log('Data refreshed successfully');
    } catch (error) {
      Alert.alert(
        'Refresh Failed',
        "We couldn't update the data. Please check your internet connection and try again.",
      );
    } finally {
      setRefreshing(false);
    }
  }, [refetch]);
  const addTocart = useCallback(
    itemId => {
      if (cartdata.includes(itemId)) {
        Alert.alert('Book not added in cart', 'Book already added in cart');
      } else {
        dispatch(setCartData(itemId));
      }
    },
    [cartdata, dispatch],
  );
  const hitToLike = useCallback(
    id => {
      setFavBook(prevFav => !prevFav);
      dispatch(favBook(id));
    },
    [dispatch],
  );
  console.log('Liked Books:', likedBooks);

  useEffect(() => {
    if (Book_data && isSuccess) {
      setState_BookData(Book_data);
    }
  }, [Book_data, isSuccess]);

  if (bookload) {
    return <Text>Loading data...homesScreen</Text>;
  }
  const name = userdata?.name || '';
  const CapLetter = name.charAt(0).toUpperCase();

  const bookContainer = bookname => {
    navigation.navigate('books', {
      message: `${bookname}`,
    });
  };

  const gotoCart = () => navigation.navigate('cart');
  const profileBtn = () => navigation.navigate('profile');

  return (
    <View style={styles.ParentContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(140,154,154,1)"
        translucent={false}
      />
      <View style={styles.headerCont}>
        <TouchableOpacity onPress={profileBtn} style={styles.userProfile}>
          {userdata && userdata?.avatar && userdata.avatar.url ? (
            <Image
              source={{uri: userdata.avatar.url}}
              style={{height: '100%', width: '100%'}}
            />
          ) : (
            <Text style={styles.profilePhotoText}>{CapLetter}</Text>
          )}
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
                <View style={styles.imgContainer}>
                  {item &&
                  item.images &&
                  item.images.length > 0 &&
                  item.images[0].url ? (
                    <Image
                      source={{uri: item.images[0].url}}
                      style={styles.productImage}
                    />
                  ) : (
                    <Text style={{color: '#000', alignSelf: 'center'}}>
                      No image available
                    </Text>
                  )}
                </View>
              </View>
              <TouchableOpacity
                onPress={() => hitToLike(item._id)}
                style={{position: 'absolute', right: 10, top: 7, zIndex: 1}}>
                {likedBooks.includes(item._id) ? (
                  <AntDesign name="heart" size={23} color="red" /> // Show red heart if liked
                ) : (
                  <FontAwesome name="heart-o" size={23} color="#000" /> // Show empty heart if not liked
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
                      <Text style={styles.addedBtn}>Added</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.addBtn}
                      onPress={() => addTocart(item._id)}>
                      <Text style={styles.addBtnTxt}>ADD</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noBookAvaliable}>No books available.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;

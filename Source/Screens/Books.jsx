import {
  Dimensions,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Badge} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useGetBookDataQuery} from '../RTKquery/Slices/BookApiSclice';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setCartData} from '../Redux/Reducer/CartReducer';
import styles from './CssStyles/Book';
const Books = route => {
  const [favBook, setfavBook] = useState(false);
  const cartdata = useSelector(state => state.cart.cartData);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // console.log('********************* books screen ***************************');

  const {
    data: Book_data,
    isLoading: bookload,
    isError: error,
    isSuccess,
  } = useGetBookDataQuery();

  const ChangeeScreen = () => {
    navigation.navigate('cart');
  };

  const addTocart = itemId => {
    {
      cartdata.includes(itemId)
        ? Alert.alert(
            'Book not added in cart  ',
            'Book already added in cart',
            [
              {
                text: 'ok',
              },
            ],
            {cancelable: false},
          )
        : dispatch(setCartData(itemId));
    }
  };

  const filteredBooks = Book_data?.allbooks?.filter(item => {
    const category = item.b_categorie?.trim().toLowerCase() || '';
    return category === route.route.params.message?.toLowerCase() ;
  });
  const GotoProductDetails = id => {
    // console.log(id);
    navigation.navigate('productbooks', {key: id, ScreenName: 'home', message:route});
  };

  return (
    <View style={styles.ParentContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(140,154,154,1)"
        translucent={false}
      />
      <View style={styles.headerCont}>
        <View style={styles.searchfield}>
          <Fontisto name="search" size={20} color="#000" />

          <TextInput
            onChangeText={text => setsearchText(text)}
            placeholder="Search Books"
            placeholderTextColor={global.bgColor}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            ChangeeScreen();
          }}>
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

      {bookload ? (
        <Text>Wait, Data is Loading..</Text>
      ) : error ? (
        <Text>Something went wrong..</Text>
      ) : filteredBooks.length > 0 ? (
        <FlatList
          data={filteredBooks}
          contentContainerStyle={styles.scrollContent}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.newBookContainer}
              onPress={() => GotoProductDetails(item._id)}>
              <View style={styles.productPhoto}>
                <View
                  style={{
                    height: '80%',
                    width: '80%',
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
                  <Text style={styles.bookstxt}>{item.b_edition}</Text>
                </View>
                <View style={styles.infoCont}>
                  <Text style={styles.booksHead}>Author :</Text>
                  <Text style={styles.bookstxt}>{item.b_author}</Text>
                </View>
                <View style={styles.infoCont}>
                  <Text style={styles.booksHead}>S.Price :</Text>
                  <Text style={styles.bookstxt}>{item.b_sellingprice}</Text>
                </View>
                <View style={styles.infoCont}>
                  <Text style={styles.booksHead}>MRP :</Text>
                  <Text
                    style={[
                      styles.bookstxt,
                      {
                        textDecorationLine: 'line-through',
                        color: '#c9c9c9',
                      },
                    ]}>
                    {item.b_MRP}
                  </Text>
                </View>
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
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noBooks}>No Books</Text>
      )}
    </View>
  );
};
export default Books;

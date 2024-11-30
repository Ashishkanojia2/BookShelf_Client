import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {
  useDeleteBookMutation,
  useGetBookDataQuery,
} from '../RTKquery/Slices/BookApiSclice';
import {FlatList} from 'native-base';
import styles from './CssStyles/SellingBooks';

const SellingBooks = ({navigation}) => {
  const {data: bookdata, isLoading, refetch} = useGetBookDataQuery();
  const userData = useSelector(state => state.user);

  const [Delete_Book] = useDeleteBookMutation();

  const DeleteBook = async id => {
    try {
      console.log('print', id);
      const isBookDeleted = await Delete_Book(id).unwrap();
      if (isBookDeleted.success) {
        await refetch();
      }
      console.log('isBookDeleted ', isBookDeleted);
    } catch (error) {
      console.log(
        'This Error is comes form SellingBook.jsx while delete the user books',
        error,
      );
    }
  };

  const GotoProductDetails = id => {
    console.log(id);
    navigation.navigate('productbooks', {key: id, ScreenName: 'sellingbooks'});
  };

  // console.log(
  //   '*******************from selling books screen ********************',
  // );
  const [gettingBookData, setgettingBookData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const filteredBooks = bookdata?.allbooks.filter(
        item => item.b_seller_id === userData.data._id,
      );

      setgettingBookData(filteredBooks);
    };
    fetchData();
  }, [userData, bookdata]);

  const renderBookImages = images => {
    if (images && images.length > 0) {
      return (
        <Image
          source={{uri: images[0].url}}
          style={{width: '100%', height: '100%', resizeMode: 'center'}}
        />
      );
    } else {
      return <Text>No image available</Text>;
    }
  };

  return (
    <View style={styles.ParentContainer}>
      <TouchableOpacity
        style={{position: 'absolute', left: 20, top: 20}}
        onPress={() => navigation.navigate('profile')}>
        <Ionicons name="arrow-back-sharp" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.headingCont}>
        <Text style={styles.headingTxt}>Selling Books</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'black'} />
      ) : gettingBookData ? (
        <FlatList
          data={gettingBookData}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.allBookContainer}
                onPress={() => GotoProductDetails(item._id)}>
                <View style={styles.productPhoto}>
                  <View style={styles.productPhoto}>
                    {renderBookImages(item.images)}
                  </View>
                </View>
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
                    <Text style={styles.bookstxt}>{item.b_edition} th.</Text>
                  </View>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>Author</Text>
                    <Text style={styles.bookstxt}>{item.b_author}</Text>
                  </View>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>S.Price</Text>
                    <Text style={styles.bookstxt}>
                      {item.b_sellingprice} rs.
                    </Text>
                  </View>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>MRP</Text>
                    <Text
                      style={[
                        styles.bookstxt,
                        {
                          textDecorationLine: 'line-through',
                          color: '#c9c9c9',
                        },
                      ]}>
                      {item.b_MRP} rs.
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.addBtn}
                    onPress={() => DeleteBook(item._id)}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#000',
                        fontFamily: globalfonts.font5,
                      }}>
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}></FlatList>
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
          No books Available
        </Text>
      )}
    </View>
  );
};

export default SellingBooks;

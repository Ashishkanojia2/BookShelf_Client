import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'native-base';
import styles from './CssStyles/Favorite';
import {useDispatch, useSelector} from 'react-redux';
import {useGetBookDataQuery} from '../RTKquery/Slices/BookApiSclice';
import {favBook} from '../Redux/Reducer/BookReducer';

const Favorite = ({navigation}) => {
  const dispatch = useDispatch();
  const Likedbookdata = useSelector(state => state.book.bookdata);
  const {data, isLoading} = useGetBookDataQuery();

  if (!data?.allbooks) {
    return <Text>No data available.</Text>;
  }

  const filteredBooks = data.allbooks.filter(book =>
    Likedbookdata.includes(book._id),
  );

  const RemoveFavBook = id => {
    console.log(id);
    dispatch(favBook(id));
  };
  return (
    <View style={styles.ParentContainer}>
      <TouchableOpacity
        style={{position: 'absolute', left: 20, top: 20}}
        onPress={() => navigation.navigate('profile')}>
        <Ionicons name="arrow-back-sharp" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.headingCont}>
        <Text style={styles.headingTxt}>Favorite Books</Text>
      </View>

      {isLoading ? (
        <Text>Loading Data</Text>
      ) : (
        <ScrollView>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((item, index) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('productbooks', {key: item._id})
                }
                style={styles.allBookContainer}
                key={item._id || index}>
                <View style={styles.productPhoto}>
                  <View style={styles.imgContainer}>
                    {item.images?.length > 0 ? (
                      <Image
                        source={{uri: item.images[0].url}} // Access the URL of the first image
                        style={styles.imgContainer} // Correct style
                      />
                    ) : (
                      <Text>No image available</Text>
                    )}
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
                    <Text style={styles.bookstxt}>{item.b_edition}th</Text>
                  </View>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>Author</Text>
                    <Text style={styles.bookstxt}>{item.b_author}</Text>
                  </View>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>S.Price</Text>
                    <Text style={styles.bookstxt}>
                      {item.b_sellingprice}rs.
                    </Text>
                  </View>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>MRP</Text>
                    <Text
                      style={[
                        styles.bookstxt,
                        {textDecorationLine: 'line-through', color: '#c9c9c9'},
                      ]}>
                      {item.b_MRP}rs.
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.addBtn}
                    onPress={id => RemoveFavBook(item._id)}>
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
            ))
          ) : (
            <Text>No favorite books available.</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default Favorite;

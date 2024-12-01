import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'native-base';
import styles from './CssStyles/Favorite';
import {useSelector} from 'react-redux';
import {useGetBookDataQuery} from '../RTKquery/Slices/BookApiSclice';
const Favorite = ({navigation}) => {
  const Likedbookdata = useSelector(state => state.book.bookdata);
  const {data, isLoading, isSuccess, refetch} = useGetBookDataQuery();
  console.log('1234', data);

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
          {data.allbooks
            .filter(item => Likedbookdata.includes(item))
            .map((item, index) => (
              <View style={styles.allBookContainer} key={item._id || index}>
                <View style={styles.productPhoto}>
                  <View
                    style={{
                      height: '80%',
                      width: '80%',
                      backgroundColor: global.thirdColor,
                    }}></View>
                </View>
                <View style={styles.productInfo}>
                  <Text
                    style={[styles.booksName]}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.allbooks.b_name}
                  </Text>
                  <Text
                    style={[styles.bookstxt]}
                    numberOfLines={3}
                    ellipsizeMode="tail">
                    {item.b_desc}
                  </Text>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>Edition</Text>
                    <Text style={styles.bookstxt}>item.b_edition th.</Text>
                  </View>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>Author</Text>
                    <Text style={styles.bookstxt}>item.b_author</Text>
                  </View>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>S.Price</Text>
                    <Text style={styles.bookstxt}>item.b_sellingprice rs.</Text>
                  </View>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>MRP</Text>
                    <Text
                      style={[
                        styles.bookstxt,
                        {textDecorationLine: 'line-through', color: '#c9c9c9'},
                      ]}>
                      item.b_MRP rs.
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.addBtn}>
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
              </View>
            ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Favorite;

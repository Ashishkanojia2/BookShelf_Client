import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {useGetBookDataQuery} from '../RTKquery/Slices/BookApiSclice';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SellingBooks = ({navigation}) => {
  const {data: bookdata} = useGetBookDataQuery();

  const userData = useSelector(state => state.user);
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
      {gettingBookData ? (
        gettingBookData.map(item => {
          return (
            <View style={styles.allBookContainer}>
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
                  numberOfLines={3}
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
          );
        })
      ) : (
        <Text>No books</Text>
      )}
    </View>
  );
};

export default SellingBooks;

const styles = StyleSheet.create({
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
    backgroundColor: global.bgColor,
    height: '100%',
    width: '100%',
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

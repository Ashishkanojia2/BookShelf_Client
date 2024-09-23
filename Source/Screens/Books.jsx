import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'native-base';
import { global } from '../Components/GlobalComponent/GlobalStyle';
import { globalfonts } from '../../assets/FrontExport/Frontexport';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Badge } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useGetBookDataQuery } from '../RTKquery/Slices/BookApiSclice';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const font = 'Calistoga-Regular';

const Books = route => {
  const [favBook, setfavBook] = useState(false);
  // console.log('message:', route.route.params.message);
  const {
    data: Book_data,
    isLoading: bookload,
    error,
    isSuccess,
  } = useGetBookDataQuery();
  // const data = useSelector(state => state.book);
  // console.log('@@@@@@@@@@@Book screen@@@@@@@', Book_data);
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
            // value={searchText}
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

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {Book_data && Book_data.allbooks && Book_data.allbooks.length > 0 ? (
          Book_data.allbooks
            .filter(item => {
              const category = item.b_categorie
                ? item.b_categorie.trim().toLowerCase()
                : '';
              return category === route.route.params.message;
            })
            .map(item => (
              
              <View style={styles.newBookContainer} key={item.id}>
                {/* console.log(item.id) */}
                <View style={styles.productPhoto}>
                  <View
                    style={{
                      height: '80%',
                      width: '80%',
                      // backgroundColor: global.thirdColor,
                    }}>
                    <Image
                      source={{uri: item.images[0].url}}
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'center',
                        borderRadius: 12,
                      }}
                    />
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
                  <TouchableOpacity style={styles.addBtn}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#000',
                        fontFamily: globalfonts.font5,
                      }}>
                      ADD
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
        ) : (
          <Text
            style={{
              color: global.sandColor,
              fontSize: 25,
              fontFamily: globalfonts.font,
              marginTop: '20%',
              textDecorationLine: 'underline',
            }}>
            No Books
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  ParentContainer: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
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
  cartBadge: {
    color: '#fff',
    position: 'absolute',
    right: 20,
    top: 10,
    backgroundColor: global.sandColor,
    color: global.bgColor,
  },
  content: {
    flex: 1,
    color: '#000',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  topcontent: {
    flex: 1,
    color: '#000',
    flexDirection: 'row',
    marginTop: '2%',
  },
  inputfield: {
    width: width - 100,
    backgroundColor: 'pink',
    height: height / 24,
    borderRadius: 10,
    color: global.bgColor,
    fontSize: 16,
    paddingHorizontal: 20,
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
    height: height / 5.5,
    width: width - 20,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    marginVertical: '1.5%',
    flexDirection: 'row',
    elevation: 1,
    overflow: 'hidden',
  },
  productPhoto: {
    flex: 2,
    // backgroundColor: global.sandColor,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    flex: 4,

    height: '100%',
    paddingVertical: '1%',
  },
  bookstxt: {
    fontSize: 15,
    color: '#000',
    marginHorizontal: '2%',
    fontFamily: globalfonts.font5,
  },
  booksName: {
    fontSize: 20,
    color: '#000',
    marginHorizontal: '2%',
    fontFamily: globalfonts.font5,
  },
  booksHead: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
    marginHorizontal: '2%',
    fontFamily: globalfonts.font5,
  },
  addBtn: {
    height: height / 25,
    width: width / 7,
    position: 'absolute',
    backgroundColor: global.sandColor,
    right: 10,
    bottom: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
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
    color: '#000',
    fontSize: 30,
    marginHorizontal: 10,
    fontFamily: font,
  },
  editionCont: {flexDirection: 'row', marginTop: '2%'},
  infoCont: {flexDirection: 'row'},
});

export default Books;

import {
  Dimensions, StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import { global } from '../Components/GlobalComponent/GlobalStyle';
import { globalfonts } from '../../assets/FrontExport/Frontexport';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'native-base';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Favorite = ({navigation}) => {
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
      <ScrollView>
        <View style={styles.allBookContainer}>
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
              item.b_name
            </Text>
            <Text
              style={[styles.bookstxt]}
              numberOfLines={3}
              ellipsizeMode="tail">
              item.b_desc
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
        <View style={styles.allBookContainer}>
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
              item.b_name
            </Text>
            <Text
              style={[styles.bookstxt]}
              numberOfLines={3}
              ellipsizeMode="tail">
              item.b_desc
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
        <View style={styles.allBookContainer}>
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
              item.b_name
            </Text>
            <Text
              style={[styles.bookstxt]}
              numberOfLines={3}
              ellipsizeMode="tail">
              item.b_desc
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
        <View style={styles.allBookContainer}>
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
              item.b_name
            </Text>
            <Text
              style={[styles.bookstxt]}
              numberOfLines={3}
              ellipsizeMode="tail">
              item.b_desc
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
        <View style={styles.allBookContainer}>
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
              item.b_name
            </Text>
            <Text
              style={[styles.bookstxt]}
              numberOfLines={3}
              ellipsizeMode="tail">
              item.b_desc
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
        <View style={styles.allBookContainer}>
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
              item.b_name
            </Text>
            <Text
              style={[styles.bookstxt]}
              numberOfLines={3}
              ellipsizeMode="tail">
              item.b_desc
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
        <View style={styles.allBookContainer}>
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
              item.b_name
            </Text>
            <Text
              style={[styles.bookstxt]}
              numberOfLines={3}
              ellipsizeMode="tail">
              item.b_desc
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
        <View style={styles.allBookContainer}>
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
              item.b_name
            </Text>
            <Text
              style={[styles.bookstxt]}
              numberOfLines={3}
              ellipsizeMode="tail">
              item.b_desc
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
        <View style={styles.allBookContainer}>
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
              item.b_name
            </Text>
            <Text
              style={[styles.bookstxt]}
              numberOfLines={3}
              ellipsizeMode="tail">
              item.b_desc
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
        <View style={styles.allBookContainer}>
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
              item.b_name
            </Text>
            <Text
              style={[styles.bookstxt]}
              numberOfLines={3}
              ellipsizeMode="tail">
              item.b_desc
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
        <View style={styles.allBookContainer}>
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
              item.b_name
            </Text>
            <Text
              style={[styles.bookstxt]}
              numberOfLines={3}
              ellipsizeMode="tail">
              item.b_desc
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
      </ScrollView>
    </View>
  );
};

export default Favorite;

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
    backgroundColor: 'pink',
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

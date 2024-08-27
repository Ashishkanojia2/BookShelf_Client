import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'native-base';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
// import {TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Badge} from 'react-native-paper';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useSelector} from 'react-redux';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const font = 'Calistoga-Regular';

const Books = route => {
  // const {message} = route.params;
  console.log('message:', route.route.params.message);

  const data = useSelector(state => state.book);
  console.log('@@@@@@@@@@@@@@@@@@', data);

  return (
    <View style={styles.ParentContainer}>
      <StatusBar
        barStyle="light-content" // Use 'dark-content' for dark text
        backgroundColor="rgba(140,154,154,1)" // Background color for Android
        translucent={false} // Set to true if you want a translucent status bar
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
        {data.bookdata.filter(item => {
          const category = item.b_categorie
            ? item.b_categorie.trim().toLowerCase()
            : '';
          return category === route.route.params.message;
        }).length === 0 ? (
          // Display "No Data" message if no items match the filter criteria
          <Text
            style={{
              color: global.sandColor,
              fontSize: 40,
              fontFamily: globalfonts.font,
              marginTop: '20%',
              textDecorationLine: 'underline',
            }}>
            No Data
          </Text>
        ) : (
          data.bookdata
            .filter(item => {
              const category = item.b_categorie
                ? item.b_categorie.trim().toLowerCase()
                : '';
              return category === route.route.params.message;
            })
            .map(item => {
              return (
                <View style={styles.newBookContainer}>
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
                      style={[styles.bookstxt]}
                      numberOfLines={3}
                      ellipsizeMode="tail">
                      {item.b_name}
                    </Text>
                    <View style={styles.editionCont}>
                      <Text style={styles.booksHead}>Edition</Text>
                      <Text style={styles.bookstxt}>10th</Text>
                    </View>
                    <View style={styles.infoCont}>
                      <Text style={styles.booksHead}>Author</Text>
                      <Text style={styles.bookstxt}>S Chand</Text>
                    </View>
                    <View style={styles.infoCont}>
                      <Text style={styles.booksHead}>S.Price</Text>
                      <Text style={styles.bookstxt}>400 rs.</Text>
                    </View>
                    <View style={styles.infoCont}>
                      <Text style={styles.booksHead}>A.Price</Text>
                      <Text
                        style={[
                          styles.bookstxt,
                          {
                            textDecorationLine: 'line-through',
                            color: '#c9c9c9',
                          },
                        ]}>
                        1000 rs.
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
              );
            })
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
    flex: 1, // Ensure the parent container takes up the full screen
  },
  scrollContent: {
    alignItems: 'center',
    // backgroundColor:"green",
    flexGrow: 1, // Allows the ScrollView to expand and fill the parent container
  },
  headerCont: {
    backgroundColor: 'rgba(26,54,54,0.5)',
    height: 70, // Set a specific height for the header
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
    // flexWrap: 'wrap',
    // backgroundColor: global.sandColor,
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
    // borderColor: '#c0c1c0',
    // borderWidth: 1,
    marginVertical: '1.5%',
    // marginHorizontal: '1%',
    flexDirection: 'row',
    elevation: 1,
    overflow: 'hidden',
  },
  productPhoto: {
    flex: 2,
    backgroundColor: global.sandColor,
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
    // backgroundColor: global.bgColor,
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

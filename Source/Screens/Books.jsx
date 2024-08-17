import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'native-base';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
// import {TextInput} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const font = 'Calistoga-Regular';
const font1 = 'Pacifico-Regular';

const Books = () => {
  return (
    <View style={styles.ParentContainer}>
      <StatusBar
        barStyle="light-content" // Use 'dark-content' for dark text
        backgroundColor="rgba(140,154,154,1)" // Background color for Android
        translucent={false} // Set to true if you want a translucent status bar
      />
      <View style={styles.headerCont}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            // ref={nameRef}
            // value={name}
            // onChangeText={value => setname(value)}
            placeholder="Search Books"
            placeholderTextColor={global.bgColor}
            style={styles.inputfield}
            textColor={global.sandColor}

            // onFocus={clearMessage}
          />
          <Feather name="shopping-cart" size={30} color="#900" />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* <View style={styles.topcontent}> */}
        {/* <ScrollView styles={{flexGrow:1}}> */}
        <View style={styles.newBookContainer}>
          <View style={styles.productPhoto}></View>
          <View style={styles.productInfo}>
            <Text
              style={[styles.bookstxt]}
              numberOfLines={3}
              ellipsizeMode="tail">
              Programming BooksProgramming BooksProgramming BooksProgramming
              BooksProgramming BooksProgramming BooksProgramming
              BooksProgramming BooksProgramming BooksProgramming
              BooksProgramming BooksProgramming Books
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.booksHead}>Edition</Text>
              <Text style={styles.bookstxt}>10th</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.booksHead}>Author</Text>
              <Text style={styles.bookstxt}>S Chand</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.booksHead}>S.Price</Text>
              <Text style={styles.bookstxt}>400 rs.</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.booksHead}>A.Price</Text>
              <Text
                style={[
                  styles.bookstxt,
                  {textDecorationLine: 'line-through', color: '#c9c9c9'},
                ]}>
                1000 rs.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.newBookContainer}></View>
        <View style={styles.newBookContainer}></View>
        <View style={styles.newBookContainer}></View>
        <View style={styles.newBookContainer}></View>
        <View style={styles.newBookContainer}></View>
        <View style={styles.newBookContainer}></View>
        {/* </ScrollView> */}
        {/* </View> */}
        <View style={styles.content}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  headerText: {
    color: 'white',
    fontSize: 20,
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
  },
  productPhoto: {flex: 2, backgroundColor: 'green', height: '100%'},
  productInfo: {
    flex: 4,
    backgroundColor: 'pink',
    height: '100%',
    paddingVertical: '1%',
  },
  bookstxt: {
    fontSize: 15,
    color: '#000',
    marginHorizontal: '2%',
    fontFamily: globalfonts.font3,
  },
  booksHead: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    marginHorizontal: '2%',
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
});

export default Books;

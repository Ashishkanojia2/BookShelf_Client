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
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'native-base';
import {global} from '../Components/GlobalComponent/GlobalStyle';
// import {TextInput} from 'react-native-paper';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Badge} from 'react-native-paper';
import {useExistsUserQuery} from '../RTKquery/Slices/ApiSclices';
// import {getUserData} from '../Redux/Reducer/AuthReducer';
import {useDispatch} from 'react-redux';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const font = 'Calistoga-Regular';
const font1 = 'Pacifico-Regular';

const Home = ({navigation}) => {
  const [searchText, setsearchText] = useState('');

  const bookContainer = () => {
    navigation.navigate('books');
  };

  const profileBtn = () => {
    navigation.navigate('profile');
  };
  return (
    <View style={styles.ParentContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(140,154,154,1)"
        translucent={false}
      />
      <View style={styles.headerCont}>
        <TouchableOpacity
          onPress={profileBtn}
          style={styles.userProfile}></TouchableOpacity>
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
        <View style={styles.topcontent}>
          <ScrollView horizontal>
            <View style={styles.newBookContainer}></View>
            <View style={styles.newBookContainer}></View>
          </ScrollView>
        </View>
        <Text style={styles.newArival}>New Added</Text>
        <View style={styles.content}>
          {/* 1*/}
          <TouchableOpacity
            style={styles.bookContainer}
            onPress={bookContainer}>
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
            onPress={bookContainer}>
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
            onPress={bookContainer}>
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
            onPress={bookContainer}>
            <ImageBackground
              source={require('../Assets/images/chemistry.png')}
              style={styles.topimg}></ImageBackground>
            <View style={{}}>
              <Text style={styles.BookInfo}>CHEMISTRY</Text>
              <Text style={styles.BookDetails}>Bonds, Chemical, Lab-Test</Text>
              <Text style={styles.BookDiscount}>50%- 60% Off</Text>
            </View>
          </TouchableOpacity>
          {/* 5*/}
          <TouchableOpacity
            style={styles.bookContainer}
            onPress={bookContainer}>
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
            onPress={bookContainer}>
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
            onPress={bookContainer}>
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
            onPress={bookContainer}>
            <ImageBackground
              source={require('../Assets/images/politics.png')}
              style={styles.topimg}></ImageBackground>
            <View style={{}}>
              <Text style={styles.BookInfo}>POLITICES</Text>
              <Text style={styles.BookDetails}>Democracy, Leader, Rights</Text>
              <Text style={styles.BookDiscount}>50%- 60% Off</Text>
            </View>
          </TouchableOpacity>
          {/* 9*/}
          <TouchableOpacity
            style={styles.bookContainer}
            onPress={bookContainer}>
            <ImageBackground
              source={require('../Assets/images/story_books.jpg')}
              style={styles.topimg}></ImageBackground>
            <View style={{}}>
              <Text style={styles.BookInfo}>STORY BOOK</Text>
              <Text style={styles.BookDetails}>Motivational, funny, Moral</Text>
              <Text style={styles.BookDiscount}>50%- 60% Off</Text>
            </View>
          </TouchableOpacity>
          {/* 10
          <TouchableOpacity
            style={styles.bookContainer}
            onPress={bookContainer}>
            <ImageBackground
              source={require('../Assets/images/politics.png')}
              style={styles.topimg}></ImageBackground>
            <View style={{}}>
              <Text style={styles.BookInfo}>POLITICES</Text>
              <Text style={styles.BookDetails}>Democracy, Leader, Rights</Text>
              <Text style={styles.BookDiscount}>50%- 60% Off</Text>
            </View>
          </TouchableOpacity> */}
        </View>
        <View
          style={{
            height: height / 5,
            width: width - 20,
            backgroundColor: global.sandColor,
            borderRadius: 5,
            alignSelf: 'center',
            marginVertical: '2%',
            overflow: 'hidden',
          }}>
          <ImageBackground
            source={require('../Assets/images/tobeContinues.jpg')}
            resizeMode="stretch"
            style={[styles.topimg]}></ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ParentContainer: {
    flex: 1, // Ensure the parent container takes up the full screen
  },
  scrollContent: {
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
    // marginVertical: '2%',
    // flexWrap: 'wrap',
    // backgroundColor: global.sandColor,
  },
  inputfield: {
    width: width - 100,
    backgroundColor: '#fff',
    height: height / 24,
    borderRadius: 10,
    color: global.bgColor,
    fontSize: 15,
    paddingHorizontal: 20,
    elevation: 20,
  },
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
  bookContainer: {
    height: height / 3.5,
    width: width / 2.2,
    borderRadius: 10,
    borderWidth: 1,
    margin: '2%',
    overflow: 'hidden',
  },
  newBookContainer: {
    height: height / 4,
    width: width - 20,
    backgroundColor: global.sandColor,
    borderRadius: 10,
    borderColor: global.bgColor,
    borderWidth: 1,
    // margin: '2%',
    marginHorizontal: '1%',
    elevation: 10,
    marginVertical: 20,
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
    color: '#fff',
    fontSize: 30,
    marginHorizontal: 10,
    fontFamily: font,
    backgroundColor: global.thirdColor,
    borderRadius: 6,
    paddingHorizontal: 10,
    elevation: 10,
  },
  userProfile: {
    height: height / 23,
    width: width / 10.5,
    backgroundColor: global.bgColor,
    borderRadius: 50,
    borderColor: global.sandColor,
    borderWidth: 1,
  },
  cartBadge: {
    color: '#fff',
    position: 'absolute',
    right: 5,
    top: 10,
    backgroundColor: global.sandColor,
    color: global.bgColor,
  },
});

export default Home;

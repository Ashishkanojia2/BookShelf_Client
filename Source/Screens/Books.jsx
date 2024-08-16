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
        <View style={styles.topcontent}>
          <ScrollView horizontal>
            <View style={styles.newBookContainer}></View>
            <View style={styles.newBookContainer}></View>
          </ScrollView>
        </View>
        <View style={styles.content}>
          
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
    marginVertical: '2%',
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
    height: height / 4,
    width: width - 20,
    backgroundColor: global.sandColor,
    borderRadius: 10,
    borderColor: global.bgColor,
    borderWidth: 1,
    // margin: '2%',
    marginHorizontal: '1%',
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

import {
  Alert,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {Button, Text, TextInput} from 'react-native-paper';
import {ScrollView} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
import {useRegisterBookMutation} from '../RTKquery/Slices/BookApiSclice';
const font = 'Calistoga-Regular';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const AddBooks = ({navigation}) => {
  const [RegisterBook] = useRegisterBookMutation();

  const [bookDesc, setbookDesc] = useState('');
  const [author, setauthor] = useState('');
  const [Edition, setEdition] = useState('');
  const [mrp, setmrp] = useState('');
  const [Categories, setCategories] = useState('');
  const [bookName, setbookName] = useState('');
  const [sellingPrice, setsellingPrice] = useState('');
  //
  const bookRef = useRef(null);
  const DescRef = useRef(null);
  const authorRef = useRef(null);
  const editionRef = useRef(null);
  const categoriesRef = useRef(null);
  const mrpRef = useRef(null);
  const sellingRef = useRef(null);
  const [buttonLoading, setbuttonLoading] = useState(false);
  const [Message, setMessage] = useState('');

  const registerBookBtn = async () => {
    try {
      bookRef.current?.blur();
      DescRef.current?.blur();
      authorRef.current?.blur();
      editionRef.current?.blur();
      categoriesRef.current?.blur();
      sellingRef.current?.blur();
      mrpRef.current?.blur();
      const bookdata = {
        b_name: bookName,
        b_desc: bookDesc,
        b_author: author,
        b_edition: Edition,
        b_categorie: Categories,
        b_MRP: mrp,
        b_sellingprice: sellingPrice,
      };

      if (
        bookName == '' ||
        bookDesc == '' ||
        author == '' ||
        Edition == '' ||
        Categories == '' ||
        mrp == '' ||
        sellingPrice == ''
      ) {
        return setMessage('Please Fill All The Fields');
      }
      setbuttonLoading(!buttonLoading);
      const isRegister = await RegisterBook(bookdata);
      console.log('isRegister', isRegister);
      console.log('isRegister123', isRegister.data.success);

      if (isRegister.data.success == true) {
        setbuttonLoading(false);
        Alert.alert(
          'Registered',
          `Your Book: ${isRegister.data.bookdata.b_name} is Registered`,
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ],
          {cancelable: true},
        );
        setbookDesc('');
        setauthor('');
        setEdition('');
        setmrp('');
        setCategories('');
        setbookName('');
        setsellingPrice('');
      }
    } catch (error) {
      console.log('error while register books in record ', error);
    }
  };
  const clearMessage = () => {
    setMessage('');
  };

  // CALLING API

  //   const userData = useSelector(state => state.user.data);

  return (
    <View style={{backgroundColor: global.bgColor, flex: 1}}>
      <ImageBackground
        source={require('../Assets/images/bg2.png')}
        style={styles.topimg}></ImageBackground>
      <TouchableOpacity
        style={{position: 'absolute', left: 20, top: 20}}
        onPress={() => navigation.navigate('profile')}>
        <Ionicons name="arrow-back-sharp" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.headingCont}>
        <Text style={styles.headingTxt}>Add new Books</Text>
      </View>
      <ScrollView>
        <View style={styles.ParentContainer}>
          <View style={styles.booksimageCont}>
            <TouchableOpacity style={styles.profilepicCont}>
              <MaterialIcons
                name="add-a-photo"
                size={35}
                color={global.bgColor}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profilepicCont}>
              <MaterialIcons
                name="add-a-photo"
                size={35}
                color={global.bgColor}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profilepicCont}>
              <MaterialIcons
                name="add-a-photo"
                size={35}
                color={global.bgColor}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.profilepicCont}>
              <MaterialIcons
                name="add-a-photo"
                size={35}
                color={global.bgColor}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputboxcont}>
            <TextInput
              ref={bookRef}
              value={bookName}
              onChangeText={value => setbookName(value)}
              label={'Book Name'}
              style={styles.inputfield}
              outlineColor={global.thirdColor}
              cursorColor={global.sandColor}
              activeOutlineColor={global.sandColor}
              mode="outlined"
              textColor={global.sandColor}
              onFocus={clearMessage}
              autoCorrect={true}
            />
            <TextInput
              ref={DescRef}
              value={bookDesc}
              numberOfLines={7}
              multiline={true}
              onChangeText={value => setbookDesc(value)}
              label={'Description'}
              style={styles.inputfield}
              outlineColor={global.thirdColor}
              cursorColor={global.sandColor}
              activeOutlineColor={global.sandColor}
              mode="outlined"
              textColor={global.sandColor}
              autoCorrect={true}
              onFocus={clearMessage}
            />
            <TextInput
              ref={authorRef}
              value={author}
              onChangeText={value => setauthor(value)}
              label={'Author'}
              style={styles.inputfield}
              outlineColor={global.thirdColor}
              cursorColor={global.sandColor}
              activeOutlineColor={global.sandColor}
              mode="outlined"
              textColor={global.sandColor}
              onFocus={clearMessage}
              autoCorrect={true}
            />
            <TextInput
              ref={editionRef}
              value={Edition}
              onChangeText={value => setEdition(value)}
              label={'Edition'}
              style={styles.inputfield}
              outlineColor={global.thirdColor}
              cursorColor={global.sandColor}
              keyboardType="decimal-pad"
              activeOutlineColor={global.sandColor}
              mode="outlined"
              textColor={global.sandColor}
              onFocus={clearMessage}
              autoCorrect={true}
            />
            <TextInput
              ref={categoriesRef}
              value={Categories}
              onChangeText={value => setCategories(value)}
              label={'Categories'}
              style={styles.inputfield}
              outlineColor={global.thirdColor}
              cursorColor={global.sandColor}
              activeOutlineColor={global.sandColor}
              mode="outlined"
              textColor={global.sandColor}
              onFocus={clearMessage}
            />
            <TextInput
              ref={mrpRef}
              value={mrp}
              onChangeText={value => setmrp(value)}
              label={'MRP rs.'}
              keyboardType="decimal-pad"
              style={styles.inputfield}
              outlineColor={global.thirdColor}
              cursorColor={global.sandColor}
              activeOutlineColor={global.sandColor}
              mode="outlined"
              textColor={global.sandColor}
              onFocus={clearMessage}
            />
            <TextInput
              ref={sellingRef}
              value={sellingPrice}
              onChangeText={value => setsellingPrice(value)}
              label={'Selling Price'}
              keyboardType="decimal-pad"
              style={styles.inputfield}
              outlineColor={global.thirdColor}
              cursorColor={global.sandColor}
              activeOutlineColor={global.sandColor}
              mode="outlined"
              textColor={global.sandColor}
              onFocus={clearMessage}
            />
            <Text style={styles.Errortxt}>{Message}</Text>
            {buttonLoading ? (
              <Button
                mode="contained"
                rippleColor="#c9c9c9"
                buttonColor={global.thirdColor}
                onPress={() => registerBookBtn()}
                loading={buttonLoading}
                style={{
                  marginTop: '5%',
                  height: height / 20,
                  width: width - 90,
                  justifyContent: 'center',
                }}></Button>
            ) : (
              <Button
                mode="contained"
                rippleColor="#c9c9c9"
                buttonColor={global.thirdColor}
                onPress={() => registerBookBtn()}
                style={{
                  marginTop: '5%',
                  height: height / 20,
                  width: width - 90,
                  justifyContent: 'center',
                }}>
                Add Book
              </Button>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddBooks;

const styles = StyleSheet.create({
  headingTxt: {
    fontSize: width / 13,
    color: global.sandColor,
    fontFamily: globalfonts.font4,
  },
  booksimageCont: {flexDirection: 'row', flexWrap: 'wrap'},
  profilepicCont: {
    height: height / 6,
    width: width / 2.2,
    borderRadius: 10,
    backgroundColor: global.thirdColor,
    borderWidth: 1,
    borderColor: global.sandColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: '2%',
    elevation: 30,
  },
  ParentContainer: {
    paddingBottom: '5%',
  },
  topCont: {
    width,
    height: height / 13,
    backgroundColor: global.bgColor,
    borderBottomColor: global.thirdColor,
    borderWidth: 1,
    elevation: 20,
    shadowColor: global.sandColor,
  },
  topContText: {
    fontSize: 20,
    color: global.sandColor,
  },
  topimg: {width, height: height, position: 'absolute'},
  headingCont: {
    alignSelf: 'center',
    marginTop: '4%',
    marginBottom: '5%',
  },
  headtxt: {
    fontSize: 25,
    fontFamily: globalfonts.font,
  },
  Errortxt: {
    fontSize: 15,
    color: 'red',
    alignSelf: 'center',
    marginTop: '5%',
  },
  SkipCont: {
    alignSelf: 'flex-end',
    backgroundColor: global.sandColor,
    height: '4%',
    width: '15%',
    borderRadius: 40,
    justifyContent: 'center',
    marginEnd: '2%',
    marginTop: '2%',
  },
  Skiptxt: {
    fontSize: 17,
    color: global.bgColor,
    alignSelf: 'center',
  },
  headtxt2: {
    fontSize: 35,
    fontFamily: font,
    alignSelf: 'center',
    marginTop: '3%',
  },
  btmText: {
    fontSize: 13,
    alignSelf: 'center',
  },
  inputfield: {
    width: width - 50,
    backgroundColor: global.bgColor,
    marginVertical: height / 70,
  },
  inputboxcont: {
    alignItems: 'center',
  },
});

import {
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
import {useRegisterUserMutation} from '../RTKquery/Slices/ApiSclices';
import {useSelector} from 'react-redux';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
// import {} from "../../assets/fonts"
const font = 'Calistoga-Regular';
const font1 = 'Pacifico-Regular';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const AddBooks = ({navigation}) => {
  const [Registeruser] = useRegisterUserMutation();

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

  const registerUserBtn = async () => {};
  const clearMessage = () => {};

//   const userData = useSelector(state => state.user.data);

  return (
    <View style={{backgroundColor: global.bgColor, flex: 1}}>
      <ImageBackground
        source={require('../Assets/images/bg2.png')}
        style={styles.topimg}></ImageBackground>
      <TouchableOpacity style={{position: 'absolute', left: 20, top: 20}}>
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

            <Button
              mode="contained"
              rippleColor="#c9c9c9"
              buttonColor={global.thirdColor}
              onPress={() => registerUserBtn()}
              // loading={buttonLoading}
              style={{
                marginTop: '20%',
                height: height / 20,
                width: width - 30,
                justifyContent: 'center',
              }}>
              Add Book
            </Button>
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
    // shadowColor: global.bgColor,
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
    fontFamily: font,
  },
  Errortxt: {
    fontSize: 15,
    color: 'red',
    alignSelf: 'center',
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

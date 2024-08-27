import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import { ScrollView } from 'native-base';
import { global } from '../Components/GlobalComponent/GlobalStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { globalfonts } from '../../assets/FrontExport/Frontexport';
import { clearUserData } from '../Redux/Reducer/AuthReducer';
import { useLazyLogoutUserQuery } from '../RTKquery/Slices/ApiSclices';
// import {TextInput} from 'react-native-paper';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const font = 'Calistoga-Regular';
const font1 = 'Pacifico-Regular';

const Profile = ({navigation}) => {
  const userData = useSelector(state => state.user);
  // console.log('Data received:', userData);

  const name = userData?.data?.name || ''; // Provide a fallback in case name is undefined
  const CapLetter = name.charAt(0).toUpperCase();

  // console.log('First capital letter:', CapLetter);
  const dispatch = useDispatch();

  // const logoutUserData = useSelector(state => state.user.data);
  // console.log(logoutUserData);
  const [triggerLogout, {isLoading, isSuccess, isError, data, error}] =
    useLazyLogoutUserQuery();
  // const a = triggerLogout();
  // console.log('isSucces logout', isSuccess);
  // console.log('data while logout', data);
  // console.log('userdata logout', userData);

  const logout = async () => {
    await triggerLogout()
      .unwrap()
      .then(() => {
        // Handle successful logout
        // For example, navigate to login screen
        dispatch(clearUserData());
        navigation.navigate('login');
      })
      .catch(err => {
        // Handle logout error
        console.error('Logout failed:', err);
      });
  };

  const FormateDate = createdAt => {
    const dateString = createdAt;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
    // console.log(formattedDate);
  };
  return (
    <View style={styles.ParentContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(140,154,154,1)"
        translucent={false}
      />

      <View style={styles.Profileheader}>
        <View style={styles.profileHerderChild1}>
          <TouchableOpacity style={styles.profilepicCont}>
            <Text style={styles.profilePhotoText}>{CapLetter}</Text>
          </TouchableOpacity>
          <Text style={styles.profileTxt}>{userData.data.name}</Text>

          <Text style={styles.profileDateTxt}>
            Acc. Created At {FormateDate(userData.data.createAt)}
          </Text>
        </View>
        <View style={styles.profileHerderChild2}></View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity
          style={styles.profileOption}
          onPress={() => navigation.navigate('profileUser')}>
          <View style={styles.profileOptionView}>
            <View style={styles.profileIconCont}>
              <FontAwesome name="user-o" size={18} color={'#fff'} />
            </View>
            <Text style={styles.profileOptionText}>Your profile</Text>
          </View>
          <MaterialCommunityIcons
            name="greater-than"
            size={20}
            color={global.bgColor}
            style={{right: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileOption}
          onPress={() => navigation.navigate('addbooks')}>
          <View style={styles.profileOptionView}>
            <View style={styles.profileIconCont}>
              <FontAwesome name="user-o" size={18} color={'#fff'} />
            </View>
            <Text style={styles.profileOptionText}>Add books</Text>
          </View>
          <MaterialCommunityIcons
            name="greater-than"
            size={20}
            color={global.bgColor}
            style={{right: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileOption}
          onPress={() => navigation.navigate('profileUser')}>
          <View style={styles.profileOptionView}>
            <View style={styles.profileIconCont}>
              <FontAwesome name="heart-o" size={18} color={'#fff'} />
            </View>
            <Text style={styles.profileOptionText}>Favorite</Text>
          </View>
          <MaterialCommunityIcons
            name="greater-than"
            size={20}
            color={global.bgColor}
            style={{right: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileOption}
          onPress={() => navigation.navigate('profileUser')}>
          <View style={styles.profileOptionView}>
            <View style={styles.profileIconCont}>
              <FontAwesome name="money" size={18} color={'#fff'} />
            </View>
            <Text style={styles.profileOptionText}>Selling Books</Text>
          </View>
          <MaterialCommunityIcons
            name="greater-than"
            size={20}
            color={global.bgColor}
            style={{right: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileOption}
          onPress={() => navigation.navigate('profileUser')}>
          <View style={styles.profileOptionView}>
            <View style={styles.profileIconCont}>
              <FontAwesome name="user-o" size={18} color={'#fff'} />
            </View>
            <Text style={styles.profileOptionText}> Order</Text>
          </View>
          <MaterialCommunityIcons
            name="greater-than"
            size={20}
            color={global.bgColor}
            style={{right: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileOption}
          onPress={() => navigation.navigate('profileUser')}>
          <View style={styles.profileOptionView}>
            <View style={styles.profileIconCont}>
              <MaterialCommunityIcons
                name="information-variant"
                size={25}
                color={'#fff'}
              />
            </View>
            <Text style={styles.profileOptionText}>About</Text>
          </View>
          <MaterialCommunityIcons
            name="greater-than"
            size={20}
            color={global.bgColor}
            style={{right: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileOption}
          onPress={() => navigation.navigate('profileUser')}>
          <View style={styles.profileOptionView}>
            <View style={styles.profileIconCont}>
              <MaterialCommunityIcons
                name="notebook-edit-outline"
                size={20}
                color={'#fff'}
              />
            </View>
            <Text style={styles.profileOptionText}>Send FeedBack</Text>
          </View>
          <MaterialCommunityIcons
            name="greater-than"
            size={20}
            color={global.bgColor}
            style={{right: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileOption} onPress={logout}>
          <View style={styles.profileOptionView}>
            <View style={styles.profileIconCont}>
              <FontAwesome name="power-off" size={18} color={'#fff'} />
            </View>
            <Text style={styles.profileOptionText}>Logout</Text>
          </View>
          <MaterialCommunityIcons
            name="greater-than"
            size={20}
            color={global.bgColor}
            style={{right: 10}}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileIconCont: {
    height: height / 27,
    width: width / 12,
    borderRadius: 20,
    backgroundColor: global.bgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileOptionText: {
    color: global.bgColor,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: '5%',
  },
  profileOptionView: {
    height: '100%',
    width: width - 100,
    // backgroundColor: global.lightgray,
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: '2%',
  },
  profileOption: {
    height: height / 18,
    width: width - 20,
    borderRadius: 10,
    // backgroundColor: 'rgba(26,54,54,0.3)',
    backgroundColor: global.lightgray,
    marginVertical: '3%',

    alignSelf: 'center',
    marginTop: '2%',
    overflow: 'hidden',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileTxt: {fontSize: width / 18, marginHorizontal: '5%', fontWeight: '600'},
  profilePhotoText: {
    fontSize: width / 6,
    marginHorizontal: '5%',
    fontFamily: globalfonts.font6,
  },
  profileDateTxt: {
    fontSize: width / 30,
    marginHorizontal: '5%',
    fontWeight: '600',
    position: 'absolute',
    right: -5,
    top: 5,
    color: '#777675',
  },
  profilepicCont: {
    height: height / 10,
    width: width / 4.5,
    borderRadius: 50,
    backgroundColor: global.thirdColor,
    borderWidth: 1,
    borderColor: global.sandColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHerderChild1: {
    flex: 4,
    backgroundColor: 'yelow',
    width: '100%',
    overflow: 'hidden',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '3%',
    flexDirection: 'row',
  },
  profileHerderChild2: {
    flex: 2,
    backgroundColor: global.sandColor,
    width: '100%',
    overflow: 'hidden',
  },
  Profileheader: {
    height: height / 5,
    width: width - 20,
    borderRadius: 10,
    backgroundColor: global.bgColor,
    alignSelf: 'center',
    marginTop: '2%',
    overflow: 'hidden',
    elevation: 20,
  },
  ParentContainer: {
    flex: 1, // Ensure the parent container takes up the full screen
    backgroundColor: 'rgba(26,54,54,0.1)',
  },
  scrollContent: {
    flexGrow: 1,
    // backgroundColor: 'rgba(26,54,54,0.1)',
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
  newArival: {
    color: '#fff',
    fontSize: 30,
    marginHorizontal: 10,
    fontFamily: font,
    // backgroundColor: global.thirdColor,
    borderRadius: 6,
    paddingHorizontal: 10,
    // elevation: 10,
  },
  inputfield: {
    // marginBottom: '10%',
    width: width - 50,
    backgroundColor: global.bgColor,
    marginVertical: height / 70,
  },
});

export default Profile;

import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';
import React from 'react';
import { ScrollView } from 'native-base';
import { global } from '../Components/GlobalComponent/GlobalStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./CssStyles/Profile"

import {
  clearUserData
} from '../Redux/Reducer/AuthReducer';
import { useLazyLogoutUserQuery } from '../RTKquery/Slices/ApiSclices';

import { persistor, store } from '../Redux/Store/Store';

const Profile = ({navigation}) => {
  const {isLoading, isError, data: userData} = useSelector(state => state.user);
  /////////////////////////////////////// From profile screen//////////////////

  const dispatch = useDispatch();
  const [triggerLogout] = useLazyLogoutUserQuery();

  const logout = async () => {
    await triggerLogout()
      .unwrap()
      .then(async () => {
        await persistor.purge(); // THIS LINE IS USED TO CLEAN DATA ON PRESIST
        dispatch(clearUserData());
        navigation.navigate('login');
        const storeData = store.getState(); // Use `store.getState()` instead of `useSelector`
        console.log('Store after logout:', storeData);
      })
      .catch(err => {
        console.error('Logout failed:', err);
      });
  };

  const FormateDate = createdAt => {
    const date = new Date(createdAt);
    if (isNaN(date)) {
      return 'Invalid Date';
    }
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`;
  };

  if (isLoading) {
    return <Text style={{color: '#000'}}>Loading...</Text>;
  }

  if (isError) {
    return (
      <Text style={{color: 'red'}}>Something is Error while loading data.</Text>
    );
  }
  if (!userData) {
    return <Text style={{color: 'red'}}>Failed to load data.</Text>;
  }

  const name = userData.name || '';
  const CapLetter = name.charAt(0).toUpperCase();

  const sortName = userData.name.split('');
  const b = sortName[0].toUpperCase();

  const fun = () => {
    let result = b;
    for (let i = 1; i < sortName.length; i++) {
      result += sortName[i];
    }
    return result;
  };

  const UserNameWithFirstLetterCaptial = fun();

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
            {userData?.avatar?.url ? (
              <Image
                source={{uri: userData.avatar.url}}
                style={{height: '100%', width: '100%'}}
              />
            ) : (
              <Text style={styles.profilePhotoText}>{CapLetter}</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.profileTxt}>
            {UserNameWithFirstLetterCaptial}
          </Text>
          <Text style={styles.profileDateTxt}>
            Acc. Created at {FormateDate(userData.createAt)}
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
          onPress={() => navigation.navigate('favorite')}>
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
          onPress={() => navigation.navigate('sellingbooks')}>
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
          onPress={() => navigation.navigate('order')}>
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
          onPress={() => navigation.navigate('about')}>
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
          onPress={() => navigation.navigate('feedback')}>
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
        <TouchableOpacity
          style={styles.profileOption}
          onPress={() => navigation.navigate('forgotPassword')}>
          <View style={styles.profileOptionView}>
            <View style={styles.profileIconCont}>
              <MaterialIcons name="change-circle" size={20} color={'#fff'} />
            </View>
            <Text style={styles.profileOptionText}>Change Password</Text>
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

export default Profile;

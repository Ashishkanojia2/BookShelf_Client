import {
    Dimensions,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { global } from '../Components/GlobalComponent/GlobalStyle';
import { CustomIonicon } from '../Components/Icons/Icons';
import { globalfonts } from '../../assets/FrontExport/Frontexport';
import { useDispatch, useSelector } from 'react-redux';
import { useGetBookDataQuery } from '../RTKquery/Slices/BookApiSclice';
import { RemoveCartData } from '../Redux/Reducer/CartReducer';
const {height, width} = Dimensions.get('screen');

const Cart = ({navigation}) => {
  const go_to_home = () => {
    navigation.navigate('home');
  };
  const cartData = useSelector(state => state.cart.cartData);
  const userdata = useSelector(state => state.user);

  const {data: bookdata, isLoading, isSuccess} = useGetBookDataQuery();
  const dispatch = useDispatch();

    console.log('*******************************');
    console.log('userdata', userdata);
  //   console.log('bookdata11', bookdata);
  const [alldata, setalldata] = useState('');

  const removeitem = id => {
    console.log('Removing item with ID:', id);

    const remaningItem = cartData.filter(itemId => itemId !== id); 
    console.log('Updated cart data:', remaningItem);

    dispatch(RemoveCartData(remaningItem)); 
  };

  useEffect(() => {
    if (bookdata && cartData) {
      const filteredItems = cartData
        .map(itemId => bookdata.allbooks.find(item => item._id === itemId))
        .filter(item => item !== undefined);

      if (JSON.stringify(alldata) !== JSON.stringify(filteredItems)) {
        setalldata(filteredItems);
      }

    }
  }, [cartData, bookdata, alldata, removeitem]);
  const renderBookImages = images => {
    if (images && images.length > 0) {
      return (
        <Image
          source={{uri: images[0].url}}
          style={{width: '100%', height: '100%', resizeMode: 'center'}}
        />
      );
    } else {
      return <Text>No image available</Text>;
    }
  };

  const name = userdata?.data?.name || '';
  const CapLetter = name.charAt(0).toUpperCase();

  return (
    <View style={styles.ParentContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(140,154,154,1)"
        translucent={false}
      />
      <View style={styles.headerCont}>
        <TouchableOpacity onPress={go_to_home}>
          <CustomIonicon name="arrow-back-sharp" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.myCartTxt}>My Cart</Text>
        <TouchableOpacity onPress={() => {navigation.navigate("profile")}} style={styles.userProfile}>
        {userdata && userdata?.data?.avatar && userdata.data.avatar.url ? (
            <Image
              source={{uri: userdata.data.avatar.url}}
              style={{height: '100%', width: '100%'}}
            />
          ) : (
            <Text style={styles.profilePhotoText}>{CapLetter}</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.mainCont}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {alldata?.length > 0 ? (
            alldata.map((item, index) => {
              return (
                <View style={styles.allBookContainer} key={index}>
                  <View style={styles.productPhoto}>
                    <View style={styles.productPhoto}>
                      {renderBookImages(item.images)}
                    </View>
                  </View>
                  <View style={styles.productInfo}>
                    <Text
                      style={[styles.booksName]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item?.b_name || 'No Name Available'}
                    </Text>
                    <Text
                      style={[styles.bookstxt]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item?.b_desc || 'No Description Available'}
                    </Text>
                    <View style={styles.editionCont}>
                      <Text style={styles.booksHead}>Edition</Text>
                      <Text style={styles.bookstxt}>
                        {item?.b_edition || 'N/A'}th
                      </Text>
                    </View>
                    <View style={styles.editionCont}>
                      <Text style={styles.booksHead}>Author</Text>
                      <Text style={styles.bookstxt}>
                        {item?.b_author || 'Unknown'}
                      </Text>
                    </View>
                    <View style={styles.editionCont}>
                      <Text style={styles.booksHead}>S.Price</Text>
                      <Text style={styles.bookstxt}>
                        {item?.b_sellingprice || '0'} rs.
                      </Text>
                    </View>
                    <View style={styles.editionCont}>
                      <Text style={styles.booksHead}>MRP</Text>
                      <Text
                        style={[
                          styles.bookstxt,
                          {
                            textDecorationLine: 'line-through',
                            color: '#c9c9c9',
                          },
                        ]}>
                        {item?.b_MRP || '0'} rs.
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={styles.addBtn}
                      onPress={() => removeitem(item._id)}>
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
              );
            })
          ) : (
            <Text style={{
                color: global.sandColor,
                fontSize: 25,
                fontFamily: globalfonts.font,
                marginTop: '20%',
                textDecorationLine: 'underline',
                alignSelf: 'center',
              }}>No books</Text>
          )}
        </ScrollView>
      </View>
      <View style={styles.bottomCartBtn}>
        <TouchableOpacity
          style={[styles.bottomCartBtn_child, {backgroundColor: '#000'}]}>
          <Text style={styles.bottomCartBtn_txt}>Amt : 9999rs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomCartBtn_child,
            {backgroundColor: global.thirdColor},
          ]}>
          <Text style={styles.bottomCartBtn_txt}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  myCartTxt: {
    fontSize: width / 18,
  },
  userProfile: {
    height: height / 23,
    width: width / 10.5,
    backgroundColor: global.bgColor,
    borderRadius: 50,
    borderColor: global.sandColor,
    borderWidth: 1,
    overflow: 'hidden',
  },
  bottomCartBtn: {
    position: 'absolute',
    bottom: 0,
    height: height / 15,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomCartBtn_child: {
    alignItems: 'center',
    height: height / 15,
    width: width / 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomCartBtn_txt: {
    fontSize: width / 20,
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
  booksName: {
    fontSize: 20,
    color: '#000',
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
    height: '95%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
  productCont: {
    height: height / 5,
    width: width - 15,
    backgroundColor: '#fff',
    borderColor: global.thirdColor,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  mainCont: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: '2%',
    paddingBottom: '15%',
  },
  ParentContainer: {
    flex: 1,
    backgroundColor: global.lightgray,
  },
  headerCont: {
    backgroundColor: 'rgba(26,54,54,0.5)',
    height: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
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
  cartBadge: {
    color: '#fff',
    position: 'absolute',
    right: 5,
    top: 10,
    backgroundColor: global.sandColor,
    color: global.bgColor,
  },
});

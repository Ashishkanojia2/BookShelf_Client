import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {Badge} from 'react-native-paper';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useGetBookDataQuery} from '../RTKquery/Slices/BookApiSclice';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useBookOwnerMutation} from '../RTKquery/Slices/ApiSclices';
import {ProductDiscount} from '../Components/GlobalFiles/GlobalFiles';
import Carousel from 'react-native-reanimated-carousel';

const {height, width} = Dimensions.get('window');

export default Product_Books = ({route}) => {
  const navigation = useNavigation();

  const userdata = useSelector(state => state.user);
  const [singlebookdata, setsinglebookdata] = useState('');
  const {data: Book_data, isLoading, error, isSuccess} = useGetBookDataQuery();
  const [state_BookData, setstate_BookData] = useState('');
  const [isExpand, setisExpand] = useState(false);
  const [ownerDetails, setownerDetails] = useState(null);

  const [product_images, setproduct_images] = useState([]);

  const [searchText, setsearchText] = useState('');
  const [ownerData] = useBookOwnerMutation();

  console.log('****************form PRODUCT BOOK SCREEN***************');
  console.log('route', route);

  const fetchOwnerDetails = useCallback(
    async bookOwnerId => {
      try {
        const result = await ownerData({bookOwnerId}).unwrap();
        setownerDetails(result);
        // console.log('Owner Details Fetched:', result);
      } catch (err) {
        console.error('Error fetching owner details:', err);
      }
    },
    [ownerData],
  );

  useEffect(() => {
    if (!isLoading && Book_data && Book_data.allbooks) {
      const isMatch = id => Book_data.allbooks.find(item => item._id === id);

      const matchedBook = isMatch(route.params.key);
      if (matchedBook) {
        setsinglebookdata(matchedBook);
        setproduct_images(matchedBook.images.map(item => item.url));
        console.log('product images', product_images);

        fetchOwnerDetails(matchedBook.b_seller_id);
      }
    }
  }, [Book_data, isLoading, route.params, ownerData]);

  useEffect(() => {
    if (Book_data && isSuccess) {
      setstate_BookData(Book_data);
    }
  }, [Book_data, isSuccess]);
  const GoBackWhereyouCameFrom = () => {
    // navigation.navigate('home');
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
          onPress={() =>
            navigation.navigate(route.params.ScreenName || 'home')
          }>
          <Ionicons name="arrow-back-sharp" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.searchfield}>
          <Fontisto name="search" size={20} color="#000" />

          <TextInput
            style={{color: global.bgColor}}
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
      <ScrollView>
        <View style={styles.imageCont}>
          {product_images && product_images.length > 0 ? (
            <Carousel
              loop
              width={width}
              height={height / 2}
              data={product_images}
              renderItem={({item}) =>
                item !== undefined && item !== null ? (
                  <Image source={{uri: item}} style={styles.image} />
                ) : (
                  <Text style={{color: '#000'}}>Image not Available</Text>
                )
              }
            />
          ) : (
            <Text style={{color: '#000'}}>No Images Available</Text>
          )}
        </View>

        <View style={{marginBottom: '15%'}}>
          <View style={styles.whitebox}>
            <Text style={[styles.prdName, {color: '#000'}]}>
              {singlebookdata.b_name}
            </Text>

            <Text style={[styles.prdDesc]} numberOfLines={isExpand ? null : 4}>
              {singlebookdata.b_desc}
            </Text>
            {isExpand ? (
              <TouchableOpacity onPress={() => setisExpand(!isExpand)}>
                <Text style={styles.readMore}>Hide.</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setisExpand(!isExpand)}>
                <Text style={styles.readMore}>Read More...</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={[styles.whitebox, {flexDirection: 'row'}]}>
            <AntDesign
              name="arrowdown"
              size={20}
              color={global.bgColor}
              style={[
                styles.prdDiscount,
                {marginEnd: '0', fontSize: width / 20},
              ]}
            />
            <Text style={styles.prdDiscount}>{ProductDiscount}%</Text>
            <Text
              style={[
                styles.prdDiscount,
                {color: '#b2b2b2', textDecorationLine: ' line-through'},
              ]}>
              {singlebookdata.b_MRP}
            </Text>
            <Text style={[styles.prdDiscount, {color: '#000'}]}>
              {singlebookdata.b_sellingprice}
            </Text>
          </View>
          <View style={[styles.whitebox]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.addressTxt}>Delivery to :</Text>
              <Text style={[styles.addressTxt, {color: '#000'}]}>
                {userdata?.data.name || ''},
              </Text>
              <TouchableOpacity
                style={styles.changebtn}
                onPress={() =>
                  navigation.navigate('profileUser', 'Product_Books')
                }>
                <Text style={{color: '#000'}}>Change</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={[styles.addressTxt, {color: '#b6b6b6', marginEnd: '20%'}]}
              numberOfLines={1}>
              {userdata.data.address}
            </Text>
          </View>
          <View style={styles.whitebox}>
            <Text
              style={[
                styles.prdName,
                {fontSize: width / 23, color: '#000', marginBottom: '3%'},
              ]}>
              Highlights
            </Text>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Book Name :</Text>
              <Text style={[styles.b_detail_child]} numberOfLines={2}>
                {singlebookdata.b_name}
              </Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Author :</Text>
              <Text style={[styles.b_detail_child]}>
                {singlebookdata.b_author}
              </Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Edition :</Text>
              <Text style={[styles.b_detail_child]}>
                {singlebookdata.b_edition} th
              </Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Categories :</Text>
              <Text style={[styles.b_detail_child]}>
                {singlebookdata.b_categorie}
              </Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>MRP :</Text>
              <Text style={[styles.b_detail_child]}>
                {singlebookdata.b_MRP} Rs.
              </Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Best Price :</Text>
              <Text style={[styles.b_detail_child]}>
                {singlebookdata.b_sellingprice} Rs.
              </Text>
            </View>
          </View>
          <View style={styles.whitebox}>
            <Text
              style={[
                styles.prdName,
                {fontSize: width / 23, color: '#000', marginBottom: '1%'},
              ]}>
              Book Owner Details
            </Text>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Owner Name :</Text>
              <Text style={[styles.b_detail_child]} numberOfLines={2}>
                {ownerDetails?.data.name || ''}
              </Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Mail-Id:</Text>
              <Text style={[styles.b_detail_child]}>
                {ownerDetails?.data.email || ''}
              </Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Phone :</Text>
              <Text style={[styles.b_detail_child]}>
                {ownerDetails?.data.phone || ''}
              </Text>
            </View>
            <View style={styles.b_detail}>
              <Text style={[styles.b_detail_child]}>Address :</Text>
              <Text style={[styles.b_detail_child]}>
                {ownerDetails?.data.address || ''}
              </Text>
            </View>
          </View>
          <View style={[styles.whitebox, {maxHeight: height / 2.5}]}>
            <Text
              style={[
                styles.prdName,
                {fontSize: width / 23, color: '#000', marginBottom: '7%'},
              ]}>
              Similar Books
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: 'row',
                paddingStart: '1%',
                paddingEnd: '7%',
              }}>
              {state_BookData?.allbooks &&
              state_BookData.allbooks.length > 0 ? (
                // state_BookData.allbooks

                [...state_BookData.allbooks]
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 3)

                  .map(item => (
                    <TouchableOpacity
                      key={item._id}
                      style={styles.similarProductCont}
                      onPress={() =>
                        navigation.navigate('productbooks', {key: item._id})
                      }>
                      <View
                        style={{
                          width: '100%',
                          height: '65%',
                        }}>
                        {item &&
                        item.images &&
                        item.images.length > 0 &&
                        item.images[0].url ? (
                          <Image
                            source={{uri: item.images[0].url}}
                            style={{
                              width: '100%',
                              height: '100%',
                              resizeMode: 'center',
                              borderRadius: 12,
                            }}
                          />
                        ) : (
                          <Text
                            style={{
                              color: '#000',
                              alignSelf: 'center',
                              marginTop: '50%',
                            }}>
                            No Image Avaliable
                          </Text>
                        )}
                      </View>
                      <Text
                        style={{color: '#000', marginHorizontal: '3%'}}
                        numberOfLines={2}>
                        {item.b_name}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <AntDesign
                          name="arrowdown"
                          size={20}
                          color={global.bgColor}
                          style={[
                            styles.prdDiscount,
                            {marginEnd: '0', fontSize: width / 28},
                          ]}
                        />
                        <Text style={{fontSize: width / 28, color: '#30cf5b'}}>
                          {ProductDiscount}% off
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            color: '#000',
                            marginHorizontal: '3%',
                            textDecorationLine: 'line-through',
                          }}>
                          {item.b_MRP}
                        </Text>
                        <Text style={{color: '#000', marginHorizontal: '3%'}}>
                          {item.b_sellingprice} Rs.
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))
              ) : (
                <Text>Waiting...</Text>
              )}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomCartBtn}>
        <TouchableOpacity
          style={[styles.bottomCartBtn_child, {backgroundColor: '#000'}]}>
          <Text style={styles.bottomCartBtn_txt}>Add to cart</Text>
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

const styles = StyleSheet.create({
  image: {
    width: '70%', // or any specific width
    height: '100%', // or any specific height
    // alignItems:"center",
    // // justifyContent:"center",
    alignSelf: 'center',
    // resizeMode: 'cover', // or 'contain', depending on your need
  },

  similarProductCont: {
    height: height / 3.5,
    width: width / 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: global.thirdColor,
    marginHorizontal: '1%',
    overflow: 'hidden',
    // alignItems:"center"
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
  changebtn: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#b6b6b6',
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    position: 'absolute',
    right: 5,
    top: 5,
  },
  whitebox: {
    maxHeight: height / 3,
    width,
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingHorizontal: '2%',
    paddingBottom: '1%',
    marginVertical: '0.2%',
  },
  b_detail_child: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '1%',
    fontSize: width / 30,
    color: global.thirdColor,
  },
  b_detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '1%',
  },
  readMore: {
    color: '#b4b5b5',
    fontSize: width / 30,
    textDecorationLine: 'underline',
  },

  prdName: {
    fontFamily: globalfonts.font6,
    color: 'gray',
    fontSize: width / 22,
    marginTop: '5%',
  },
  prdDesc: {
    color: '#000',
    fontSize: width / 27,
    marginTop: '1%',
    fontFamily: globalfonts.font7,
  },
  prdDiscount: {
    fontFamily: globalfonts.font6,
    fontSize: width / 18,
    color: '#30cf5b',
    marginTop: '1%',
    alignSelf: 'center',
    marginEnd: '3%',
  },
  addressTxt: {
    fontFamily: globalfonts.font6,
    fontSize: width / 25,
    color: '#6b6b6b',
    marginTop: '1%',
    marginEnd: '1%',
  },
  imageCont: {
    backgroundColor: '#fff',
    height: height / 2,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ParentContainer: {
    flex: 1,
    backgroundColor: global.lightgray,
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerCont: {
    backgroundColor: 'rgba(26,54,54,0.5)',
    height: 70,
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
    color: '#000',
    flexDirection: 'row',
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
    fontFamily: globalfonts.font,
    backgroundColor: global.thirdColor,
    borderRadius: 6,
    paddingHorizontal: 10,
    elevation: 10,
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

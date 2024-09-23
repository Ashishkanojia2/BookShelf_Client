import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {CustomIonicon} from '../Components/Icons/Icons';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
const {height, width} = Dimensions.get('screen');

const Cart = () => {
  return (
    <View style={styles.ParentContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(140,154,154,1)"
        translucent={false}
      />
      <View style={styles.headerCont}>
        <TouchableOpacity>
          <CustomIonicon name="arrow-back-sharp" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.myCartTxt}>My Cart</Text>
        <TouchableOpacity onPress={() => {}} style={styles.userProfile}>
          {/* {userdata && userdata?.data?.avatar && userdata.data.avatar.url ? (
            <Image
              source={{uri: userdata.data.avatar.url}}
              style={{height: '100%', width: '100%'}}
            />
          ) : null // <Text style={styles.profilePhotoText}>{CapLetter}</Text>
          } */}
        </TouchableOpacity>
      </View>
      <View style={styles.mainCont}>
        <View style={styles.allBookContainer}>
          <View style={styles.productPhoto}>
            <View style={styles.productPhoto}>
              {/* {renderBookImages(item.images)} */}
            </View>
          </View>
          <View style={styles.productInfo}>
            <Text
              style={[styles.booksName]}
              numberOfLines={1}
              ellipsizeMode="tail">
              item.b_name
            </Text>
            <Text
              style={[styles.bookstxt]}
              numberOfLines={1}
              ellipsizeMode="tail">
              item.b_desc
            </Text>
            <View style={styles.editionCont}>
              <Text style={styles.booksHead}>Edition</Text>
              <Text style={styles.bookstxt}>item.b_edition th.</Text>
            </View>
            <View style={styles.editionCont}>
              <Text style={styles.booksHead}>Author</Text>
              <Text style={styles.bookstxt}>item.b_author</Text>
            </View>
            <View style={styles.editionCont}>
              <Text style={styles.booksHead}>S.Price</Text>
              <Text style={styles.bookstxt}>item.b_sellingprice rs.</Text>
            </View>
            <View style={styles.editionCont}>
              <Text style={styles.booksHead}>MRP</Text>
              <Text
                style={[
                  styles.bookstxt,
                  {textDecorationLine: 'line-through', color: '#c9c9c9'},
                ]}>
                item.b_MRP rs.
              </Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
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
    // backgroundColor: 'green',
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
    // justifyContent: 'center',
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
    // backgroundColor: global.bgColor,
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
  mainCont: {flex: 1, alignItems: 'center', paddingVertical: '2%'},
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

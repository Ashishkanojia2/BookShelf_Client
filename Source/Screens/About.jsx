import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {global} from '../Components/GlobalComponent/GlobalStyle';
import {ScrollView, StatusBar} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {globalfonts} from '../../assets/FrontExport/Frontexport';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const About = ({navigation}) => {
  return (
    <View style={styles.mainCont}>
      <ImageBackground
        source={require('../Assets/images/bg2.png')}
        style={styles.topimg}></ImageBackground>
      <TouchableOpacity
        style={{position: 'absolute', left: 20, top: 20}}
        onPress={() => {
          navigation.navigate('profile');
        }}>
        <Ionicons name="arrow-back-sharp" size={27} color="#fff" />
      </TouchableOpacity>
      <View style={styles.aboutCont}>
        <Text style={styles.aboutHead}> About BookShelf</Text>
        <ScrollView>
          <View style={{}}>
            <Text style={styles.aboutTxt}>
              Welcome to Bookshelf, your go-to online platform for buying and
              selling second-hand books at the best prices! Our goal is to make
              reading more affordable and accessible to everyone by providing an
              easy-to-use marketplace where people can buy and sell used books.
              Whether you're searching for your next favorite book or looking to
              sell books you no longer need, Bookshelf is the perfect place for
              you. At Bookshelf, we offer a wide variety of book categories to
              suit all kinds of readers. From fiction and non-fiction to
              textbooks, self-help guides, and children's books, there's
              something for everyone. Our user-friendly design makes it easy to
              browse through different genres, explore popular titles, or search
              for specific books and authors. We believe that everyone should
              have the opportunity to read more, and our platform helps you find
              books that match your interests. To make sure your experience is
              safe and personalized, Bookshelf requires all users to create an
              account. If you already have an account, simply log in to access
              your personal dashboard, where you can view your purchase history,
              manage your book listings, and more. If you're new to Bookshelf,
              you can quickly and easily create an account. This way, you'll be
              able to start buying or selling books right away. Bookshelf also
              has a special advertisement section, which keeps you updated on
              the latest deals, discounts, and offers. This section is great for
              both buyers and sellers. Sellers can highlight their books to
              attract more buyers, and buyers can find special deals on books
              they want. This makes the experience of buying and selling books
              more exciting and rewarding. We care about making your time on
              Bookshelf smooth, secure, and enjoyable. Our powerful search and
              filter tools help you find books based on different options, like
              price, book condition, or location. Each book listing includes
              detailed descriptions and photos so you can be sure about your
              choices. For sellers, we make it simple to list books, manage your
              sales, and communicate with potential buyers. Bookshelf is not
              just a place to buy and sell books; it’s also a community for book
              lovers. Users can leave reviews and ratings, helping others make
              informed choices and building a sense of trust among our community
              members. By choosing Bookshelf, you're not just getting great
              books at great prices; you're also joining a network of people who
              share your love for reading. We believe in the power of reusing
              books, which helps reduce waste and supports a more eco-friendly
              environment. By giving second-hand books a new life, we're helping
              to keep the joy of reading alive while being kind to our planet.
              Join us at Bookshelf, where every book finds a new home, and every
              reader discovers a new adventure.
            </Text>
            <Text style={styles.ThankMsg}>
              Thank you for choosing Bookshelf! We’re excited to be part of your
              reading journey and look forward to helping you discover many
              wonderful books.📚
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  aboutHead: {
    fontSize: width / 10,
    color: global.thirdColor,
    fontFamily: globalfonts.font,
    // backgroundColor:"green",
    paddingHorizontal: '10%',
  },
  aboutTxt: {
    fontSize: width / 25,
    color: 'rgba(214, 189, 152,0.8)',
    fontFamily: globalfonts.font,
    paddingHorizontal: '10%',
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 40,
  },
  ThankMsg: {
    fontSize: width / 25,
    color: 'rgba(214, 189, 152,0.8)',
    fontFamily: globalfonts.font,
    // paddingHorizontal: '1%',
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 40,
    marginTop: '7%',
  },
  aboutCont: {
    height: height - 150,
    width: width - 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    alignItems: 'center',
  },
  mainCont: {
    backgroundColor: global.bgColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topimg: {width, height: height, position: 'absolute'},
});

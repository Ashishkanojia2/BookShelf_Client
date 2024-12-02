// import {Image, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import {globalfonts} from '../../assets/FrontExport/Frontexport';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {ScrollView} from 'native-base';
// import styles from './CssStyles/Favorite';
// import {useSelector} from 'react-redux';
// import {useGetBookDataQuery} from '../RTKquery/Slices/BookApiSclice';
// const Favorite = ({navigation}) => {
//   const Likedbookdata = useSelector(state => state.book.bookdata);
//   const {data, isLoading, isSuccess, refetch} = useGetBookDataQuery();
//   // console.log('1234', data);

//   if (!data.allbooks || !data) {
//     return <Text>No data Avaliable.</Text>;
//   }

//   const filteredBooks = data.allbooks.filter(
//     book => Likedbookdata.includes(book._id), // Check if the book ID is in the Likedbookdata array
//   );
//   console.log(filteredBooks);
//   // const imagesData = filteredBooks.images.map(item => console.log(item));
//   // console.log('imagesData', imagesData);

//   filteredBooks.forEach(book => {
//     if (book.images && book.images.length > 0) {
//       console.log('First Image URL:', book.images[0].url);
//     } else {
//       console.log('No images available for this book.');
//     }
//   });
//   return (
//     <View style={styles.ParentContainer}>
//       <TouchableOpacity
//         style={{position: 'absolute', left: 20, top: 20}}
//         onPress={() => navigation.navigate('profile')}>
//         <Ionicons name="arrow-back-sharp" size={30} color="#fff" />
//       </TouchableOpacity>

//       <View style={styles.headingCont}>
//         <Text style={styles.headingTxt}>Favorite Books</Text>
//       </View>
//       {isLoading ? (
//         <Text>Loading Data</Text>
//       ) : (
//         <ScrollView>
//           {filteredBooks.length > 0 ? (
//             filteredBooks.map((item, index) => (
//               <TouchableOpacity
//                 onPress={() =>
//                   navigation.navigate('productbooks', {key: item._id})
//                 }
//                 style={styles.allBookContainer}
//                 key={item._id || index}>
//                 <View style={styles.productPhoto}>
//                   {/* <View
//                     style={{
//                       height: '80%',
//                       width: '80%',
//                       backgroundColor: global.thirdColor,
//                     }}></View> */}
//                   <View style={styles.imgContainer}>
//                     {filteredBooks.forEach((book, index) => (
//                       <View key={index}>
//                         {book.images && book.images.length > 0 ? (
//                           <Image
//                             source={{uri: book.images[0].url}} // Access the URL of the first image
//                             style={{height: '100%', width: '50%'}}
//                             // resizeMode="cover"
//                           />
//                         ) : (
//                           <Text>No image available</Text>
//                         )}
//                       </View>
//                     ))}
//                   </View>
//                 </View>
//                 <View style={styles.productInfo}>
//                   <Text
//                     style={[styles.booksName]}
//                     numberOfLines={1}
//                     ellipsizeMode="tail">
//                     {item.b_name}
//                   </Text>
//                   <Text
//                     style={[styles.bookstxt]}
//                     numberOfLines={1}
//                     ellipsizeMode="tail">
//                     {item.b_desc}
//                   </Text>
//                   <View style={styles.editionCont}>
//                     <Text style={styles.booksHead}>Edition</Text>
//                     <Text style={styles.bookstxt}>{item.b_edition} th.</Text>
//                   </View>
//                   <View style={styles.editionCont}>
//                     <Text style={styles.booksHead}>Author</Text>
//                     <Text style={styles.bookstxt}>{item.b_author}</Text>
//                   </View>
//                   <View style={styles.editionCont}>
//                     <Text style={styles.booksHead}>S.Price</Text>
//                     <Text style={styles.bookstxt}>
//                       {item.b_sellingprice}rs.
//                     </Text>
//                   </View>
//                   <View style={styles.editionCont}>
//                     <Text style={styles.booksHead}>MRP</Text>
//                     <Text
//                       style={[
//                         styles.bookstxt,
//                         {textDecorationLine: 'line-through', color: '#c9c9c9'},
//                       ]}>
//                       {item.b_MRP} rs.
//                     </Text>
//                   </View>
//                   <TouchableOpacity style={styles.addBtn}>
//                     <Text
//                       style={{
//                         fontSize: 15,
//                         color: '#000',
//                         fontFamily: globalfonts.font5,
//                       }}>
//                       Remove
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </TouchableOpacity>
//             ))
//           ) : (
//             <Text> No data</Text>
//           )}
//         </ScrollView>
//       )}
//     </View>
//   );
// };

// export default Favorite;




import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {globalfonts} from '../../assets/FrontExport/Frontexport';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'native-base';
import styles from './CssStyles/Favorite';
import {useSelector} from 'react-redux';
import {useGetBookDataQuery} from '../RTKquery/Slices/BookApiSclice';

const Favorite = ({navigation}) => {
  const Likedbookdata = useSelector(state => state.book.bookdata);
  const {data, isLoading} = useGetBookDataQuery();

  if (!data?.allbooks) {
    return <Text>No data available.</Text>;
  }

  const filteredBooks = data.allbooks.filter(book =>
    Likedbookdata.includes(book._id)
  );

  // Log image URLs for debugging
  filteredBooks.forEach(book => {
    if (book.images?.length > 0) {
      console.log('Image URL:', book.images[0].url);
    } else {
      console.log('No image available for book:', book.b_name);
    }
  });

  return (
    <View style={styles.ParentContainer}>
      <TouchableOpacity
        style={{position: 'absolute', left: 20, top: 20}}
        onPress={() => navigation.navigate('profile')}>
        <Ionicons name="arrow-back-sharp" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.headingCont}>
        <Text style={styles.headingTxt}>Favorite Books</Text>
      </View>

      {isLoading ? (
        <Text>Loading Data</Text>
      ) : (
        <ScrollView>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((item, index) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('productbooks', {key: item._id})
                }
                style={styles.allBookContainer}
                key={item._id || index}>
                <View style={styles.productPhoto}>
                  <View style={styles.imgContainer}>
                    {item.images?.length > 0 ? (
                      <Image
                        source={{uri: item.images[0].url}} // Access the URL of the first image
                        style={styles.imgContainer} // Correct style
                      />
                    ) : (
                      <Text>No image available</Text>
                    )}
                  </View>
                </View>
                <View style={styles.productInfo}>
                  <Text
                    style={[styles.booksName]}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.b_name}
                  </Text>
                  <Text
                    style={[styles.bookstxt]}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.b_desc}
                  </Text>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>Edition</Text>
                    <Text style={styles.bookstxt}>{item.b_edition}th</Text>
                  </View>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>Author</Text>
                    <Text style={styles.bookstxt}>{item.b_author}</Text>
                  </View>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>S.Price</Text>
                    <Text style={styles.bookstxt}>{item.b_sellingprice}rs.</Text>
                  </View>
                  <View style={styles.editionCont}>
                    <Text style={styles.booksHead}>MRP</Text>
                    <Text
                      style={[
                        styles.bookstxt,
                        {textDecorationLine: 'line-through', color: '#c9c9c9'},
                      ]}>
                      {item.b_MRP}rs.
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
              </TouchableOpacity>
            ))
          ) : (
            <Text>No favorite books available.</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default Favorite;

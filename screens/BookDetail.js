import React, {useState, useEffect} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const BookDetail = ({route, navigation}) => {
   const [book, setBook] = useState(null);

   useEffect(() => {
      let {book} = route.params;
      setBook(book);
   }, [book])

   const renderBookInfoSection = () => {
      return (
         <View style={{flex: 1}}>
            <ImageBackground
               source={book.bookCover}
               resizeMode='cover'
               style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
            />
            {/* Color overlay */}
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: book.backgroundColor}}></View>

            {/* Navigation header */}
            <View style={{flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 80, alignItems: 'flex-end'}}>
               <TouchableOpacity
                  style={{marginLeft: SIZES.base}}
                  onPress={() => navigation.goBack()}
               >
                  <Image source={icons.back_arrow_icon} resizeMode='contain' style={{width: 25, height: 25, tintColor: book.navTintColor}} />
               </TouchableOpacity>

               <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{...FONTS.h3, color: book.navTintColor}}>Book Detail</Text>
               </View>

               <TouchableOpacity
                  style={{marginRight: SIZES.base}}
                  onPress={() => console.log('pressed more')}
               >
                  <Image
                     source={icons.more_icon}
                     resizeMode='contain'
                     style={{width: 40, height: 22, tintColor: book.navTintColor, alignSelf: 'flex-end'}} />
               </TouchableOpacity>
            </View>

            {/* Book cover */}
            <View style={{flex: 5, paddingTop: SIZES.padding2, alignItems: 'center'}}>
               <Image source={book.bookCover} resizeMode='contain' style={{flex: 1, width: 150, height: 'auto'}} />
            </View>

            {/* Book name and author */}
            <View style={{flex: 1.8, alignItems: 'center', justifyContent: 'flex-end'}}>
               <Text
                  style={{
                     ...FONTS.h2,
                     color: book.navTintColor,
                     textShadowColor: COLORS.black
                  }}>{book.bookName}</Text>
               <Text style={{
                  ...FONTS.body3,
                  color: book.navTintColor
               }}>{book.author}</Text>
            </View>

            {/* Book info */}
            <View style={{
               flexDirection: 'row',
               paddingVertical: 20,
               margin: SIZES.padding2,
               borderRadius: SIZES.radius,
               backgroundColor: 'rgba(0, 0, 0, .3)',
               alignItems: 'center'
            }}>
               {/* Rating */}
               <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={{...FONTS.h2, color: COLORS.white}}>{book.rating}</Text>
                  <Text style={{fontSize: 12, color: COLORS.white}}>Rating</Text>
               </View>

               {/* Pages */}
               <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={{...FONTS.h2, color: COLORS.white}}>{book.pageNo}</Text>
                  <Text style={{fontSize: 12, color: COLORS.white}}>Number of pages</Text>
               </View>

               {/* Language */}
               <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={{...FONTS.h2, color: COLORS.white}}>{book.language}</Text>
                  <Text style={{fontSize: 12, color: COLORS.white}}>Language</Text>
               </View>
            </View>
         </View>
      );
   }

   const renderBookDescription= () => {
      return (
         <View style={{flex: 1, flexDirection: 'row', padding: SIZES.padding2}}>
            {/* Description */}
            <ScrollView
               showsVerticalScrollIndicator={true}
            >
               <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding }}>Description</Text>
               <Text style={{ ...FONTS.body3, color: COLORS.white }}>{book.description}</Text>
            </ScrollView>
         </View>
         
      );
   }

   const renderBottomButtons = () => {
      return (
         <View style={{flex: 1, flexDirection: 'row'}}>
            {/* Bookmark */}
            <TouchableOpacity
               style={{
                  width: 60,
                  backgroundColor: COLORS.secondary,
                  marginVertical: SIZES.base,
                  borderRadius: SIZES.radius,
                  alignItems: 'center',
                  justifyContent: 'center'
               }}
               onPress={() => console.log('pressed bookmark')}
            >
               <Image source={icons.bookmark_icon} renderMode='contain' style={{width: 25, height: 25, tintColor: COLORS.lightGray2}} />
            </TouchableOpacity>

            {/* Start reading */}
            <TouchableOpacity
               style={{
                  flex: 1,
                  backgroundColor: COLORS.primary,
                  marginHorizontal: SIZES.base,
                  marginVertical: SIZES.base,
                  borderRadius: SIZES.radius,
                  alignItems: 'center',
                  justifyContent: 'center'
               }}
               onPress={() => console.log('pressed reading')}
            >
               <Text style={{...FONTS.h3, color: COLORS.white}}>Start Reading</Text>
            </TouchableOpacity>
         </View>
      );
   }


   if (book) {
      return (
         <View style={{flex: 1, backgroundColor: COLORS.black}}>
            {/* Book cover section */}
            <View style={{flex: 4, }}>
               {renderBookInfoSection()}
            </View>

            {/* Description */}
            <View style={{flex: 2}}>
               {renderBookDescription()}
            </View>

            {/* Buttons */}
            <View style={{height: 70, marginBottom: 30, paddingHorizontal: SIZES.padding2}}>
               {renderBottomButtons()}
            </View>
         </View>
      );
   } else {
      return (
         <>
         </>
      );
   }
}

export default BookDetail;
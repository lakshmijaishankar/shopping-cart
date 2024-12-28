import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import {RootStackParamList} from '../types/rootStackParamList';
import {useProductDetails} from '@hooks/index';

const screenWidth = Dimensions.get('screen').width;
type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DetailsScreen'
>;
const DetailsScreen: FC<DetailsScreenProps> = ({
  route: {
    params: {id},
  },
}) => {
  const {isLoading, product} = useProductDetails(id);

  if (isLoading) {
    return <Text className="text-[5rem]">Loading ...</Text>;
  }
  return (
    <View className=" relative flex-1">
      <ScrollView>
        <View className="product-card-container px-2 ">
          <ScrollView
            horizontal
            className="h-[350px] w-full"
            scrollEnabled
            showsHorizontalScrollIndicator>
            <View className="w-full flex flex-row" style={{width: screenWidth}}>
              <Image source={{uri: product?.image}} className="w-full h-full" />
            </View>
            {/* <View className="w-full flex flex-row" style={{width: screenWidth}}>
              <Image
                source={{uri: product?.image}}
                className="w-full h-full object-cover"
              />
            </View> */}
          </ScrollView>
          {/*  <ScrollView
            horizontal
            className="h-[350px] w-full"
            scrollEnabled
            showsHorizontalScrollIndicator>
            <View className="w-full flex flex-row" style={{width: screenWidth}}>
              <Image source={{uri: product?.image}} className="w-full h-full" />
            </View>
            <View className="w-full flex flex-row" style={{width: screenWidth}}>
              <Image
                source={{uri: product?.image}}
                className="w-full h-full object-cover"
              />
            </View>
          </ScrollView> */}
          <Text className="text-[1rem] font-semibold">
            {product?.description}
          </Text>
          {/* <Text className="text-[1rem] font-semibold">
            {product?.description}
          </Text> */}
        </View>
      </ScrollView>
      <View className="flex flex-row  h-14 absolute w-full left-0 bottom-0">
        <View className="flex-1 bg-white flex flex-row justify-center items-center">
          <Text className="text-black text-2xl">Cancel</Text>
        </View>
        <View className="flex-1 bg-yellow-300 flex flex-row justify-center items-center">
          <Text className="text-white text-2xl">Buy</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;

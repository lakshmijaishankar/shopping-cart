import React, {FC} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/rootStackParamList';
// import {useFakeStoreApi, useHttpsStatusCode} from '@hooks/index';
import {useGetProductsQuery} from '@store/api/productsSlice';
import HomeBannerGallery from '@components/homeBanner/homeBanner';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  /* const {data, isLoading} = useFakeStoreApi();
  useHttpsStatusCode(); */
  const {isLoading, data} = useGetProductsQuery();
  console.log('FAKE_STORE_URL', process.env.FAKE_STORE_URL);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View className="bg-white">
      {!!data?.length && (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View className="mt-3 flex-1 bg-white px-1">
              <Image
                source={{
                  uri: item?.image,
                  method: 'GET',
                }}
                className="w-full h-[200px] object-contain"
                blurRadius={2}
              />
              <Text
                className="line-clamp-2 text-center"
                onPress={() =>
                  navigation.navigate('DetailsScreen', {id: item.id})
                }>
                {item?.title}
              </Text>
            </View>
          )}
          keyExtractor={({id}) => id + ''}
          className="px-3 pb-8"
          numColumns={2}
          showsVerticalScrollIndicator
          columnWrapperStyle={{columnGap: 10}}
          ListHeaderComponent={<HomeBannerGallery />}
        />
      )}
    </View>
  );
};

export default HomeScreen;

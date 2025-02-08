import React from 'react';
import ReactNative, {Dimensions} from 'react-native';

const bannerArray: string[] = ['banner-image1.jpg', 'banner-image2.jpg'];
const width = Dimensions.get('window').width;
const HomeBannerGallery = () => {
  return (
    <ReactNative.View>
      <ReactNative.View className="w-full aspect-[3/2] relative">
      </ReactNative.View>
      <ReactNative.Text>HomeBannerGallery</ReactNative.Text>
    </ReactNative.View>
  );
};

export default HomeBannerGallery;

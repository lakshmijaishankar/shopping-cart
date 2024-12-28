import React from 'react';
import ReactNative, {Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const bannerArray: string[] = ['banner-image1.jpg', 'banner-image2.jpg'];
const width = Dimensions.get('window').width;
const HomeBannerGallery = () => {
  return (
    <ReactNative.View>
      <ReactNative.View className="w-full aspect-[3/2] relative">
        <Carousel
          data={bannerArray}
          renderItem={bannerImage => (
            <ReactNative.Image
              source={{
                uri: 'https://londondesignawards.org/upload/entry/files/LDAE123799/30511696992282.jpg',
              }}
              className="w-full h-full object-cover absolute"
            />
            // <ReactNative.Text>{bannerImage.item}</ReactNative.Text>
          )}
          // style={{width: '100%'}}
          vertical={false}
          width={width}
          height={width / 2}
        />
      </ReactNative.View>
      <ReactNative.Text>HomeBannerGallery</ReactNative.Text>
    </ReactNative.View>
  );
};

export default HomeBannerGallery;

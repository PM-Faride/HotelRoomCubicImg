import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
} from 'react-vr';

export default class HotelImg extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('Stitch.jpg')}/>
        {/* <Pano source={{
          uri: [
            '../static_assets/px.jpg',
            '../static_assets/nx.jpg',
            '../static_assets/py.jpg',
            '../static_assets/ny.jpg',
            '../static_assets/pz.jpg',
            '../static_assets/nz.jpg',
          ]
        }}/> */}
      </View>
    );
  }
};

AppRegistry.registerComponent('HotelImg', () => HotelImg);

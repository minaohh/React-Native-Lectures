import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const ImageDetail = ({ title, image }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

ImageDetail.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default ImageDetail;

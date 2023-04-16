import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

const BlogListScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Blog Details')}
        style={styles.card}>
        <View style={styles.subView}>
          <Image
            style={styles.blogImg}
            source={require('../../../assets/favicon.png')}
          />
          <View style={styles.subContainer}>
            <Text style={styles.heading}>
              Multi-award winning journalist James Ball joins Demos as Fellow
            </Text>
            <Text style={styles.subHeading}>DEMOS</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BlogListScreen;

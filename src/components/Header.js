import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Header = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Image style={styles.image} source={require('../assets/arrow.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.rigth} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    zIndex: 1,
  },
  image: {
    width: 34,
    height: 34,
  },
  title: {
    fontSize: 17,
    alignItems: 'center',
  },
  rigth: {
    width: 34,
    height: 34,
  },
});

export default Header;

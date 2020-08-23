import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeaderItem = (props) => {
  const {name, race} = props;

  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        <Text>{name}</Text>
      </View>
      <View style={styles.cell}>
        <Text>{race}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    paddingVertical: 10,
    alignItems: 'center',
    borderColor: '#20232a',
    borderWidth: 1,
    width: '50%',
  },
});

export default HeaderItem;

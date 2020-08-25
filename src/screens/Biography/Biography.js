import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';

const Biography = ({route}) => {
  const {givenName, familyName, dateOfBirth, nationality} = route.params;
  return (
    <View style={styles.container}>
      <Header title={'Biography'} />
      <View>
        <Text style={styles.headerText}>Name</Text>
      </View>
      <View>
        <Text>{`${givenName} ${familyName}`}</Text>
      </View>
      <View>
        <Text style={styles.headerText}>DOB</Text>
      </View>
      <View>
        <Text>{dateOfBirth}</Text>
      </View>
      <View>
        <Text style={styles.headerText}>Nationality</Text>
      </View>
      <View>
        <Text>{nationality}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 17,
  },
});

export default Biography;

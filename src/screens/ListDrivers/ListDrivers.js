import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import {
  fetchDrivers,
  fetchMoreDrivers,
} from '../../store/actions/driversAcrion';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Item from './Item';
import HeaderItem from './HeaderItem';

const ListDrivers = () => {
  const dispatch = useDispatch();
  const drivers_data = useSelector((state) => state.drivers);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchDrivers());
  }, [dispatch]);

  const loadMoreData = () => {
    dispatch(fetchMoreDrivers({offset: drivers_data.offset}));
  };

  const renderItem = ({item}) => {
    const {driverId, givenName, familyName, dateOfBirth, nationality} = item;

    return (
      <Item
        item={item}
        onPressNavigationBiography={() => {
          navigation.navigate('Biography', {
            givenName,
            familyName,
            dateOfBirth,
            nationality,
          });
        }}
        onPressNavigationRaceResult={() => {
          navigation.navigate('RaceResult', {
            driverId,
            givenName,
            familyName,
          });
        }}
      />
    );
  };

  if (drivers_data.isLoading) {
    return (
      <View style={styles.containerIndicator}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const footerComponents = () => {
    return drivers_data.list_drivers.length < drivers_data.total ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : null;
  };

  if (drivers_data.error) {
    return (
      <View style={styles.containerError}>
        <Text>{drivers_data.error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderItem name={'Driver Name'} race={'Race Results'} />
      <FlatList
        data={drivers_data.list_drivers}
        renderItem={renderItem}
        keyExtractor={(item) => item.driverId}
        onEndReachedThreshold={0.1}
        onEndReached={loadMoreData}
        ListFooterComponent={footerComponents}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerError: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
});

export default ListDrivers;

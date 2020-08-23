/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {
  fetchRaces,
  fetchMoreRaces,
  clearRaces,
} from '../../store/actions/raceAction';
import Item from './Item';

const RaceResult = ({route}) => {
  const dispatch = useDispatch();
  const races_data = useSelector((state) => state.races);

  const {driverId, givenName, familyName} = route.params;

  useEffect(() => {
    dispatch(fetchRaces({driverId}));

    return () => {
      dispatch(clearRaces());
    };
  }, []);

  const loadMoreData = () => {
    if (races_data.list_race.length < races_data.total) {
      dispatch(fetchMoreRaces({driverId, offset: races_data.offset}));
    }
  };

  if (races_data.isLoading) {
    return (
      <View style={styles.containerIndicator}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  const footerComponents = () => {
    return races_data.list_race.length < races_data.total ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : (
      <View style={styles.footer} />
    );
  };

  if (races_data.error) {
    return (
      <View style={styles.container}>
        <Text>{races_data.error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerInfo}>
        <Text>
          {givenName} {familyName}
        </Text>
      </View>
      <FlatList
        data={races_data.list_race}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        onEndReachedThreshold={0.1}
        onEndReached={loadMoreData}
        ListFooterComponent={footerComponents}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerInfo: {
    padding: 10,
  },
  containerIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 20,
  },
  footer: {
    height: 30,
  },
});

export default RaceResult;

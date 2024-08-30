import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import CustomCard from '../components/Card';

const FeedPage = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [feedData, setFeedData] = useState([1, 2, 3, 4, 4, 5, 6, 7, 9]);

  const onRefresh = () => {
    setRefreshing(true);

    // Simulate a network request or data update
    setTimeout(() => {
      // Here you would fetch new data and update the state
      // For demonstration, we'll just shuffle the array
    //   setFeedData(prevData => [...prevData].sort(() => Math.random() - 0.5));
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.feedContainer}>
      <FlatList
        data={feedData}
        renderItem={({ item }) => <CustomCard key={item} />}
        keyExtractor={(item) => item.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};

export default FeedPage;

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
  },
});

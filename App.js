import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform } from 'react-native';
import { notifications } from './src/data/mockData';
import NotificationItem from './src/components/NotificationItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Thông báo</Text>
      </View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NotificationItem item={item} />}
        contentContainerStyle={styles.listContent}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 30 : 0, // Quick fix for Android status bar
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  },
});

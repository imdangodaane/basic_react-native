import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from './Header';
import { Feed } from './Feed';

export default class App extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Header />
                <Feed />
            </ScrollView>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'stretch',
        // justifyContent: 'flex-start',
    },
});

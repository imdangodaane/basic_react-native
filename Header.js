import React from 'react';
import { StyleSheet, Text, View, PixelRatio } from 'react-native';

export class Header extends React.Component {
    render () {
        return (
            <View>
                <View style={styles.header_bar}>
                    <Text style={styles.header_bar_text}>Basic React Native App</Text>
                </View>
                <View style={styles.header_titleBar}>
                    <Text style={styles.header_titleText}>Top Ten Movies of IMDB</Text>
                </View>
            </View>
        );
    }
}

var HEADER_FONT_SIZE = 30;
var HEADER_HEIGHT = 85;
var HEADER_TITLE_FONT_SIZE = 20;

if (PixelRatio.get() <= 2) {
    HEADER_FONT_SIZE = 15;
    HEADER_HEIGHT = 40;
    HEADER_TITLE_FONT_SIZE = 12;
}

const styles = StyleSheet.create({
    header_bar: {
        height: HEADER_HEIGHT,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    header_bar_text: {
        fontSize: HEADER_FONT_SIZE,
        color: 'white',
    },
    header_titleBar: {
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_titleText: {
        fontSize: HEADER_TITLE_FONT_SIZE,
    }
});

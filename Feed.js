import React from 'react';
import { StyleSheet, Text, View, PixelRatio } from 'react-native';
import { Post } from './Post';
import Info from './Info.json';

export class Feed extends React.Component {
    render () {
        var movieList = [];
        for (let i = 0; i < Info.length; i++) {
            var title = Info[i].title;
            var image = Info[i].image;
            var url = Info[i].url;
            movieList.push(
                <View key={i}>
                    <Post title={title} image={image} url={url}/>
                </View>
            );
        }
        return (
            <View style={{
                margin: 5,
            }}>
                { movieList }
            </View>
        );
    }
}

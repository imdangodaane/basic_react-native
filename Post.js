import React from 'react';
import { StyleSheet, Text, View, PixelRatio, Dimensions, Image, Button, Linking } from 'react-native';

export class Post extends React.Component {
    render () {
        return (
            <View>
                <View style={styles.postContainer}>
                    <View style={styles.postMargin}>
                        <Text style={styles.postTitle}>{this.props.title}</Text>
                    </View>
                    <View
                        style={{
                            borderBottomWidth: 0.5,
                            borderBottomColor: 'hsla(0, 0%, 0%, 0.5)',
                        }}
                    />
                    <View style={styles.postMargin}>
                        <Image
                            style={styles.postImage}
                            source={{uri: this.props.image}}
                        />
                    </View>
                    <View style={styles.postMargin}>
                        <Button
                            onPress={() => Linking.openURL(this.props.url)}
                            title="More Info"
                        />
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 10,
                    }}
                />
            </View>
        );
    }
}

var POST_TITLE_SIZE = 18;
var screenWidth = Math.round(Dimensions.get('window').width);
var MARGIN_NUMBER = 5;

const styles = StyleSheet.create({
    postContainer: {
        borderWidth: 0.5,
        borderColor: 'hsla(0, 0%, 0%, 0.5)',
    },
    postMargin: {
        margin: MARGIN_NUMBER,
    },
    postTitle: {
        fontSize: POST_TITLE_SIZE,
    },
    postImage: {
        width: screenWidth - MARGIN_NUMBER * 4,
        height: screenWidth,
    },
});

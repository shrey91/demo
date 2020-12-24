import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, View, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Card, Text } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = (page) => {
    navigation.navigate(page);
  };

  const DATA = [
    {
        id: '1',
        title: 'Work History',
        imageSrc: require('../extras/images/work.jpg'),
        pageName: 'Details'
    },
    {
        id: '2',
        title: 'About Me',
        imageSrc: require('../extras/images/about.jpg'),
        pageName: 'Play'
    },
    {
        id: '3',
        title: 'Contact',
        imageSrc: require('../extras/images/contact.jpg'),
        pageName: 'Contact'
    },
    {
        id: '4',
        title: 'Settings',
        imageSrc: require('../extras/images/settings.jpg'),
        pageName: 'Settings'
    },
  ];

  const Item = ({ title, fullItem }) => (
    <TouchableHighlight style={styles.item} onPress={() => navigateDetails(fullItem.pageName)}>
        <ImageBackground
                source={fullItem.imageSrc}
                style={styles.imageContain}
                on>
                <Text style={styles.text}>{title}</Text>
            </ImageBackground>
    </TouchableHighlight>
  );

const renderItem = ({ item }) => (
    <Item title={item.title} fullItem={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
    <TopNavigation title='Shreyansh Shah' alignment='center'/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

    color: {
        backgroundColor: 'red'
    },
    imageContain:{
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        height: '100%'
      },
      item: {

        marginVertical: 2,
        marginHorizontal: 8,
        height: Dimensions.get('window').height / 4
      },
      title: {
        fontSize: 32,
      }
  });
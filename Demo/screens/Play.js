import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView
} from "react-native";
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Card, List } from '@ui-kitten/components';
const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
  );

export const Play = ({ navigation }) => {

    const navigateBack = () => {
        navigation.goBack();
      };
    
      const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
      );

const DATA = ['Introduction', 'Development Languages', 'Spoken Languages', 'Hobbies' ];


const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category='h6'>
        {info.item}
      </Text>
    </View>
  );

const getFooterItem = (footerProps) => (<Text {...footerProps}></Text>)

const getDescription = (info) => {
    switch (info.item) {
        case "Introduction":
                  return (<Text>
                      Hi! I'm Shreyansh Shah or Shrey. I'm a 29 yr old Software Developer that moved to NZ in 2010 and has called this beatiful country home for the last 10 years. 
                      I built this app to showcase my understanding of basic React Native. This app was created in the space of 2-3 hours
                  </Text>)
          case "Development Langugages":
            return (<Text>
                      My current dev language portfolio includes Java, React, React Native, Python, C#, ASP.NET, Spring, Thymeleaf, MySQL, Hibernate.
                  </Text>)
              case "Spoken Languages":
                return (<Text>
                      I am fluent in English, Hindi, Marathi, Gujurati and Marwadi. I am currently learning or can read and understand Spanish, Swedish and French
                  </Text>)
              case "Hobbies":
                return (<Text>
                      In my spare time I enjoy drawing, gaming (mainly FIFA, not really good at many other games), fixing/repairing devices and playing football/futsal.
                  </Text>)
        default:
            break;
    }
  }

  const renderItem = (info) => (
    <Card
      style={styles.item}
      status='success'
      header={headerProps => renderItemHeader(headerProps, info)}
      footer={props => getFooterItem(info)}>
        {getDescription(info)}
    </Card>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='About Me' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={{ flex: 1}}>
      <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={DATA}
      renderItem={renderItem}
    />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      maxHeight: "100%",
    },
    contentContainer: {
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    item: {
      marginVertical: 4,
    },
    footer: {
        paddingVertical: 4,
        paddingHorizontal: 20
    }
  });

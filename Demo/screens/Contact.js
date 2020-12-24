import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Linking,
  Text
} from "react-native";
import { Divider, Icon, Layout, TopNavigation, TopNavigationAction, Card, List } from '@ui-kitten/components';
import {ThemeContext} from '../theme/ThemeContext';
const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
  );

export const Contact = ({ navigation }) => {

    const navigateBack = () => {
        navigation.goBack();
      };
    
      const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
      );



const renderItemHeader = (headerProps) => (
    <View {...headerProps}>
      <Text style={{color: getTextColor() ? 'black' : 'white', fontSize: 20}}>
        Get In Touch
      </Text>
    </View>
  );

const getFooterItem = (footerProps) => (<Text {...footerProps}></Text>);
const themeContext = React.useContext(ThemeContext);

const getTextColor = () => {
    return themeContext.theme === 'light'
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Contact Me' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={{ flex: 1}}>
      <Card
      style={styles.item}
      status='success'
      header={headerProps => renderItemHeader(headerProps)}
      footer={props => getFooterItem()}>
        <View>
            <View style={styles.content}>
            <Text style={{color: getTextColor() ? 'black' : 'white'}}>
                Phone: +64212842309
            </Text>
            </View>
            <Divider />
            <View style={styles.content}>
            <Text style={{color: getTextColor() ? 'black' : 'white'}}>
                Email: ashshreyansh@gmail.com
            </Text>
            </View>
            <Divider />
            <View style={styles.content}>
            <Text style={{color: getTextColor() ? 'black' : 'white'}} onPress={() => Linking.openURL('https://www.linkedin.com/in/shreyansh-shah-078288ba')}>
                LinkedIn: Shreyansh Shah (Click Me)
            </Text>
            </View>
        </View>
    </Card>
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
    header:{
        fontSize: 20
    },
    footer: {
        paddingVertical: 4,
        paddingHorizontal: 20
    },
    content:{
        marginVertical: 10,
    },
  });

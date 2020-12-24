import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeContext } from '../theme/ThemeContext';
import { Avatar, Button, ListItem, CheckBox, Layout, TopNavigation, TopNavigationAction, Icon} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from "../redux/actions/action";

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
  );

export const Settings = ({ navigation }) => {

    const navigateBack = () => {
        navigation.goBack();
      };
    
      const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
      );


  const themeContext = React.useContext(ThemeContext);
  
  const ItemImage = (props) => (
    <Avatar
      {...props}
      style={[props.style, { tintColor: null }]}
      source={themeContext.theme !== 'light' ? require('../extras/images/moon.png') : require('../extras/images/sun.png')}
    />
  );

  const ButtonOption = (props) => (
    <Button size='tiny' style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>TOGGLE THEME</Button>
  )
  
  return (
    <Layout style={{flex: 1}}>
        <TopNavigation title='Settings' alignment='center' accessoryLeft={BackAction}/>
    <ListItem title={themeContext.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      description={themeContext.theme === 'light' ? 'Change to dark mode' : 'Change to light mode'}
        accessoryLeft={ItemImage}
        accessoryRight={ButtonOption}
        />
      </Layout>
    
  );

}
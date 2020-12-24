import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Card, List } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const DetailsScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const data = ['Liverton Limited', 'Ticketmaster - Box Office', 'Ticketmaster - IT Field Tech', 'Business Mechanix' ,'Krishna Garments'];


  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category='h6'>
        {info.item}
      </Text>
    </View>
  );

  const getFooterItem = (footerProps) => {
      switch (footerProps.item) {
          case "Liverton Limited":
                    return(<Text {...footerProps} style={styles.footer}>
                        July 2016 - Present
                    </Text>)
                    break;
            case "Ticketmaster - Box Office":
                return(<Text {...footerProps} style={styles.footer}>
                        March 2011 - Present
                    </Text>)
                break;
                case "Ticketmaster - IT Field Tech":
                    return(<Text {...footerProps} style={styles.footer}>
                        Oct 2015 - June 2016
                    </Text>)
                break;
                case "Business Mechanix":
                    return(<Text {...footerProps} style={styles.footer}>
                        March 2015 - Nov 2015
                    </Text>)
                break;
                case "Krishna Garments":
                    return(<Text {...footerProps} style={styles.footer}>
                        2005 - Sept 2010
                    </Text>)
                break;
          default:
              break;
      }
  }

  const getJobDescription = (info) => {
    switch (info.item) {
        case "Liverton Limited":
                  return (<Text>
                      Currently work as a Software Developer for Liverton on Automated Check In/Out Kiosks (Smartcheck), Pay-as-you-go Internet (Liverton Networks/Vistagate) and Cashless Payment Systems(Wayver).
                      My duties here involve in adding new features, new hardware devices to our existing products, working with clients on product requirements and not limited to maintaining and rolling out updates
                      to all our products.
                      Current language portfolio includes React, React Native, Thymeleaf, Java, Python, C#, Spring, MySQL, Hibernate and MongoDB
                  </Text>)
          case "Ticketmaster - Box Office":
            return (<Text>
                      This has been my first job since arriving in New Zealand and I continue to work casually for Ticketmaster as and when they require me. Over the years my role has evolved from a ticket seller at events,
                        to box office supervisor and even as acting box office manager. My current duties involve looking after and training large number of staff, being the point of escalation on event days and large cash handling.
                  </Text>)
              case "Ticketmaster - IT Field Tech":
                return (<Text>
                      Though a short stint at a field tech, my role included UAT for the Ticketmaster iOS app and mantaining a list of issues, setting up box offices with appropriate equipment, 
                      configuring equipment as and when required and troubleshooting hardware issues.
                  </Text>)
              case "Business Mechanix":
                return (<Text>
                      Worked as an intern thorugh a university Research and Development project along with 3 others from my course. I was a front-end developer for Business Mechanix on their upcoming (at the time) portal.
                      My role in the team and for Business Mechanix was to develop a good looking UI while occassionally connecting the UI to the back-end using ASP.NET. 
                      Unfortunately, after we finished our project for the academic year, Business Mechanix decided not to proceed with the project and it never saw the light of day.
                  </Text>)
              case "Krishna Garments":
                return (<Text>
                      Worked as a manager and salesman for this clothing store in India. My duties as a manager consisted of stock keeping, customer escalations, money handling and looking after and training new staff.
                  </Text>)
        default:
            break;
    }
  }

  const renderItem = (info) => (
    <Card
      style={styles.item}
      status='primary'
      header={headerProps => renderItemHeader(headerProps, info)}
      footer={props => getFooterItem(info)}>
        {getJobDescription(info)}
    </Card>
  );


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Work History' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={{ flex: 1}}>
      <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
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
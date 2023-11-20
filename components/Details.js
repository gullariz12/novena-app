import React from 'react';
import { View, Image, ScrollView, SectionList, Text, StyleSheet } from 'react-native';
import PageContent from '../assets/details.json'

const Details = ({ route }) => {

  const Item = ({ name, detail }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemHeading}>{name}</Text>
      <Text style={menuStyles.itemText}>{detail}</Text>
    </View>
  );

  const Separator = () => <View style={menuStyles.separator} />;

  const renderItem = ({ item }) => <Item name={item.name} detail={item.detail} />;

  const SectionFooter = () => (
    <View style={styles.section}>
      {PageContent['footer'].map((text, i) => (
        i == 0 ? <Text key={i} style={styles.innerText}>{text}</Text> : <Text key={i} style={styles.innerText}>{text[0]}</Text>
      ))}
    </View>
  );

  const { page } = route.params

  return (
    <ScrollView style={menuStyles.container}>
      {
        page == 'history' ?
          <Image
            style={styles.image}
            source={require('../assets/history.png')}
            accessibilityLabel={'History'}
          />
        :
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={PageContent['topRepeater']}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
        />
      }
      <View style={styles.mainContent}>
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={PageContent[page]}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
        />
      </View>
      {
        page !== 'history'
        ?
        <>
          <SectionFooter />
          {PageContent['bottomRepeater'][0]['prayerTable'].map((rowData, index) => (
            <View key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <View key={cellIndex} style={styles.cell}>
                  <Text style={index == 0 ? styles.headerText : styles.text}>{cellData}</Text>
                </View>
              ))}
            </View>
          ))}
          <View>
            <SectionList
              keyExtractor={(item, index) => item + index}
              sections={PageContent['bottomRepeater']}
              renderItem={renderItem}
              ItemSeparatorComponent={Separator}
            />
          </View>
        </>
        : ''
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 16
  },
  innerText: {
    fontSize: 16,
    marginBottom: 8,
    color: 'grey'
  },
  row: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#c8e1ff',
    marginHorizontal: 10
  },
  cell: {
    flex: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#c8e1ff',
    padding: 8
  },
  text: {
    textAlign: 'center'
  },
  headerText: {
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'white',
    padding: 8
  },
  image: {
    width: '100%',
    height: 280
  }
});

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 10
  },
  innerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  itemText: {
    color: 'grey',
    fontSize: 16,
    padding: 10,
  },
  itemHeading: {
    color: "white",
    backgroundColor: 'red',
    textAlign: 'center',
    fontSize: 18,
    padding: 5,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 50
  }
});

export default Details;

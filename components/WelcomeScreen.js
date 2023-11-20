import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function WelcomeScreen({ navigation }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/adaptive-icon.png')}
        accessibilityLabel={'History'}
      />
      <View style={styles.header}>
        <View style={styles.innerContainer}>
          <TouchableWithoutFeedback onPress={toggleDropdown}>
            <Text><AntDesign name={!isDropdownVisible ? "down" : "up"} size={18} color="white" /></Text>
          </TouchableWithoutFeedback>
          <TouchableOpacity
            onPress={() => navigation.navigate('مادر مریم آبا دکا نو و بینه')}
          >
            <Text style={{textAlign: 'left', color: 'white', fontSize: 18}}>مادر مریم آبا دکا نو و بینه</Text>
          </TouchableOpacity>
        </View>
        {isDropdownVisible && (
          <View style={styles.dropdownContent}>
            <TouchableOpacity
              onPress={() => navigation.navigate('History', { page: 'history' })}
            >
              <Text style={{textAlign: 'right', color: 'white', fontSize: 18}}>تاریخی پس منظر</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    margin: 10,
    marginVertical: 40,
    padding: 16,
    paddingVertical: 20,
    backgroundColor: '#24A173',
    borderColor:  '#24A173',
    borderWidth: 2,
    borderRadius: 15,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  dropdownContent: {
    marginTop: 10
  },
  image: {
    width: '100%',
    resizeMode: 'contain'
  }
});

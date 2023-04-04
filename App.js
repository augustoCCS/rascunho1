import React from 'react';
import { View, Text, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';

const HomePage = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>divino amor</Text>
        <View style={styles.buttoncuston}>
         <TouchableOpacity style={styles.button1}>
        <Text style={styles.buttonText1}>Botão</Text>
      </TouchableOpacity>
         <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>Botão</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
        <Text style={styles.buttonText3}>Botão</Text>
      </TouchableOpacity>
      </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
        <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
        <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
        
        <View style={styles.info}>
    <Text style={styles.infoText}>informaçoes/
    comi o cu de quem ta lendo
    </Text>
</View>    
      </ScrollView>
    </View>
  );
};

const styles = {
  header: {
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttoncuston: {
  flexDirection: 'row',
  },

  info: {
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
    infoText: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  scrollView: {
    padding: 80,
    alignItems: 'center',
  },
  button1: {
    flexDirection: 'row',
    backgroundColor: '#ccc',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
  },
  button2: {
    flexDirection: 'row',
    backgroundColor: '#ccc',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
  },
    button3: {
    flexDirection: 'row',
    backgroundColor: '#ccc',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
   },
  buttonText1: {
    flexDirection: 'row',
    
  },
  buttonText2: {
    flexDirection: 'row',
    
  },
    buttonText3: {
     flexDirection: 'row',
    
  },
};

export default HomePage;

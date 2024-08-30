import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const IssuePreview = () => {
    const handleSubmit=()=>{

    }
  return (
    <View style={styles.issueContainer}>
      <ScrollView>
        <Text style={styles.header}>
          Pot hole in the main road in the main road in the center of Halasuru.
          Please fix this.
        </Text>

        <View style={styles.cardHeader}>
          <View style={styles.cardTitleContainer}>
            <Image
              source={require('../public/images/metro.png')}
              style={styles.cardTitleImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Bangalore Traffic Police</Text>
              <Text style={styles.cardSubTitle}>Just now</Text>
            </View>
          </View>
          <Text style={styles.tagText}>Severe</Text>
        </View>

        <Image
          style={styles.cardImage}
          source={require('../public/images/CardImage.png')}
        />

        <Text style={styles.cardDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </ScrollView>
      <View>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Handle the issue</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default IssuePreview;

const styles = StyleSheet.create({
  issueContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontFamily: 'Archivo-ExtraBold',
    color: '#112D4E',
    paddingTop: 80,
    fontSize: 30,
  },
  textContainer: {
    marginLeft: 10,
  },
  cardTitleImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  cardImage: {
    width: '100%',
    height: 400,
    marginVertical: 10,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Archivo-Bold',
    color: '#112D4E',
  },
  cardSubTitle: {
    fontSize: 12,
    color: '#3F72AF',
    fontFamily: 'Archivo-Regular',
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  tagText: {
    color: '#fff',
    fontFamily: 'Archivo-Regular',
    backgroundColor: 'red',
    height: 30,
    width: 80,
    textAlign: 'center',
    padding: 4,
    borderRadius: 10,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 400,
    marginVertical: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardDescription: {
    fontFamily: 'Archivo-Regular',
    fontSize: 20,
    color: '#112D4E',
    lineHeight:30
  },
  button: {
    backgroundColor: '#112D4E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 20,
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'semibold',
  },
});

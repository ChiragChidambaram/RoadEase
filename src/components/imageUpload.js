import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ImageUpload = (props) => {
  const {setBase64Image}=props;
  const [imageUri, setImageUri] = useState(null);
  const [filename,SetFilename] = useState(null);

  const selectImage = () => {
    launchImageLibrary(
      { 
        mediaType: 'photo', 
        includeBase64: true  // Include base64 in the response
      }, 
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.assets && response.assets.length > 0) {
          const { uri, base64 } = response.assets[0];
          SetFilename(response.assets[0].fileName)
          setImageUri(uri);
          setBase64Image(base64);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Select an image"
        placeholderTextColor="#999"  // Set placeholder text color
        onFocus={selectImage}  // Open the image picker when the input is focused
        value={imageUri}
      />
    </View>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#F1F1F1',
    backgroundColor:'#F1F1F1',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    color: '#000',  // Text color inside the input field
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginTop: 20,
  },
});

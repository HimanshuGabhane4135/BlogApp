import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import styles from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const HomeScreen = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [imageType, setImageType] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorDescription, setAuthorDescription] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = () => {
    // Handle form submission here
  };

  const handleImage = async () => {
    Alert.alert(
      'Alert ',
      'Please upload an Image',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Select from Gallery',
          onPress: async () => {
            handleGallery();
          },
        },
        {
          text: 'Take Photo',
          onPress: async () => {
            handlePhoto();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const handlePhoto = () => {
    console.log('Callleeddd');
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
        cameraRoll: true,
        waitUntilSaved: true,
      },
    };

    launchCamera(options, response => {
      console.log('response', response);
      if (response.didCancel) {
        setIsModalVisible(false);
      } else if (response.error) {
        setIsModalVisible(false);
      } else if (response.customButton) {
      } else {
        console.log('responseCamera', response?.assets[0]);
        let source = {uri: response?.assets[0]?.uri};
        let nameImage = response?.assets[0]?.fileName;
        let nameUri = response?.assets[0]?.uri;
        let namePath = response?.assets[0]?.uri;
        let nameType = response?.assets[0]?.type;
        setCoverImage(source);
        setImageName(nameImage);
        setImageUri(nameUri);
        setImagePath(namePath);
        setImageType(nameType);
        setIsModalVisible(false);
      }
    });
  };

  const handleGallery = () => {
    console.log('Callleeddd');
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
        cameraRoll: true,
        waitUntilSaved: true,
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        setIsModalVisible(false);
      } else if (response.error) {
        setIsModalVisible(false);
      } else if (response.customButton) {
      } else {
        console.log('responseLibrary', response);
        let source = {uri: response?.assets[0]?.uri};
        let nameImage = response?.assets[0]?.fileName;
        let nameUri = response?.assets[0]?.uri;
        let namePath = response?.assets[0]?.uri;
        let nameType = response?.assets[0]?.type;
        setCoverImage(source);
        setImageName(nameImage);
        setImageUri(nameUri);
        setImagePath(namePath);
        setImageType(nameType);
        setIsModalVisible(false);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      <Text style={styles.label}>Slug:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSlug}
        value={slug}
        multiline={true}
      />
      <View style={styles.subView}>
        <Text style={styles.labelImage}>Cover Image:</Text>
        <TouchableOpacity onPress={() => handleImage()}>
          <Text style={styles.uploadBtn}>Upload Image</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Content:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setContent}
        value={content}
        multiline={true}
      />
      <Text style={styles.label}>Author Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAuthorName}
        value={authorName}
      />
      <Text style={styles.label}>Author Description:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAuthorDescription}
        value={authorDescription}
        multiline={true}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default HomeScreen;

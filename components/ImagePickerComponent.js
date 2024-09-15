import React from "react";
import { Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImagePickerComponent = ({ onImagePicked }) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onImagePicked(result.uri);
    }
  };

  return <Button title="이미지 선택" onPress={pickImage} />;
};

export default ImagePickerComponent;

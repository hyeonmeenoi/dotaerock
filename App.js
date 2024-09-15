import React, { useState, useEffect } from "react";
import { View, Button, Image, Text } from "react-native";
import * as tf from "@tensorflow/tfjs-react-native"; // 수정된 부분
import "@tensorflow/tfjs-react-native"; // TensorFlow.js React Native 지원 패키지
import ImagePickerComponent from "./components/ImagePickerComponent";
import { convertImageToTensor } from "./utils/imageHelper";

export default function App() {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      await tf.ready();
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  const classifyImage = async (imageUri) => {
    const imageTensor = await convertImageToTensor(imageUri);
    const predictions = await model.classify(imageTensor);
    setPrediction(predictions[0].className);
  };

  return (
    <View>
      <ImagePickerComponent onImagePicked={classifyImage} />
      {prediction && <Text>예측 결과: {prediction}</Text>}
    </View>
  );
}

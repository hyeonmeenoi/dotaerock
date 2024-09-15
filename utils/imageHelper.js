import * as tf from "@tensorflow/tfjs-react-native";

export const convertImageToTensor = async (uri) => {
  const response = await fetch(uri);
  const imageData = await response.blob();
  const image = await tf.browser.fromPixels(imageData);
  return tf.image.resizeBilinear(image, [224, 224]).expandDims(0).div(255.0);
};

import path from 'path';
import * as tf from '@tensorflow/tfjs-node';
import sharp from 'sharp';

class PredictService {

  predictLetter = async (pathImg: string) => {
    const modelPath = path.resolve(__dirname, '../../../core/IAModel/vgg19/model.json');
    const model = await tf.loadGraphModel(`file://${modelPath}`);
    // Cargar la imagen y preprocesarla
    const imageBuffer = path.resolve(__dirname, `../../../../${pathImg}`);
    const tensor = await sharp(imageBuffer)
      .resize(56, 56)
      .normalise()
      .toFormat('png')
      .toBuffer()
      .then((buffer: any) => tf.node.decodePng(buffer));
    const tensorFormat = tf.expandDims(tensor, 0).cast('float32');
    console.log(tensorFormat);
    // Hacer la predicción con el modelo
    const predictions = model.predict(tensorFormat) as tf.Tensor<tf.Rank>;
    const predictedClass = Number(predictions.argMax(1).dataSync());

    // Devolver la predicción al usuario
    const parsePredict: {
      [key: number]: string
    } = {
      0: 'A',
      1: 'B',
      2: 'C',
      3: 'D',
      4: 'E',
      5: 'F',
      6: 'G',
      7: 'H',
      8: 'I',
      9: 'J',
      10: 'L',
      11: 'K',
      12: 'M',
      13: 'N',
      14: 'O',
      15: 'P',
      16: 'Q',
      17: 'R',
      18: 'S',
      19: 'T',
      20: 'U',
      21: 'V',
      22: 'W',
      23: 'X',
      24: 'Y',
      25: 'Z',
      26: 'del',
      27: 'nothing',
      28: 'space',
    };
    return { predict: parsePredict[predictedClass], value: predictedClass };
  }
}

export default new PredictService();
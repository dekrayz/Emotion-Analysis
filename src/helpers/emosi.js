const emosiMap = {
  angry: "marah",
  disgusted: "jijik",
  fearful: "takut",
  happy: "senang",
  neutral: "netral",
  sad: "sedih",
  surprised: "terkejut",
  male: "male",
  female: "female",
};

export const mapExpressionToEmosi = expression => emosiMap[expression];

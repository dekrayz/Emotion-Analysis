const emosiMap = {
  angry: "marah",
  disgusted: "jijik",
  fearful: "takut",
  happy: "senang",
  neutral: "netral",
  sad: "sedih",
  surprised: "terkejut",
  male: "laki-laki",
  female: "perempuan",
};

export const mapExpressionToEmosi = expression => emosiMap[expression];

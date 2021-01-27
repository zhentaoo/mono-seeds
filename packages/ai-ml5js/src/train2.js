// Step 1: load data or create some data
const data = [
  { r: 255,  color: "red-ish" },
  { r: 254, color: "red-ish" },
  { r: 253, color: "red-ish" },
  { r: 0,  color: "blue-ish" },
  { r: 1,  color: "blue-ish" },
  { r: 2,  color: "blue-ish" },
  { r: 3,  color: "blue-ish" },
  { r: 4,  color: "blue-ish" },
  { r: 5,  color: "blue-ish" },
  { r: 6,  color: "blue-ish" },
  { r: 7,  color: "blue-ish" },
  { r: 8,  color: "blue-ish" },
];

// Step 2: set your neural network options
// Step 3: initialize your neural network
const nn = ml5.neuralNetwork({
  task: "classification",
  debug: true,
});

// Step 4: add data to the neural network
data.forEach((item) => {
  const inputs = {
    r: item.r,
  };
  const output = {
    color: item.color,
  };

  nn.addData(inputs, output);
});

// Step 5: normalize your data;
nn.normalizeData();

// Step 6: train your neural network
const trainingOptions = {
  epochs: 32,
  batchSize: 12,
};

console.log('nn:', nn);
console.log('data:', data);

// nn.train(trainingOptions, finishedTraining);
nn.train(trainingOptions, () => {
  nn.classify(
    {
      r: 0,
    },
    (error, result) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("rx: ", result); // {label: 'red', confidence: 0.8};
    }
  );
});

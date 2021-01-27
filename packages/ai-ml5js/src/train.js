// Step 1: load data or create some data
const data = [
  { r: 255, g: 0, b: 0, color: "red-ish" },
  { r: 254, g: 0, b: 0, color: "red-ish" },
  { r: 253, g: 0, b: 0, color: "red-ish" },
  { r: 0, g: 0, b: 255, color: "blue-ish" },
  { r: 0, g: 0, b: 254, color: "blue-ish" },
  { r: 0, g: 0, b: 253, color: "blue-ish" },
  { r: 0, g: 0, b: 252, color: "blue-ish" },
  { r: 0, g: 0, b: 251, color: "blue-ish" },
  { r: 0, g: 0, b: 256, color: "blue-ish" },
  { r: 0, g: 0, b: 257, color: "blue-ish" },
  { r: 0, g: 0, b: 258, color: "blue-ish" },
  { r: 0, g: 0, b: 259, color: "blue-ish" },
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
    g: item.g,
    b: item.b,
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
      g: 0,
      b: 255,
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





// Step 7: use the trained model
function finishedTraining() {
  classify();
}

// Step 8: make a classification
function classify() {
  const input = {
    r: 255,
    g: 0,
    b: 0,
  };
  nn.classify(input, handleResults);
}

// Step 9: define a function to handle the results of your classification
function handleResults(error, result) {
  if (error) {
    console.error(error);
    return;
  }
  console.log("r: ", result); // {label: 'red', confidence: 0.8};
}

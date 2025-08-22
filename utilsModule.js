
function greet(name) {
  return `Hello, ${name}!`;
}

const mathTools = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b,
};

exports.greet = greet;
exports.tools = {
  math: mathTools,
  version: "1.0.0",
};

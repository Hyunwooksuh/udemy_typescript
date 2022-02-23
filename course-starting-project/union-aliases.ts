type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

// 1. 유니언 타입, 2. 리터럴 타입
function comebine(
  input1: Combinable, 
  input2: Combinable, 
  resultConversion: ConversionDescriptor
) {
    let result;
  if (typeof input1 === "number" 
    && typeof input2 === "number"
    || resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = comebine(30, 26, "as-number");
const combinedStringAges = comebine("30", "26", "as-number");
const combinedNames = comebine("Wook", "Max", "as-text");

console.log(combinedAges, combinedStringAges ,combinedNames);


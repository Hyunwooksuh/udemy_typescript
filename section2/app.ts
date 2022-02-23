let userInput: unknown;
let userName: string;

userInput = "Max";

if (typeof userInput === 'string') {
  userName = userInput;
  console.log(userName);
}

function generateError(message: string, code: number) {
  // throw { message: message, errorCode: code };  
}

generateError("An error occured", 500);

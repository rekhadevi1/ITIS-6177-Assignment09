export const handler = async (event) => {
  
  const input = event.queryStringParameters.keyword;
  console.log('Input is ',input);
  let output = printmessage(input);
  return output;
    
  function printmessage(input){
    let result = "Rekhadevi Bhoopatiraju says ".concat(input);
    return result;
  }
};



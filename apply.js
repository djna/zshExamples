
const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let regex = /(?<first>\d)(?<second>\d+)/g;
  for await (const line of rl) {
  
    console.log(`Line: ${line}`);
    let result = regex.exec(line);
    if ( ! result ){
        console.log("No match");
    } else {
        do {
            for (let i = 0; i < result.length; i++) {
              console.log(`group ${result[i]}`)
            }
            console.log(`first: ${result.groups.first} second: ${result.groups.second}`)
      
        } while (result = regex.exec(line))
    }

  }
}

processLineByLine();

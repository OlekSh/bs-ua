import fs from 'fs';
import path from 'path';

const messageDirectory = path.join(process.cwd(), 'message/messages.txt');

export function writeInFile(content) {
  
  fs.writeFileSync(messageDirectory, content,{flag: 'a+'}, e => {
    throw new Error({message: 'fail writing data'})
  } )
}




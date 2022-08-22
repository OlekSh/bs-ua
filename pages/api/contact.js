import { writeInFile } from "../../lib/contact";

export default function handler(req, res) {
  const { name, email, message} = req.body;

let str = `\n DATE : ${new Date().toUTCString()} \n name : ${name} \n email: ${email} \n message: ${message} \n  `;

 try {

  writeInFile(str);

 } catch(err) {

  res.status(500).json({error: 'failing to write'});

 }

  

  res.status(200).json({message: 'All right'});

}
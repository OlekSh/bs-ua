import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user : process.env.user,
    pass: process.env.pass
  }
});

export default function handler(req, res) {
  const { name, email, message } = req.body;

  transporter.verify().then(console.log).catch(console.error);

  transporter.sendMail({
    from: `SERVER FORM <${process.env.user}>`,
    to: `${process.env.target}`,
    subject: 'Message from form site',
    text: "There is a new article. It's about sending emails, check it out!",
    html: `<div> <h1>Name : ${name} Mail: ${email}</h1> <p>${message}</p> </div>`,
  })
  .then(responce => {
    res.status(200).json({message: 'Letter sending'})
  })
  .catch(err => {
    console.log('!!!! SUKA ERROR')
    res.status(500).json({error: 'Failed sending'});
  })
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//# sourceMappingURL=index.js.map
// const functions = require('firebase-functions');
// const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebaseConfig);

// const cors = require('cors')({origin: true});

// const SENDGRID_API_KEY = "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";

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(SENDGRID_API_KEY);
// sgMail.setSubstitutionWrappers('{{', '}}');

// exports.httpEmail = functions.https.onRequest((req, res)=> {
//     cors(req, res, () => {
//         const message = {
//             to: 'parata.momo@gmail.com',
//             from: 'prot.p@ku.th',
//             subject: 'Sendgrid',
//             text: "Hello, World",
//             html: "<h1>Hello, World</h1>"
//         }

//         sgMail.send(message);
//         res.status(200).send("email sent now");
//     });
//     // return Promise.resolve()
//     //             .then(()=>{
//     //                 if(req.method !== 'POST'){
//     //                     const err = new Error("Only POST requests are accepted");
//     //                     err.code = 405;
//     //                     throw err;
//     //                 }

                    
//     //             })
// });

// const functions = require('firebase-functions');
// // const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// const sendgrid = require('sendgrid');
// const client = sendgrid("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");

// function parseBody(body){
//     var helper = sendgrid.mail;
//     var fromEmail = new helper.Email(body.from);
//     var toEmail = new helper.Email(body.to);
//     var subject = body.subject;
//     var content = new helper.Content('text/html', body.content);
//     var mail = new helper.Mail(fromEmail, subject, toEmail, content);
//     return mail.toJSON();
// }

// exports.httpEmail = functions.https.onRequest((req, res) => {
//     return Promise.resolve()
//         .then(() => {
//             if(req.method !== 'POST'){
//                 const error = new Error('Only POST requests are accepted');
//                 error.code = 405;
//                 throw error;
//             }

//             const request = client.emptyRequest({
//                 method: 'POST',
//                 path: 'v3/mail/send',
//                 body: parseBody(req.body)
//             });

//             return client.API(request);
//         }).then((response)=>{
//             if(response.body){
//                 res.send(response.body);
//             }
//             else{
//                 res.end();
//             }
//         }).catch((err) => {
//             console.error(err);
//             return Promise.reject(err);
//         });
// })

const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account)=> {
    let transporter = nodemailer.createTransport({
        // host: 'smtp.ethereal.email',
        // port: 587,
        // secure: account.smtp.secure,
        // auth:{
        //     user: "px6q5wxjh4mbujih@ethereal.email",
        //     pass: "PpfUXDQ8N1kXbHfSXU"
        // }
        service: "gmail",
        auth: {
            user: "admins@choicechecker.net",
            pass: "NutMook09"
        }
    });
 
    let mailOptions = {
        from: "admins@choicechecker.net",
        to: "parata.momo@gmail.com",
        subject: "NodeMailer Test",
        html: "<h1>Hello, World</h1>"
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return console.error(error);
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview Url: %s", nodemailer.getTestMessageUrl(info));
    });
});
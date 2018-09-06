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
// const admin = require('firebase-admin');
// admin.initializeApp();

// const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// const SENDGRID_API_KEY = firebaseConfig.sendgrid.key;

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(SENDGRID_API_KEY);

// exports.httpEmail = functions.https.onRequest((req, res)=> {
//     return Promise.resolve()
//                 .then(()=>{
//                     if(req.method !== 'POST'){
//                         const err = new Error("Only POST requests are accepted");
//                         err.code = 405;
//                         throw err;
//                     }

                    
//                 })
// })
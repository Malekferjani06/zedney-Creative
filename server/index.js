const express = require("express");
const app = express();
require('dotenv').config()
const db = require('./config/db.js')




// app.get("/", (req, res) => {
//   const sqlInsert ="INSERT INTO new_contacts (contactsName, contactsPrenom, contactsEmail,contactsPhone) VALUES ('Malek','Ferjani','malekferjani@live.com',21034781);"
//   db.query(sqlInsert, (err, result) => {
//     res.send("heeello world");
//   });
// });




app.listen(6000, () => {
  console.log(`app running on port ${6000}`);
});

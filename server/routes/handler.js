const express = require('express');
const router = express.Router();
const db =  require('../config/db.js');

router.get('/contact', async (req, res) => {
    db.getConnection( (err, conn) => {
        if (err) throw err;
        const contactsName='Malek'
        const contactsPrenom='Ferjani'
        const contactsEmail ='malek@live.com'
        const contactsPhone=1541581
        const qry = `INSERT INTO new_contacts(contactsName, contactsPrenom, contactsEmail,contactsPhone) VALUES(?,?,?,?)`;
        conn.query(qry, [contactsName ,contactsPrenom,contactsEmail,contactsPhone ], (err, result) => {
            conn.release();
            if (err) throw err;
            console.log(result);
        });
      
        
      });
    
});

router.post('/addContact', async (req, res) => {
    const userTweet = req.body.tweetInput;
    const userId = 1; // 1=codrkai, 2=eaglefang

    db.getConnection( (err, conn) => {
        if (err) throw err;
        const contactsName='Malek'
        const contactsPrenom='Ferjani'
        const contactsEmail ='malek@live.com'
        const contactsPhone=1541581
        const qry = `INSERT INTO new_contacts(contactsName, contactsPrenom, contactsEmail,contactsPhone) VALUES(?,?,?,?)`;
        conn.query(qry, [contactsName ,contactsPrenom,contactsEmail,contactsPhone ], (err, result) => {
            conn.release();
            if (err) throw err;
            console.log(result);
        });
      });
        res.redirect('/adds');
        res.end();
    });


module.exports = router;
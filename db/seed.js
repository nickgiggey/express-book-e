// import Bookmark model 
const Bookmark = require('../models/Bookmark');
// import bookmark seed data
const bookmarks = require('./seeds.json');

Bookmark.insertMany(bookmarks)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err))
    .finally(() => process.exit());
// import Bookmark model
const Bookmark = require('../models/Bookmark');
// import User model
const User = require('../models/User');
// import bookmark seed data
const bookmarks = require('./seeds.json');

const users = [
    {
        name: 'Esin Saribudak',
        email: 'esin@cats.com',
    },
    {
        name: 'Zoe Peterson',
        email: 'zoe@cats.com',
    },
    {
        name: 'Tom Kolsrud',
        email: 'tom@cats.com',
    },
];

User.deleteMany().then(() => {
    User.insertMany(users)
        .then((res) => {
            // if successful, log the newly created users
            console.log(res);
        })
        // if there's an error, log the error
        .catch((err) => console.log(err))
        // lastly, hang up the database connection
        .finally(() => process.exit());
});

// create new bookmarks with the seed data
// Bookmark.insertMany(bookmarks)
// 	.then((res) => {
// 		// if successful, log the newly created bookmarks
// 		console.log(res);
// 	})
// 	// if there's an error, log the error
// 	.catch((err) => console.log(err))
// 	// lastly, hang up the database connection
// 	.finally(() => process.exit());
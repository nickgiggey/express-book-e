const express = require('express');
// instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router();
// import User model
const User = require('../models/User');

// localhost:8000/api/users
// GET: Index route
router.get('/', (req, res) => {
    // find all the users in the db
    User.find({}).then((users) => {
        // send them back as json
        return res.json(users);
    });
});

// localhost:8000/api/users/:id
// GET: Show route
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return res.sendStatus(404);
        } else {
            return res.json(user);
        }
    });
});

// localhost:8000/api/users/:id
// GET: Show route
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return res.sendStatus(404);
        } else {
            return res.json(user);
        }
    });
});

module.exports = router;
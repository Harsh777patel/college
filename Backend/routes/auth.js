const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//signup route
router.post('/signup', async (req, res) => {
    try{
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if(await User.findOne({ email })) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const salt =  bcrypt.genSaltSync(10);
    const hash =  bcrypt.hashSync(password, salt);
    const user = await User.create({
        name: name,
        email: email,
        password: hash
    });
    res.status(201).json({ message: 'User created successfully', userId: user._id });
    } catch (error) {
        res.status(500).json({  error: error.message });
}
});
module.exports = router;
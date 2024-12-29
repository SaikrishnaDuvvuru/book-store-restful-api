const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generateToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '24h' });
};

const verifyToken = (token) => {
    if(!token) {
        return null;
    }
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {generateToken, verifyToken};
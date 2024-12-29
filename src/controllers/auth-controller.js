const { generateToken } = require('../utilities/jwt-utility');

const userLogin = (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin123') {
        const user = { id: 1, username };
        const token = generateToken(user);
        res.status(200).send(token);
    } else {
        res.send('Invalid credentials');
        res.status(401);
    }
};



module.exports = userLogin;
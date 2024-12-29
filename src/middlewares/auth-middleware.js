const { verifyToken } = require('../utilities/jwt-utility');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        res.status(401).send('No token provided');
    }

    const user = verifyToken(token);

    if (!user) {
        res.status(401).send('Unauthorized');
    }
    req.user = user;
    next();
}


module.exports = authMiddleware;
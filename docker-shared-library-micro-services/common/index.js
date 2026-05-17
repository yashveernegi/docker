const jwt = require('jsonwebtoken');

module.exports = {
  // Use HS256 for simple string secrets
  verifyToken: (token, secret='my_simple_secret_123') => {
    try {
      return jwt.verify(token, secret, { algorithms: ['HS256'] });
    } catch (err) {
      return null;
    }
  },

  generateToken: (payload, secret='my_simple_secret_123') => {
    // Note: algorithm is 'HS256'
    return jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn: '1h' });
  },

  standardResponse: (res, status, message, data = null) => {
    res.status(status).json({ message, data });
  }
};
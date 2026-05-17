const express = require('express');
const { verifyToken, standardResponse } = require('@shared/common');
const app = express();

app.use(express.json());

const PUBLIC_KEY = process.env.PUBLIC_KEY; // Passed via Docker

app.get('/profile', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  const user = verifyToken(token, PUBLIC_KEY);

  if (!user) {
    return standardResponse(res, 401, "Invalid Token");
  }
  standardResponse(res, 200, "User profile found", { id: user.id });
});

app.listen(3002, () => console.log('Users service on 3002'));
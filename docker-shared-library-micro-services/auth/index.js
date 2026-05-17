const express = require('express');
const { standardResponse,generateToken } = require('@shared/common');
const app = express();

app.use(express.json());

const PUBLIC_KEY = process.env.PUBLIC_KEY; // Passed via Docker

app.post('/login', (req, res) => {
  const { id, email } = req.body;

  if (!id || !email) {
    return standardResponse(res, 400, "Missing id or email");
  }

  const token = generateToken({ id, email }, PUBLIC_KEY);
  standardResponse(res, 200, "Token generated", { token });
});

app.listen(3001, () => console.log('Auth service on 3001'));
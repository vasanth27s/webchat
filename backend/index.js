const express = require("express");
const cors = require("cors");
const axios = require("axios"); // don't forget to import axios

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "ff3f76d3-4e70-4e8e-8360-38c99cad0de4" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response && e.response.status) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});

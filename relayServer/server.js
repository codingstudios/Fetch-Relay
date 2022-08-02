const express = require('express');
const app = express();

app.post("/", async(req,res) => {
  try {
  var body = req.body;
  const data = (await axios(body)).data;
  res.json(data);
  }catch(e) {
  res.json({error: ${e}});
  }
})

app.get('/', (req,res) => res.send('OK'))

app.listen(3000);

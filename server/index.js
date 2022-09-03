const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { response } = require("express");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;
const URL = "https://jsonplaceholder.typicode.com/";

app.get('/todos', async (req, res) => {
    const apiResponse = await axios.get(URL + "todos");
    const data = apiResponse.data;
    res.send(data);
})

app.post('/todos', async (req, res) => {
    const apiResponse = await axios.post(URL + "lksjdflkfsjd", { uuid: req.body.id });
    const data = apiResponse.data;
    res.send(data);
})

app.patch('/aaa', (req, res) => {
    res.status(401);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

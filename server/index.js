const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { response } = require("express");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;
const URL = "https://jsonplaceholder.typicode.com";
const TODOS_URI = "/todos";

app.get(TODOS_URI, async (req, res) => {
    const apiResponse = await axios.get(URL + TODOS_URI);
    const data = apiResponse.data;
    res.send(data);
})

app.post(TODOS_URI, async (req, res) => {
    const reqData = {
        title: req.body.title || null,
        body: req.body.body || null,
        userId: req.body.userId || 1
    }
    const apiResponse = await axios.post(URL + TODOS_URI, reqData);
    const data = apiResponse.data;
    res.send(data);
})

app.patch('/aaa', (req, res) => {
    res.status(401);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

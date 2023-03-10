const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, postPoke, updatePoke, deletePoke} = require('./controller')

app.get("/api/compliment", getCompliment)

app.get('/api/fortune/', getFortune)

app.post('/api/pokemon/', postPoke)

app.put('/api/pokemon/', updatePoke)

app.delete('/api/pokemon/', deletePoke)






app.listen(4000, () => console.log("Server running on 4000"));

import express from "express";

const app = express();

app.get('/', (req, res) => {
	res.json({msg: "hi there"});
});

app.listen(3000);

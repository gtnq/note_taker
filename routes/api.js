const path = require("path");
const fs = require("fs");
const router = require("express").Router();
const address = path.join(__dirname, "../db/db.json");
const { v4 } = require("uuid");
const data = require(address)
console.log(data)

router.get("/notes", (req, res) => {
	res.sendFile(address);
	//console.log(address)
});

router.post("/notes", (res, req) => {
	
	let note = {
		title: res.body.title,
		text: res.body.text,
		id: v4(),
	};
	console.log(note)
    data.push(note)
	console.log(data)
    fs.writeFileSync(address, JSON.stringify(data))
	res.JSON(data)
    //res.json(data)
	
});

module.exports = router;

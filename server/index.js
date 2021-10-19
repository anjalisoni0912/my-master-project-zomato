import express from "express";

const zomato = express();

zomato.get("/", (req, res) => res.json({ messages: "Setup Success" }));

zomato.listen(4000, () => console.log("Server is running"));
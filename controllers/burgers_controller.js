const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne("burger_name", req.body.newBurger, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = `id = ${req.params.id}`;

    burger.updateOne("devoured", true, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        else
            return res.status(200).end();
    });
});

module.exports = router;
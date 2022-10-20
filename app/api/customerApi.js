const express = require("express");
const router = express.Router();

const customer = require("../controller/customer.controller");

router.get("/all", function (_req, res) {
  customer.all(function (err, customers) {
    if (err) {
      res.json({ error: true });
    } else {
      res.json(customers);
    }
  });
});

router.get("/:id", function (req, res) {
  customer.get(req.params.id, function (err, customer) {
    if (err) {
      res.json({ error: true });
    } else {
      res.json(customer);
    }
  });
});

router.post("/add", function (req, res) {
  customer.add(req.body, function (err, customer) {
    if (err) {
      res.json({ error: true });
    } else {
      res.json(customer);
    }
  });
});

router.put("/update/:id", function (req, res) {
  customer.update(
    req.params.id,
    req.body,
    function (err, customer) {
      if (err) {
        res.json({ error: true });
      } else {
        res.json(customer);
      }
    },
    { new: true }
  );
});

module.exports = router;

const express = require("express");
const router = express.Router();

const customerEvent = require("../controller/customerEvent.controller");

router.post("/add/:customerId", function (req, res) {
  customerEvent.add(
    req.params.customerId,
    req.body,
    function (err, customerEvent) {
      if (err) {
        res.json({ error: true });
      } else {
        res.json(customerEvent);
      }
    }
  );
});

module.exports = router;
